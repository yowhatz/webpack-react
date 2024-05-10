import cls from "./App.module.scss";
import { useState } from "react";
import Image from "../assets/test_.png";

const App = () => {
  return (
    <>
      <h1 className={cls.center}>
        Привет! Спасибо что скачали мою сборку Webpack-а^^
      </h1>
      <img src={Image} alt="менеджер фалой VSCode" />
    </>
  );
};

export default App;
