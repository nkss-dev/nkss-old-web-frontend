import React from "react";
import GoogleLogin from "react-google-login";
import "./Login.scss";

const Login = () => {
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  return (
    <div>
      <div> Click the login with google button below to signin </div>
      <div className="googleLoginBtn">
        <GoogleLogin
          clientId={"GOOGLE OAUTH CLIENT ID HERE"}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
          style={{ color: "black" }}
        />
      </div>
    </div>
  );
};

export default Login;
