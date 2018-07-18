const bcrypt = require('bcrypt');
module.exports = {
    port : 5000,
    sessionSecretKey : bcrypt.hashSync("SECRET_KEY", 2),
    MongoDB_Name  : '',
    GraphqlPort : 3000
}