import Link from "next/link";
import Lottie from "react-lottie-player";
import Spin from "../../assets/json/spinner-white.json";
import Image from "next/image";

import React from "react";
const style = { height: "70px", width: "70px" };

export default function Spinner() {
  return (
    <span className="">
      <Lottie animationData={Spin} style={style} play />
    </span>
  );
}
