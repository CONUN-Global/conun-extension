import React, { useState } from "react";

import { GoogleLogin, GoogleLogout } from "react-google-login";

import { googleToken } from "../const";

const LoginGoogle = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  // const user = {
  //   nickName: name,
  //   userEmail: email,
  // };
  // useEffect(() => {
  //   if (name && email) {
  //     window.localStorage.setItem("loginGoogle", JSON.stringify(user));
  //     const retrievedGoogleLogin = window.localStorage.getItem("loginGoogle");
  //     console.log("retrievedGoogleLogin", retrievedGoogleLogin);
  //   }
  // }, [name, email]);

  const onSuccess = (res: any) => {
    console.log(res);
    setName(res.profileObj.givenName);
    setEmail(res.profileObj.email);
  };
  return (
    <div>
      <GoogleLogin
        clientId={googleToken}
        buttonText="Login with Google"
        onSuccess={(result) => onSuccess(result)}
        onFailure={(result) => setError(result)}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        redirectUri="http://localhost/callback"
      />
      <GoogleLogout
        clientId="1000419591102-95b9f3e96kbjdks2jtgnh8qqmnsa1mc3.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={() => console.log("Logout successful!")}
      />
      <p>{name}</p>
      <p>{email}</p>
      {error && <p>{JSON.stringify(error, null, 2)}</p>}
    </div>
  );
};
export default LoginGoogle;
