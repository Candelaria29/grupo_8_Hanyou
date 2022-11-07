const db = require("../../database/models");
const Users = db.User;

module.exports = {
  list: async (req, res) => {
    const usersCount = await Users.count();
    const usersDetail = await Users.findAll();
    function user() {
      let arrayUsers = [];
      for (i = 0; i < usersDetail.length; i++) {
        singleUser = {
          firstName: usersDetail[i].firstName,
          lastName: usersDetail[i].lastName,
          email: usersDetail[i].email,
          detail: `${req.url}/${usersDetail[i].id}`,
        };
        // console.log(usersDetail[i].firstName);
        // console.log(singleUser);
        arrayUsers.push(singleUser);
      }
      return arrayUsers;
    }
    // console.log(usersDetail[0].firstName);
    res.json({ "Total de usuarios": usersCount, Usuarios: user() });
  },
  detail: async (req, res) => {
    const singleUser = await Users.findByPk(req.params.id);
    const userDetail = {};
    userDetail.firstName = singleUser.firstName;
    userDetail.lastName = singleUser.lastName;
    userDetail.email = singleUser.email;
    userDetail.id = singleUser.id;
    userDetail.avatar = `/img/users/${singleUser.avatar}`;
    res.json(userDetail);
  },
};
