const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
global.fetch = require('node-fetch');
var express = require("express");

var app = express();

const poolData = {    
    UserPoolId : "us-east-1_HyWEjsPir", // Your user pool id here    
    ClientId : "2l0oeerk50h653v43iofjtglnk" // Your client id here
    }; 
const pool_region = 'us-east-2';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// app.post("/registrarUsuario",(req,res) => {
//      RegisterUser();
// })

function RegisterUser(email,password){
   var attributeList = [];
   attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name",Value:"Lgante Keloke"}));
   attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address",Value:"Enrique Segoviano"}));
   userPool.signUp("garlopaficticia421@gmail.com", "123456789", attributeList, null, 
   function(err, result){
       if (err) {
           console.log(err);
           return;
       }
       cognitoUser = result.user;
       console.log('user name is ' + cognitoUser.getUsername());
   });
}


 function Login() {
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username : 'jracosta1992@gmail.com',
        Password : '123456789',
    });

    var userData = {
        Username : 'jracosta1992@gmail.com',
        Pool : userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log('access token + ' + result.getAccessToken().getJwtToken());
            console.log('id token + ' + result.getIdToken().getJwtToken());
            console.log('refresh token + ' + result.getRefreshToken().getToken());
        },
        onFailure: function(err) {
            console.log(err);
        },

    });
}

app.listen(3000, () => {
    console.log("Servidor en -> http://localhost:3000");
});

// RegisterUser();
//Login();