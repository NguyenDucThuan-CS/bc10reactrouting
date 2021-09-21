import React, { Component } from 'react';
import { actFetchDetailMovie } from "./modules/actions";
import { connect } from "react-redux"
import Loader from "./../../components/Loader";

class DetailMoviePage extends Component {
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchDatailMovie(id);
    }

    renderTable = () => {
        const {data} = this.props;
        return data?.lichChieu?.map((item) =>{
            return (
                <tr key = {item.maLichChieu}>
                    <td>{item.thongTinRap.tenCumRap}</td>
                    <td>{item.thongTinRap.tenRap}</td>
                    <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                    <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                    <td>
                        <a href = "#dat-ve" className = "btn btn-success">
                            Dat ve
                        </a>
                    </td>
                </tr>
            )
        })
    }


    render() {
        const {loading, data} = this.props;
        if(loading) return <Loader />
        return (
            <div className = "container">
                <h3>Detail movie page</h3>
                <div className = "row">
                    <div className = "col-md-6">
                        <img className = "img-fluid" src = {data &&  data.hinhAnh} alt = ""/>
                    </div>
                    <div className = "col-md-6">
                        <table class = "table">
                            <tbody>
                                <tr>
                                    <td>Ten phim</td>
                                    <td>{data && data.tenPhim}</td>
                                </tr>

                                <tr>
                                    <td>Mo ta</td>
                                    <td>{data && data.moTa}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-md-12">
                        <table className = "table">
                            <thead>
                                <tr>
                                    <th>Cum rap</th>
                                    <th>Ten rap</th>
                                    <th>Ngay chieu</th>
                                    <th>Gio chieu</th>

                                </tr>
                            </thead>

                            <tbody>
                                {this.renderTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.detailMovieReducer.loading,
        data: state.detailMovieReducer.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchDatailMovie: (id) => {
            dispatch(actFetchDetailMovie(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (DetailMoviePage);
