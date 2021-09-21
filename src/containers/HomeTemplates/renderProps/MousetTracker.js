import React, { Component } from "react";
import Mouse from "./Mouse";
import Cat from "./Cat";
import withMouse from "./withMouse";
const WrapperMouse = withMouse(Cat);

export default class MouseTracker extends Component {
  /* getXY = (mouse) => {
      return <Cat mouse = {mouse}/>
  } */
  render() {
    return (
      <>
        <h1>Move the mouse around!</h1>
       {/*  <Mouse render = {(mouse)=><Cat mouse = {mouse}/>}/> */}
       <WrapperMouse />
      </>
    );
  }
}
