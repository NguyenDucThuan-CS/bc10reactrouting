import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class MovieItem extends Component {
    render() {
        const {movie} = this.props;
        return (
            <div className = "col-md-3">
                <div class="card">
                    <img class="card-img-top" src={movie.hinhAnh} alt="" />
                    <div class="card-body">
                        <h4 class="card-title">{movie.tenPhim}</h4>
                        <p class="card-text">Text</p>
                        <Link className = "btn btn-info" to = {`/detail/${movie.maPhim}`}>
                            Detail
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
