import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";

const SignUp = () => {
  const [account, setAccount] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
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

  const signUp = () => {
    dispatch(userActions.signUpAPI(account));
  };

  return (
    <React.Fragment>
      <input
        name="email"
        type="text"
        placeholder="이메일"
        onChange={onChange}
        value={account.email}
        required
      />
      <input
        name="nickname"
        type="text"
        placeholder="닉네임"
        onChange={onChange}
        value={account.nickname}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호"
        onChange={onChange}
        value={account.password}
        required
      />
      <input
        name="passwordCheck"
        type="password"
        placeholder="비밀번호 확인"
        onChange={onChange}
        value={account.passwordCheck}
        required
      />
      <button onClick={signUp}>ddd</button>
    </React.Fragment>
  );
};

export default SignUp;
