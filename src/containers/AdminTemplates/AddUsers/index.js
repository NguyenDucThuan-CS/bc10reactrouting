import React, { useState } from "react";
import { actAddUser } from "./modules/actions";
import { connect, useSelector, useDispatch } from "react-redux"
import Loader from "./../../components/Loader"


 function AddUser(props) {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });
  

  const handleOnchange = (event) => {
      const {name, value} = event.target;
      setState({
          ...state,
          [name]: value,
      })
  }
  
  const handleAddUser = (event) => {
      event.preventDefault();
      props.addUser(state);
  }

  if(props.loading) return <Loader />
  return (
    <form className="container" onSubmit = {handleAddUser}>
      <h3>Them nguoi dung</h3>
      <div className="form-group">
        <span>Tai khoan</span>
        <input className="form-control" name="taiKhoan" onChange = {handleOnchange}/>
      </div>
      <div className="form-group">
        <span>Mat khau</span>
        <input className="form-control" name="matKhau" onChange = {handleOnchange}/>
      </div>
      <div className="form-group">
        <span>Ho ten</span>
        <input className="form-control" name="hoTen" onChange = {handleOnchange}/>
      </div>
      <div className="form-group">
        <span>Email</span>
        <input className="form-control" name="email" onChange = {handleOnchange}/>
      </div>
      <div className="form-group">
        <span>So dien thoai</span>
        <input className="form-control" name="soDt" />
      </div>
      
      
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Them nguoi dung
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) =>{
    return {
      loading: state.addUserReducer.loading,

    }
}
const mapsDispatchToProps = (dispatch) =>{
    return {
      addUser: (user)=>{
        dispatch(actAddUser(user));
      }
    }
}


export default connect(mapStateToProps, mapsDispatchToProps) (AddUser);