//Guardar al usuario a la base de datos
//buscar a un usuario que se quiere loguear por su email
//editar informacion de un usuario
//eliminar a un usuario de la base de dato

const fs= require("fs");

const User = {
    fileName:"./data/usersDataBase.json",  //donde tengo ubicado los datos

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    findAll: function(){
        return this.getData();
    },

    findByPk: function(id){
        let  allUser = this.findAll();
        let userFound = allUser.find( oneUser => oneUser.id === id); //busca (find) si el id que le 
        return userFound;                                           //doy esta en la base y lo compara con el === 
    },    
    
    findByField: function(field, text){
        let  allUser = this.findAll();
        let userFound = allUser.find( oneUser => oneUser[field] === text); //busca (find) si el id que le 
        return userFound;                                           //doy esta en la base y lo compara con el === 
    },    
    
    create: function(userData){

    }
}
console.log(User.findByField("user_name", "pepe"))