"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function page() {
  const [box, setBox] = useState(0);
  const [flag, setFlag] = useState(false);
  const showRef = useRef();
  const clickRef = useRef();

  function mouseD(e) {
    console.log(e.target);
    const handleMouseMove = (e) => {
      // console.log(e.offsetX)
      // console.log(e.movementX)
      setBox((s) => s + e.offsetX);
      console.log(e.offsetX);
      console.log(box);
    };

    showRef.current.addEventListener("mousemove", handleMouseMove);

    // const handleMouseUp = () => {
    // showRef.current.removeEventListener("mousemove", handleMouseMove);
    // showRef.current.removeEventListener("mouseup", handleMouseUp);
    // };

    // showRef.current.addEventListener("mouseup", handleMouseUp);
  }
  const [move, setMove] = useState(0);
  const moveRef = useRef();
  // function funMove(e) {
  //   if (e.target.id === "ok") {
  //     const boxWidth = 300;
  //     const elementWidth = 60;
  //     const handleMouseMove = (event) => {
  //       // console.log(event.offsetX)

  //       setMove((prevMove) => {
  //         const newMove = prevMove + -event.movementX;
  //         return Math.max(0, Math.min(newMove, boxWidth - elementWidth));
  //       });
  //       // console.log(event.offsetX)
  //       // console.log(event.pageX)
  //     };

  //     const handleMouseUp = (e) => {
  //       console.log(e.offsetX);
  //       if (e.offsetX < 90) {
  //         console.log("O");
  //         setBox(0);
  //       }

  //       moveRef.current.removeEventListener("mousemove", handleMouseMove);
  //       moveRef.current.removeEventListener("mouseup", handleMouseUp);
  //     };

  //     moveRef.current.addEventListener("mousemove", handleMouseMove);
  //     moveRef.current.addEventListener("mouseup", (e) => handleMouseUp(e));
  //   }
  // }


  return (
    <>
      <div className="w-full max-w-[942px] h-[764px] mx-auto ">
        <div className="w-full flex justify-center mt-[50px]">
          <span className="text-[14px] font-[500] text-[#354150]">
            به سادگی فرم بسازی
          </span>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="w-[742px] text-center flex  items-center justify-center   text-[#354150] text-[52px] font-[700] leading-[72px]">
            با یک کلیک{" "}
            <span className="w-[45px] mx-[10px] h-[45px] bg-[#3541501A] rounded-[15px] flex justify-center items-center">
              <Image width={20} height={20} src="icon/Essentional.svg" />
            </span>{" "}
            و به صورت رایگان
          </h1>
          <h1 className="w-[742px] text-center flex  items-center justify-center   text-[#354150] text-[52px] font-[700] leading-[72px]">
            فرم{" "}
            <span className="w-[45px] mx-[10px] h-[45px] bg-[#3541501A] rounded-[15px] flex justify-center items-center">
              <Image width={20} height={20} src="icon/Notes.svg" />
            </span>
            خود را بسازید
          </h1>
        </div>
        <div className="flex justify-center m-[15px]">
          <p className="w-[655px] text-[16px] text-center font-[400] text-[#354150] tracking-[0.18px]">
            برای شروع نام پروژه خود را وارد کنید و دکمه شروع کردن را بزنید تا
            وارد پنل کاربری خود شوید و بعد میتوانید به راحتی فرم خود را بسازید
          </p>
        </div>
        <div className='w-full h-[342px] bg-no-repeat flex justify-center relative mt-[50px]  bg-[url("/img/img-Head.png")]'>
          <div className="w-[435px] flex items-center justify-between h-[80px] absolute top-[-20px] bg-[#fff] rounded-b-[15px] p-[10px]">
            <Image width={18} height={20} src="icon/createP.svg" alt="Opss" />
            <input
              className="outline-none text-[#979797] "
              placeholder="نام پروژه خود را وارد کنید..."
              type="text"
            />
            <button className="w-[129px] h-[49px] rounded-[15px] text-[#fff] bg-[#354150]">
              ساخت پروژه
            </button>
          </div>

          <div className="w-[616px] h-[311px] absolute top-[150px] rounded-[8px] bg-[#F7F8FA] ">
            <div className="p-[10px] flex justify-between">
              <div></div>

              {/* ################ */}
              <div className="w-[133px] h-[24px] bg-[#3541505a] rounded-[15px] flex justify-center items-center">
                <h4 className="text-[#354150] text-[12px] font-[500]">
                  Freeform.ir
                </h4>
              </div>
              {/* ############# */}
              <div className="flex ">
                <span className="w-[10px] h-[10px] rounded-full bg-[#FA85A4]"></span>
                <span className="w-[10px] h-[10px] mx-[10px] rounded-full bg-[#FFE56E]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#52E282]"></span>
              </div>
            </div>
            {/* ********************** */}
            <div className="w-full flex justify-between pl-[24px] pr-[30px]">
              <div className="w-[151px] h-[212px] p-[15px] bg-[#fff] rounded-[15px] relative">
                <ul className="flex flex-wrap ">
                  <li className="w-[60px] h-[60px] rounded-tr-[15px] border"></li>

                  {/* <li
                    id="mov"
                    className="w-[350px] h-[60px] absolute right-[75px] bg-red-700"
                    ref={showRef}
                  >
                    <div
                      className="w-[60px] h-[60px] rounded-[15px] absolute  bg-[#354150]"
                      onMouseDown={(e) => mouseD(e)}
                      ref={clickRef}
                      style={{ left: box }}
                    ></div>
                  </li> */}
                  {/* <li
                    className="w-[60px] h-[60px] rounded-[15px] absolute  bg-[#354150]"
                    style={{ left: xy }}
                    ref={showRef}
                    onMouseDown={(e)=>showVal(e)}
                  ></li> */}

                  <li className=" w-[60px] h-[60px]"></li>
                  <li className="w-[60px] h-[60px] border"></li>
                  <li className="w-[60px] h-[60px] border"></li>
                  <li className="w-[60px] h-[60px] rounded-br-[15px] border"></li>
                  <li className="w-[60px] h-[60px] rounded-bl-[15px] border"></li>
                </ul>
              </div>
              <div className="w-[385px] py-[25px] px-[20px] h-[212px] bg-[#fff] rounded-[15px]">
                <div className="w-[342px] h-[58px] flex justify-center items-center rounded-[15px] border-[1px] border-[#979797] border-dashed">
                  <p className="text-[11px] text-[#979797]">
                    فرم خود را بسازید
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
