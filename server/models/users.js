var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
    username : String,
    password : String
});
/*
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
*/
module.exports = mongoose.model('Myusers',userSchema);