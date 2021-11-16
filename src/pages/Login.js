import React, { useState } from "react";
import styled from "styled-components";

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
