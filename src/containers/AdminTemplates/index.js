import React, { Component } from "react";
import Navbar from "./_component/Navbar";
import { Route, Redirect } from "react-router-dom";

function LayoutAdmin(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    /*   <div>
             <LayoutAdmin>
                 <Route exact = {exact} path = {path} component = {Component}/>
            </LayoutAdmin>
        </div> */
    <Route
      {...props}
      render={(propsRoute) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <LayoutAdmin>
              <Component {...propsRoute} />
            </LayoutAdmin>
          );
        }

        return <Redirect to="/auth"/>
      }}
    />
  );
}
