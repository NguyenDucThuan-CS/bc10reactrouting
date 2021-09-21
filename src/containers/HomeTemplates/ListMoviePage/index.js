import React, { Component } from 'react'
import MovieItem from './MovieItem'
import axios from "axios";
import Loader  from './../../components/Loader';
import { actListMovieFailed, actListMovieSuccess,actListMovieRequest, fetchListMovie } from './modules/actions';
import { connect } from "react-redux"
class ListMovie extends Component {

   /*  constructor(props){
        super(props);
        this.state = {
            loading: false,
            data:null,
            error: null,
        }

    } */
    componentDidMount(){
       /*  this.setState({
            loading: true,
        }) */
       /*  this.props.request();
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

            /*     this.props.success(result.data);
            }) */

           /*  .catch((error)=>{
                console.log(error); */
                /* this.setState({
                    loading: false,
                    data: null,
                    error: error,
                }) */

           /*      this.props.error(error);
            })  */
            this.props.fetchData();
    }

    renderListMovie(){
        
        const { loading,data } = this.props;
        if(loading) return <Loader />
        return data?.map((item)=>{
            return <MovieItem key = {item.maPhim} movie = {item}/>
        })
    }

    render() {
        return (
            <div className="container">
                <h3>List moviepage</h3>
                <div className = "row">
                    {this.renderListMovie()}
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
       /*  request: () => {
            dispatch(actListMovieRequest());
        },

        success: (data) =>{
            dispatch(actListMovieSuccess(data));
        },

        error: (error)=>{
            dispatch(actListMovieFailed(error));
        } */

        fetchData: () => {
            dispatch(fetchListMovie())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.listMovieReducer.loading,
        data: state.listMovieReducer.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ListMovie);