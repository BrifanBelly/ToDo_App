myApp.factory('ifauthService', function(){
    var IfAuth = false;
    return {
        set: function(temp){IfAuth = temp;},
        get: function(){return IfAuth; }

    }
});