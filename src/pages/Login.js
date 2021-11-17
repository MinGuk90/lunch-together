import React, { useState } from "react";
import styled from "styled-components";

import { apis } from "../shared/axios";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/modules/user";

const Login = (props) => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setAccount({
      ...account,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const logIn = () => {
    dispatch(userActions.logInAPI(account));
  };

  const { Kakao } = window;

  const loginWithKakao = () => {
    // 카카오 로그인
    Kakao.Auth.login({
      success: (authObj) => {
        console.log(authObj);

        // 유저정보 요청코드
        Kakao.API.request({
          url: "/v2/user/me",
          data: {
            property_keys: ["properties.profile_image", "properties.nickname"],
          },
          success: async function (res) {
            const user = {
              id: res.id,
              image: res.properties.profile_image,
              nickname: res.properties.nickname,
            };
            const data = await apis.kakaologin(user);
            const token = data.data.token;
            if (token) {
              localStorage.setItem("token", token);
              dispatch(userActions.getUserAPI());
              history.push("/");
            } else {
              window.alert("로그인에 실패했습니다.");
            }
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
    });
  };

  const error = useSelector((state) => state.user.error);

  return (
    <>
      <Wrapper>
        <Logo></Logo>
        <InputWrapper>
          <Input
            name="email"
            type="text"
            value={account.email}
            placeholder="아이디를 입력해주세요"
            onChange={onChange}
            required
          />
          <Input
            name="password"
            type="password"
            value={account.passward}
            placeholder="비밀번호를 입력해주세요"
            onChange={onChange}
            required
          />
          {error && (
            <Text
              style={{
                width: "100%",
                color: "red",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              {error}
            </Text>
          )}
        </InputWrapper>
        <LoginButton onClick={logIn}>이메일로 시작하기</LoginButton>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100vh;
  width: 33.3%;
  min-width: 350px;
  background-color: #ff8a5c;
`;

const Logo = styled.div`
  margin: 100px auto;
  width: 100px;
  height: 100px;
  background-color: yellow;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #fff591;
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: white;
  min-width: 80px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 50%;
  height: 40px;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
`;

const LoginButton = styled.button`
  width: 50%;
  height: 40px;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
`;

export default Login;
