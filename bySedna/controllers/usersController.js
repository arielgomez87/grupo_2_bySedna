const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

const usersController = {
  // Create - Form to create
  register: (req, res) => {
    db.Province.findAll().then(function (provinces) {
      return res.render("register", { provinces: provinces });
    });
  },

  // Create -  Method to create
  processRegisterNewUser: async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
      const provinces = await db.Province.findAll()

      return res.render("register", {
        errors: errors.mapped(), /**.mapped convierte el array en un objeto literal **/
        oldData: req.body,
        provinces
      })
    };

    const userInDataBase = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userInDataBase) {
      const provinces = await db.Province.findAll();


      return res.render("register", {
        errors: {
          email: {
            msg: "Este email ya esta registrado",
          },
        },
        oldData: req.body,
        provinces,
      });
    }
    const imgUser = req.file
      ? req.file.filename
      : "avatarDefault.png";
    //avatar de usuario


    db.User.create({
      fullName: req.body.fullName,
      imageUser: imgUser,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      provinceId: req.body.province
    })

      .then((user) => {
        console.log(user);
        return res.redirect("/users/login/");
      })
      .catch((error) => {
        //redirect a una vista de error!!
        console.log("error de la base de datos");
      });
  },

  // Login -  Method to Login
  login: (req, res) => {
    return res.render("login");
  },

  loginProcess: (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((userToLogin) => {
        if (userToLogin) {
          let thePasswordIsOk = bcrypt.compareSync(
            req.body.password,
            userToLogin.password
          );
          if (thePasswordIsOk) {
            delete userToLogin.password; //elimina la passsword de la info que devuelve y no la veo en session
            req.session.userLogged = userToLogin;
            if (req.body.remember_user) {
              res.cookie("userEmail", req.body.email, {
                maxAge: 1000 * 60 * 2,
              });
            }
            return res.redirect("/users/profile"); //si esta correcto email y contraseña redirige
          } else {
            throw {
              errors: {
                password: {
                  msg: "contrasena invalida", //si esta incorrecta la contraseña muestra ese mensaje
                },
              },
            };
          }
        } else {
          throw {
            errors: {
              email: {
                msg: "Verificar los datos", //si esta incorrecta la contraseña muestra ese mensaje
              },
            },
          };
        }
      })
      .catch((error) => {
        return res.render("login", error);
      });
  },

  //para entrar a su perfil
  profile: (req, res) => {
    return res.render("userPage", {
      user: req.session.userLogged, // envia a la vista los datos del usuario logueado y los puedo usar en la vista
    });
  },

// Edit -  Method to Edit user
  edit: (req, res) => {
    let userEdit = req.session.userLogged;
    if(userEdit){
      let allProvinces = db.Province.findAll()

      Promise.all([userEdit, allProvinces])
        .then(function ([user, provinces]) {
          res.render("editUser", { user: user, provinces: provinces })
        })
    } else {
      return res.redirect('/')
    }
  },

  // Update -  Metodo para actualizar Usuario
  update:  async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
      let userEdit = db.User.findByPk(req.params.id);
      let allProvinces = db.Province.findAll()

    Promise.all([userEdit, allProvinces])
      .then(function ([user, provinces]){
       return res.render("editUser", { user: user, provinces: provinces, 
          errors: errors.mapped(), /**.mapped convierte el array en un objeto literal **/
        oldData: req.body,
        provinces })
      })
      return
    };

    const imgUser = req.file
      ? req.file.filename
      : "avatarDefault.png";
    //avatar de usuario
      const userToUpdate = await db.User.findByPk(req.params.id)


    db.User.update({
      fullName: req.body.fullName,
      imageUser: imgUser,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      password: bcrypt.hashSync(req.body.password, 10),
      provinceId: req.body.province
    }, {
      where: {
        id: req.params.id
      }
    })

      .then(async (user) => {
        const userUpdated = await db.User.findByPk(req.params.id)
        console.log(user);
        req.session.userLogged = userUpdated;  
        return res.redirect("/users/profile/");
      })
      .catch((error) => {
        console.log(error);
        //redirect a una vista de error!!
        console.log("error de la base de datos");
      });
  },

  delete: (req, res) => {
db.User.destroy({
  where:{
    id: req.params.id
  }
})
res.clearCookie("userEmail");
req.session.destroy();
res.redirect("/")
  },

// LogOut -  Metodo para cerrar sesion
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect(
      "/"
    ); /** destruye la session por lo tanto se cierra la session y salis del login */
  },
};

module.exports = usersController;
