//editar informacion de un usuario

const fs= require("fs");
const { builtinModules } = require("module");

const User = {
    fileName:"./data/usersDataBase.json",  //donde tengo ubicado los datos

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    generateId: function(){
        let allUser = this.findAll();
        let lastUser = allUser.pop();
        if(lastUser){
       return lastUser.id + 1       /*con la funcion pop pido al ultimo en la base de datos 
                                y a ese "id le sumo uno para el nuevo usuario" si no tengo nada antes le da valor 1*/
    } else{                    
    return 1;
    }},                              

    findAll: function(){
        return this.getData();
    },

    findByPk: function(id){
        let  allUser = this.findAll();
        let userFound = allUser.find( oneUser => oneUser.id === id); /*busca (find) si el id que le 
                                                                doy esta en la base y lo compara con el === */
        return userFound;     
    },    
    
    findByField: function(field, text){
        let  allUser = this.findAll();
        let userFound = allUser.find( oneUser => oneUser[field] === text); /*busca y compara el (field. Ej:"Email") 
                                                                    con el texto que le doy Ej: "pepe@hotmail.com"*/
         return userFound; 
    },    
    
    create: function(userData){
        let  allUser = this.findAll();
        let  newUser = {
            id : this.generateId(),
            ... userData,
        }
        allUser.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUser, null, " "));
        return newUser;
    },

    delete: function(id){
        let allUser = this.findAll();
        let finalUser = allUser.filter(oneUser => oneUser.id !== id);  /*con el metodo filter devuelve todos los usuarios
                                                                            menos el que tiene el Id que le di*/
         fs.writeFileSync(this.fileName, JSON.stringify(finalUser, null, " "));
         return true;
    }
};

module.exports = User;
