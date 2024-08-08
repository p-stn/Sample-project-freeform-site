"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import product from "@/data/localData";
import Folder from "@/../../public/icon/iconBody/SecThree/file";
import Bin from "@/../../public/icon/iconBody/SecThree/bin";
import Desin from "@/../../public/icon/iconBody/SecThree/desin";
import Oom from "@/../../public/icon/iconBody/SecThree/dom";
import Dot from "@/../../public/icon/doted";
import MiniFolderIcon from "@/../../public/icon/miniIconFolder";
import ArrowIcon from "@/../../public/icon/mArrowLeft";

import { items, boxItem, formL, infoFolder } from "@/data/localData";

export default function page() {
  const [svgBtn, setSvgBtn] = useState("#354150");
  const [activbtn, setActicbtn] = useState(0);
  const [formbtn, setFormbtn] = useState(0);
  const [flagFolder, setFlagFolder] = useState(0);
  const showHide = useRef(null);
  const [flag, setFlag] = useState(true);
  return (
    <>
      <div className="w-full max-w-[1117px] h-auto mt-[150px] mx-auto">
        <div className="w-full h-[184px] flex">
          <div className="w-[50%] h-full ">
            <p className="text-[14px] text-[#354150] font-[500]">
              قالب های تخصصی فری فرم
            </p>
            <h1 className="w-[503px] text-[46px] font-bold text-[#354150]">
              قالب های تخصصی و متنوع برای کسب و کارها
            </h1>
          </div>
          <div className="w-[50%] h-full flex justify-end items-end ">
            <button className="w-[88px] h-[37px] rounded-[15px] text-[#fff] font-sans text-[12px] bg-[#354150]">
              همه مقالات
            </button>
          </div>
        </div>
        <div className="mt-[60px] flex flex-wrap justify-between">
          {product.map((e) => {
            return (
              <div
                className="w-[344px] h-[425px] bg-[#fff] rounded-[15px] border pb-[15px] "
                key={e.id}
              >
                <div className="">
                  {/* img */}
                  <div className="">
                    <Image
                      width={343}
                      height={193}
                      src={e.img}
                      alt="Not Found"
                    />
                  </div>
                  {/* info Pro */}
                  <div className="p-[15px]">
                    <div className="flex flex-row justify-between items-center border-b pb-[15px] border-[#35415037]">
                      <h2 className="text-[20px] text-[#354150] font-bold ">
                        {e.title}
                      </h2>
                      <div className="w-[131px] h-[40px] flex flex-row items-center justify-between">
                        <span className="w-[55px] h-[40px] rounded-[15px] bg-[#35415029] p-[13px] flex justify-between items-center">
                          <span className="text-[14px] text-[#354150]">
                            {e.like}
                          </span>
                          <Image
                            width={13}
                            height={13}
                            alt="Ops"
                            src="icon/Notes/pro2.svg"
                          />
                        </span>
                        {/* border */}
                        <span className="w-[0.5px] bg-[#35415037] h-[25px]"></span>
                        {/* border */}

                        <span className="w-[55px] h-[40px] rounded-[15px] bg-[#35415029] p-[13px] flex justify-between items-center">
                          <span className="text-[14px] text-[#354150]">
                            {e.usage}
                          </span>
                          <Image
                            width={13}
                            height={13}
                            alt="Ops"
                            src="icon/Notes/pro1.svg"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="w-full my-[15px]">
                      <p className="text-[14px] text-[#354150] leading-[25px]">
                        {e.info}
                      </p>
                    </div>
                    <button className="w-full h-[46px] text-[15px] bg-[#354150]  text-[#fff] rounded-[15px] font-bold">
                      همین الان شروع کنید
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* ########################### */}
        <div className="mt-[160px]">
          <div className="p-[85px]">
            <p className="text-[#354150] text-[14px]">ویژگی های فری فرم</p>
            <h4 className="text-[#354150] text-[48px] w-[570px] leading-[64px] py-[15px] ">
              ویژگی هایی که کمتر در مورد آنها شنیده‌اید
            </h4>
            <p className="text-[#354150] text-[16px] w-[918px]">
              بعد از اتمام پروسه ساخت فرم یا پروژه خود، به راحتی می‌توانید کدهای
              آن را در وبسایت خود پیاده سازی و یا اضافه کنید، بدین شکل که اگر
              شما ویرایشی در فرم خود اعمال کردید سایت شما نیز به صورت داینامیک
              آپدیت می‌شود.
            </p>
          </div>
          {/* ############################# */}
          <div className="flex flex-col items-center justify-center">
            <ul className="flex items-center justify-between w-[620px] h-[61px] rounded-[15px] border p-[10px]">
              {items.map((e, index) => {
                return (
                  <li
                    key={e.id}
                    className={`px-[10px] transition-all ease-linear
                      ${
                        activbtn === index
                          ? "bg-[#354150] text-[#FAF603]"
                          : "text-[#354150] bg-transparent"
                      }  cursor-pointer h-full rounded-[15px] flex items-center`}
                    onClick={(e) => {
                      setActicbtn(index);
                    }}
                  >
                    <span className="text-[13px] px-[5px]">{e.itemName}</span>
                    {activbtn === index ? (
                      <e.icon color={"#FAF603"} />
                    ) : (
                      <e.icon color={"#354150"} />
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="w-full max-w-[1112px] h-[559px] rounded-[15px] px-[55px] py-[30px] bg-[#354150] mt-[30px] flex flex-col  justify-center items-center bg-[url('/img/img-Body5.png')] bg-no-repeat bg-left-top   relative before:absolute before:left-0 before:top-[280px] before:content-back6">
              {boxItem.map((e, index) => {
                if (activbtn === index) {
                  if (e.events == "manege") {
                    return (
                      <div className="w-full h-full  flex">
                        <div className="w-[50%] h-full ">
                          <span className="w-[76px] h-[76px] rounded-[15px] border border-[#FAF603] flex justify-center items-center">
                            <e.icon color={"#FAF603"} />
                          </span>
                          <p className="text-[16px] my-[10px] text-[#FAF603]">
                            {e.itemName}
                          </p>
                          <h4 className="text-[40px] w-[409px] font-bold text-[#fff]">
                            {e.itemInfo}
                          </h4>
                          <p className="w-[409px] text-[16px] text-[#979797]">
                            {e.itemP}
                          </p>
                        </div>
                        <div className="w-[50%] h-full  px-[24px] flex flex-col items-end py-[15px] overflow-hidden">
                          <div className="w-[328px] h-[356px] rounded-[8px] px-[24px] py-[15px] relative bg-[#F7F8FA]">
                            <div className="w-full flex flex-row items-center justify-between">
                              <div></div>

                              <div className="w-[108px] h-[24px] rounded-[12px] bg-[#3541503d] flex justify-center items-center">
                                <p className="text-[10px] text-[#6C6F93]">
                                  yourwebsite.com
                                </p>
                              </div>

                              <div className="flex flex-row ">
                                <span className="w-[10px] h-[10px] flex rounded-full bg-[#FA85A4]"></span>
                                <span className="w-[10px] h-[10px] flex mx-[10px] rounded-full bg-[#FFE56E]"></span>
                                <span className="w-[10px] h-[10px] flex rounded-full bg-[#52E282]"></span>
                              </div>
                            </div>
                            {/* ################# */}
                            <div className="flex mt-[30px] relative ">
                              <div
                                className="w-[350px] h-[400px] z-10 absolute left-[50px] rounded-[15px] rounded-tl-none bg-[#354150] duration-600 flex flex-col	p-[20px]"
                                ref={showHide}
                              >
                                <div className="w-full h-[50px] border-b border-[#979797b8] flex items-center justify-between">
                                  <h5 className="text-[#F6F6F6] text-[18px] ">
                                    فایل ها
                                  </h5>
                                  <button>
                                    <Dot />
                                  </button>
                                </div>

                                <div className="w-full h-full ">
                                  <div className="w-full h-[45px] flex items-center justify-between">
                                    <p className="flex items-center">
                                      <MiniFolderIcon />{" "}
                                      <span className="text-[12px] text-[#ffffff62]">
                                        /پوشته تست
                                      </span>{" "}
                                      <span className="text-[12px] text-[#FFFFFF]">
                                        /فایل های پروژه
                                      </span>
                                    </p>
                                    <button>
                                      <ArrowIcon />
                                    </button>
                                  </div>
                                  {/* flagFolder,setFlagFolder infoFolder */}
                                  <div className="w-full h-full  flex flex-wrap justify-between">
                                    {infoFolder.map((e, index) => {
                                      return (
                                        <div
                                          key={index}
                                          className={`flex flex-col items-center  justify-between cursor-pointer w-[82px] h-[95px] ${
                                            flagFolder === index
                                              ? "bg-[#FAF603]"
                                              : "bg-[#F6F6F6]"
                                          } rounded-[15px] p-[10px]`}
                                          onClick={(e) => {
                                            setFlagFolder(index);
                                          }}
                                        >
                                          <e.icon />
                                          <div className="flex flex-col justify-center items-center">
                                            <p className="text-[12px] text-[#354150]">
                                              {e.name}
                                            </p>
                                            <span className="text-[8px] text-[#979797]">
                                              {e.storage}
                                            </span>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                              <div className="w-[50px] absolute left-0 z-50 h-[280px] bg-[#fff]  rounded-[15px]">
                                <ul className="w-full h-full flex flex-col items-center  justify-around">
                                  {formL.map((e, index) => {
                                    // formbtn, setFormbtn
                                    return (
                                      <li
                                        key={index}
                                        className={`rotate-[90deg] transition-all ease-linear   cursor-pointer flex justify-center items-center rounded-br-[8px] rounded-bl-[8px] h-[50px] w-[90px] ${
                                          formbtn === index
                                            ? "text-[#fff] bg-[#354150]"
                                            : "text-[#354150] bg-transparent"
                                        }`}
                                        onClick={() => {
                                          setFormbtn(index);
                                        }}
                                      >
                                        <span
                                          onClick={() => {
                                            if (formbtn === index) {
                                              showHide.current.style.transitionDuration =
                                                "300ms";
                                              {
                                                flag
                                                  ? (showHide.current.style.left =
                                                      "-500px")
                                                  : (showHide.current.style.left =
                                                      "50px");
                                              }
                                            }

                                            setFlag(!flag);
                                          }}
                                          className="p-[10px]"
                                        >
                                          {formbtn === index ? "X" : e.title}
                                        </span>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (e.events == "remvoe") {
                    return (
                      <div className="w-full h-full flex  ">
                        <div className="w-[50%] h-full ">
                          <span className="w-[76px] h-[76px] rounded-[15px] border border-[#FAF603] flex justify-center items-center">
                            <e.icon color={"#FAF603"} />
                          </span>
                          <p className="text-[16px] my-[10px] text-[#FAF603]">
                            {e.itemName}
                          </p>
                          <h4 className="text-[40px] w-[409px] font-bold text-[#fff]">
                            {e.itemInfo}
                          </h4>
                          <p className="w-[409px] text-[16px] text-[#979797]">
                            {e.itemP}
                          </p>
                        </div>
                        <div className="w-[50%] h-full bg-desktopTabPic bg-no-repeat bg-center"></div>
                      </div>
                    );
                  } else if (e.events == "design") {
                    return (
                      <div className="w-full flex h-full ">
                        <div className="w-[50%] h-full ">
                          <span className="w-[76px] h-[76px] rounded-[15px] border border-[#FAF603] flex justify-center items-center">
                            <e.icon color={"#FAF603"} />
                          </span>
                          <p className="text-[16px] my-[10px] text-[#FAF603]">
                            {e.itemName}
                          </p>
                          <h4 className="text-[40px] w-[409px] font-bold text-[#fff]">
                            {e.itemInfo}
                          </h4>
                          <p className="w-[409px] text-[16px] text-[#979797]">
                            {e.itemP}
                          </p>
                        </div>
                        <div className="w-[50%] h-full bg-domainTabPic bg-no-repeat bg-center"></div>
                      </div>
                    );
                  } else if (e.events == "dom") {
                    return (
                      <div className="w-full h-full ">
                        <div className="w-[50%] h-full ">
                          <span className="w-[76px] h-[76px] rounded-[15px] border border-[#FAF603] flex justify-center items-center">
                            <e.icon color={"#FAF603"} />
                          </span>
                          <p className="text-[16px] my-[10px] text-[#FAF603]">
                            {e.itemName}
                          </p>
                          <h4 className="text-[40px] w-[409px] font-bold text-[#fff]">
                            {e.itemInfo}
                          </h4>
                          <p className="w-[409px] text-[16px] text-[#979797]">
                            {e.itemP}
                          </p>
                        </div>
                        <div className="w-[50%] h-full bg-desktopTabPic bg-no-repeat bg-center"></div>
                      </div>
                    );
                  }else{
                    console.log("So :|")
                  }
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
