"use client";
import React, { useRef, useState } from "react";
import { qustion, article } from "@/data/localData";
import Image from "next/image";
export default function page() {
  const [flag, setFlag] = useState(true);
  const [val, setVal] = useState(0);
  const getEl = useRef();
  return (
    <>
      <div className="w-full max-w-[728px] mt-[150px] mx-auto h-[726px] rounded-[15px] bg-[#35415077] bg-back10 bg-no-repeat bg-left-top px-[95px] pt-[61px]">
        <div className="w-full h-auto">
          <p>سوالات متداول</p>
          <h3 className="text-[40px] w-[436px] leading-[48px] text-[#354150] font-bold">
            سوالات متداولی که برای کاربران به وجود آمده است
          </h3>
        </div>
        <div className="w-full h-auto mt-[90px]">
          {qustion.map((e, index) => {
            return (
              <div
                key={index}
                className={`w-[536px] rounded-[15px] cursor-pointer duration-300 px-[15px] mb-[12px] overflow-hidden ${val === index ? "h-[236px] text-[#fff] bg-[#354150]" : "h-[56px] bg-[#F7F7F7] text-[#354150]"} `}
                onClick={() => {
                  setVal(index);
                }}
              >
                <div className="w-full h-[56px] flex items-center">
                  <h3 className="text-[20px]">سوالات متداول تستی</h3>
                </div>
                <p className="text-[14px] font-sans leading-[32px] w-[441px]">
                  با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه
                  خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را
                  ببینید.
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full max-w-[1112px] h-auto mx-auto mt-[150px]">
        <div className="w-full h-auto flex flex-col justify-center items-center">
          <h3 className="text-[14px] text-[#354150]">مقالات</h3>
          <h4 className="text-[46px] font-bold mt-[15px] text-[#354150]">
            مقالات متنوع فری فرم
          </h4>
        </div>
        <div  className="w-full h-[381px] mt-[65px] flex justify-between items-center">
        {article.map((e,index) => {
          return (
              <div key={index} className="w-[346px] h-[420px] rounded-[15px] p-[10px] border bg-[#fff]">
                <div className="w-full h-[183px] rounded-[15px]">
                    <Image width={326} height={176} src={e.img} alt="Opss"/>
                </div>
                <div className="w-full h-[176px] mt-[20px]">
                  <p className="text-[18px] font-bold text-[#354150]">{e.title}</p>
                  <span className="text-[12px] flex my-[10px] text-[#354150]">{e.date}</span>
                  <h5 className="text-[20px] text-[#354150] leading-[32px]">{e.info}</h5>
                </div>
              </div>
          );
        })}
        </div>

        <div className="w-full h-[820px] mt-[150px] rounded-[15px] bg-last bg-center">

        </div>

      </div>
    </>
  );
}

