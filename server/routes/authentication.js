var User = require('../models/users');
module.exports = function(router,passport){

    /*
    router.post('/users/signup',function(req,res){
        console.log(req.body);
        var NewUser = new User();
        NewUser.username = req.body.username;
        NewUser.password = req.body.password;
        NewUser.save(function(err,data){
           if(err)
           throw err;
            console.log('user inserted'+data);
            res.json(data);
        });
    });
    */
    router.get('/users',function(req,res){
        User.find({},function(err,data){
            if(err)throw err;
            res.json(data);

        });
    });

/*
    router.post('/users/signin',function(req,res){
        console.log(JSON.stringify(req.body));
        User.findOne({username: req.body.username},function(err,data){
            //console.log('in callback'+JSON.stringify(Newuser)+'  '+JSON.stringify(data));
            if(err)throw err;
                if(data.password != req.body.password){console.log('wrong password')}
            else
            if(data.password == req.body.password){console.log('u r signed in')}
            res.json(data);

        });

    });
*/

    router.post('/users/signin', passport.authenticate('local-login'),function(req, res){
        res.send(req.user);
    });

    router.post('/users/signup', passport.authenticate('local-signup'),function(req, res){
        res.send(req.user);
    });



};
