import React, { Component } from 'react'
import NhanVien from './NhanVien'
import SanPham from './SanPham'
import WithCard from './WithCard'

const WrapperCard = WithCard(SanPham);

export default class HocPage extends Component {
    render() {
        return (
            <div>
                HocPage
                <WrapperCard />
            </div>
        )
    }
}
