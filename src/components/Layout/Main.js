import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
const Main = ({ user, setUser }) => {
  return (
    <div>
      <Header user={user} setUser={setUser}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
