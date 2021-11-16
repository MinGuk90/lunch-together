import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

//action
const SIGN_UP = "SIGN_UP";
const SET_USER = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_ERROR = "SET_ERROR";

//action create
const signUp = createAction(SIGN_UP);
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT);
const setError = createAction(SET_ERROR, (error) => ({ error }));

const initialState = {
  user: null,
  isLoggedIn: false,
  error: [],
};

//middleware
export const signUpAPI = (_account) => {
  return function (dispatch, getState, { history }) {
    console.log(_account);
    const account = {
      email: _account.email,
      nickname: _account.nickname,
      password: _account.password,
    };
    apis
      .checkEmail(account.email)
      .then((res) => {
        console.log(res);
        apis
          .checkNickname(account.nickname)
          .then((res) => {
            console.log(res);
            apis
              .registerUser(account)
              .then((rec) => {
                console.log(res);
                history.push("/login");
              })
              .catch((err) => {
                dispatch(setError(err.response.data.msg));
              });
          })
          .catch((err) => {
            dispatch(setError(err.response.data.msg));
          });
      })
      .catch((err) => {
        dispatch(setError(err.response.data.msg));
      });
  };
};

export const logInAPI = (account) => {
  return function (dispatch, getState, { history }) {
    console.log(account);
    apis
      .logIn(account)
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        const user = res.data.user;
        localStorage.setItem("token", token);
        dispatch(setUser(user));
        history.push("/");
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err);
        dispatch(setError(err.response.data.msg));
      });
  };
};

//reducer
export default handleActions(
  {
    [SIGN_UP]: (state, action) =>
      produce(state, (draft) => {
        console.log(action);
      }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.isLoggedIn = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.isLoggedIn = false;
      }),
    [SET_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.error.push(action.payload.error);
      }),
  },
  initialState,
);

const userActions = {
  signUpAPI,
  logInAPI,
};

export { userActions };
