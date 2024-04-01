import dynamic from 'next/dynamic';
import Link from "next/link";
// import Lottie from "react-lottie-player";
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });
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
