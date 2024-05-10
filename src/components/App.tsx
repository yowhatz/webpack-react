import cls from "./App.module.scss";
import { useState } from "react";
import Image from "../assets/P8och.png";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={cls.center}>
        Привет! Спасибо что скачали мою сборку Webpack-а^^
      </h1>
      <img src={Image} alt="" />
    </>
  );
};

export default App;
