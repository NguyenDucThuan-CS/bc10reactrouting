import * as ActionType from "./constants";
import axios from 'axios'
export const fetchListMovie = () => {
    return (dispatch) => {
        dispatch(actListMovieRequest());
        axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
            method: "GET",
        })
    
        .then((result)=>{
            console.log(result.data);
            /* this.setState({
                loading: false,
                data: result.data,
                error: null,
            }) */
    
           /*  this.props.success(result.data); */
           dispatch(actListMovieSuccess(result.data));

        })
    
        .catch((error)=>{
            console.log(error);
            /* this.setState({
                loading: false,
                data: null,
                error: error,
            }) */
    
            /* this.props.error(error); */
            dispatch(actListMovieFailed(error));
        })
    }
   
}
export const actListMovieRequest = () => {
    return {
        type: ActionType.LIST_MOVIE_REQUEST,  
    }
}

export const actListMovieSuccess = (data) => {
    return {
        type: ActionType.LIST_MOVIE_SUCCESS,
        payload: data,
    }
}

export const actListMovieFailed = (data) => {
    return {
        type: ActionType.LIST_MOVIE_FAILED,
        payload: data,
    }
}