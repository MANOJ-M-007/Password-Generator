import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import PasswordBox from "../Components/PasswordBox";
import List from "../Components/List";
import { PasswordProvider } from "../Components/PasswordContext";

const Home = () => {
  return (
    <div>
      <PasswordProvider>
        <Navbar />
        <Banner />
        <PasswordBox />
        <List />
      </PasswordProvider>
    </div>
  );
};

export default Home;
