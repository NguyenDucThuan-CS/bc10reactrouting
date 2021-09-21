import React, { Component } from 'react'
import MouseTracker from './MousetTracker'
import MouseWithCat from './MouseWithCat'
export default class RenderProps extends Component {
    render() {
        return (
            <div>
                <h3>Render props</h3>
                <MouseTracker />
            </div>
        )
    }
}
