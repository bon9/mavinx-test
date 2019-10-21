// import { put } from "redux-saga/effects";
// import axios from "axios";

// import * as actions from "../actions";

// export function* authUserSaga(action) {
//   yield put(actions.authStart());
//   const authData = {
//     email: action.email,
//     password: action.password,
//     returnSecureToken: true
//   };
//   const apiKey = "AIzaSyCe4zU0c2tViAbPHhTjcigPxtE0x1HE0FM";
//   let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`;
//   if (action.isSignup) {
//     // если зареган то URL для проверки пароля
//     url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`;
//   }
//   try {
//     const response = yield axios.post(url, authData);
//     // отправляем в Storage token и время до которого он будет действовать
//     // expiresIn - кол-во секунд, которое будет действовать token пришедший
//     const expirationDate = yield new Date(
//       new Date().getTime() + response.data.expiresIn * 1000
//     );
//     yield put(
//       actions.authSuccess(response.data.idToken, response.data.localId)
//     );
//     yield put(actions.checkAuthTimeout(response.data.expiresIn));
//   } catch (error) {
//     yield put(actions.authFail(error));
//   }
// }
