import axios from "axios";

const instance = axios.create({
  // baseURL: "http://lebania.shop",
});

export const apis = {
  //회원가입
  registerUser: (user) =>
    instance.post(`signup`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  //로그인
  logIn: (user) =>
    instance.post(`/login`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  kakaologin: (user) =>
    instance.post(`/kakaologin`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  //이메일 중복확인
  checkEmail: (email) =>
    instance.post(
      "/checkemail",
      { email },
      {
        headers: {
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json",
        },
      },
    ),

  //닉네임 중복확인
  checkNickname: (nickname) =>
    instance.post(
      "/checknickname",
      { nickname },
      {
        headers: {
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json",
        },
      },
    ),
};
