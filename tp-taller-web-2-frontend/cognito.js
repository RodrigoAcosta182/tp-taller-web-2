const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
global.fetch = require("node-fetch");
var express = require("express");
var app = express();
const cors = require("cors");
const port = 3000;

//config de app
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

const poolData = {
  UserPoolId: "us-east-1_HyWEjsPir", // Your user pool id here
  ClientId: "2l0oeerk50h653v43iofjtglnk", // Your client id here
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

app.post("/login-usuario", (req, res) => {
  //validar req
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
    Username: req.body.email,
    Password: req.body.password,
  });

  var userData = {
    Username: req.body.email,
    Pool: userPool,
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      console.log("access token + " + result.getAccessToken().getJwtToken());
      console.log("id token + " + result.getIdToken().getJwtToken());
      console.log("refresh token + " + result.getRefreshToken().getToken());
      //respuesta del post, puse para que devuelva el token, hay que ver como traer los datos del usuario
      res.status(200).jsonp(result.getAccessToken().getJwtToken());
    },
    onFailure: function (err) {
      const error = {
        message: err.message,
        code: err.code,
      };
      console.log(error);
      res.status(500).send(error);
    },
  });
});

app.post("/registrar-usuario", (req, res) => {
  //validar req
  var attributeList = [];
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "name",
      Value: req.body.nombre,
    })
  );
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "address",
      Value: req.body.direccion,
    })
  );
  userPool.signUp(
    req.body.email,
    req.body.password,
    attributeList,
    null,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).send(error.message);
        return;
      }
      cognitoUser = result.user;
      res.status(200).jsonp(req.body);
      console.log("user name is " + cognitoUser.getUsername());
    }
  );
});

app.post("/confirmar-usuario", (req, res) => {
  const { Username, ConfirmationCode } = req.body;
  //agregar validaciones
  // if(Username !== undefined && ConfirmationCode !== undefined){}

  var userData = {
    Username: Username,
    Pool: userPool,
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.confirmRegistration(
    ConfirmationCode,
    true,
    function (err, result) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(200).jsonp(result);
    }
  );
});

app.listen(port, () => {
  console.log("Servidor en -> http://localhost puerto: " + port);
});
