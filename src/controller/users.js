const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
   try {
      
      const [data] = await UsersModel.getAllUsers();

      res.json({
         message : "Get All Users Success!",
         data : data
      })

   } catch (error) {
      res.status(500).json({
         message: "Server Error!",
         serverMessage: error,
      })
   }

};

const createNewUser = async (req, res) => {
    // const bodyPayload = req.body --restructuring bellow
   const {body} = req
   try {
      await UsersModel.createNewUser(body);
      res.json({
         message :'Create New User Success', 
         data : req.body
      })

   } catch (error) {
      res.status(500).json({
         message: "server error!",
         serverMessage: error,
      })
   }
};

const updateUser = async (req, res) => {
   const {idUser} = req.params
   const {body} = req

   try {
      
      await UsersModel.updateUser(body, idUser)
      res.json({
         message: "UPDATE USER SUCCESS!",
         data : {
            id: idUser,
            body
         }
      })

   } catch (error) {
      res.status(500).json({
         message: "Server Error - Gagal Update",
         serverMessage: error,
      })
   }
}

const deleteUser = async (req, res) => {
   const {idUser} = req.params;
   const {body} = req;

   try {
      
      await UsersModel.deleteUser(idUser);
      res.json({
         message : "delete success!",
         data : req.body
      })
   } catch (error) {
      res.status(500).json({
         message: "Server Error Failed Delete",
         serverMessage: error
      })
   }
}

module.exports = {
   getAllUsers,
   createNewUser,
   updateUser,
   deleteUser,
}

