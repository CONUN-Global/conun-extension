import React, { useState } from "react";
import KakaoLogin from "react-kakao-login";
import { kakaoToken } from "../const";

const LoginKakao = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [res, setRes] = useState(null);
  const [error, setError] = useState<any>(null);
  // const user = {
  //   userName: name,
  //   userEmail: email,
  // };
  //   useEffect(() => {
  //     if (name && email) {
  //       window.localStorage.setItem("loginKakao", JSON.stringify(user));
  //       const retrievedKakaoLogin = window.localStorage.getItem("loginKakao");
  //       console.log("Kakao", retrievedKakaoLogin);
  //     }
  //   }, [name, email]);
  // const onSuccess = (res: any) => {
  //   setName(res.profile.kakao_account.profile.nickname);
  //   setEmail(res.profile.kakao_account.email);
  // };
  return (
    <div>
      <KakaoLogin
        token={kakaoToken}
        onSuccess={(res) => console.log(res)}
        onFail={(err) => setError(err)}
        onLogout={console.info}
        style={{
          backgroundColor: "yellow",
          //   color: "blue",
        }}
      />
      <p>{JSON.stringify(error, null, 2)}</p>
      {/* <p>{JSON.stringify(res, null, 2)}</p> */}
    </div>
  );
};

export default LoginKakao;
