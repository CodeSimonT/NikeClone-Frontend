import React from "react";
import { menShoes } from "../../../server/dataList/menShoes";
const Login = () => {
  return (
    <div>
      {menShoes.map((item) => (
        <img src={item.image} alt="" key={item.id} />
      ))}
    </div>
  );
};

export default Login;
