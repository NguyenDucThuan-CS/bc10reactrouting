import axios from "axios";
import * as ActionType from "./constants";
import setHeader  from "../../../../utils/setHeader";
import api from "../../../../utils/apiUtils"
export const actLoginAuth = (user, history) => {
  return async (dispatch) => {
    try {
      dispatch(actAuthRequest());
      /* const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: user,
      }); */
      const result = await api.post("QuanLyNguoiDung/DangNhap", user);
      console.log(result);
      if (result.statusText === "OK") {
        if(result.data.maLoaiNguoiDung === "KhachHang"){
          return Promise.reject({
            response: {
              data: "Ban k co quyen truy cap"
            }
          }).catch((error)=>{
            dispatch(actAuthFailed(error));
          });
        }

        setHeader(result.data.accessToken);
        localStorage.setItem("UserAdmin", JSON.stringify(result.data));


        history.replace("/dashboard");
        dispatch(actAuthSuccess(result.data));
      } else {
        dispatch(actAuthFailed(result));
      }
    } catch (error) {
      dispatch(actAuthFailed(error));
    }
  };
};
export const actTryLogin = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("UserAdmin"));
    if(!user) return;

    setHeader(user.accessToken);
    dispatch(actAuthSuccess(user));
  }
}
const actAuthRequest = () => {
  return {
    type: ActionType.AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (data) => {
  return {
    type: ActionType.AUTH_FAILED,
    payload: data,
  };
};
