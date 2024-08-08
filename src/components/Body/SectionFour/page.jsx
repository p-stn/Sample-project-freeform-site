"use client";
import React, { useRef, useState } from "react";
import Ico from "@/../../public/icon/ico";
import Logo from "@/../../public/icon/logo";
import Inmp from "@/../../public/icon/inp";
import { dataForm } from "@/data/localData";
import ArrowD from "@/../../public/icon/Micon/arrowDown";
import Eye from "@/../../public/icon/Micon/Eye";
import Notes from "@/../../public/icon/Micon/Notes";

export default function page() {
  const [flag, setFlag] = useState(false);
  const showH = useRef();
  return (
    <>
      <div className="w-full max-w-[1117px] h-auto mt-[150px] mx-auto">
        <div className="w-full h-[782px] py-[47px] pr-[42px]  bg-[#97979743] bg-back7 bg-no-repeat bg-right-bottom  rounded-[15px]">
          <div className="w-full h-[99px] flex relative items-center justify-between">
            <div className="w-[90px] h-[90px] rounded-[15px] bg-[#354150] flex justify-center items-center">
              <Ico />
            </div>
            <div className="w-[640px] absolute left-[0px] h-full bg-[#fff] p-[33px] rounded-tr-[20px] rounded-br-[20px]">
              <ul className="w-full h-full flex items-center justify-start ">
                <li className="text-[16px] font-[600] text-[#354150] py-[37px] border-b border-[#354150] ml-[40px]">
                  طراحی
                </li>
                <li className="text-[16px] font-[600] text-[#979797]">
                  تنظیمات
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-full flex mt-[30px]">
            <div className="w-[40%] h-full ">
              <h3 className="text-[40px] w-[480px] text-[#354150] font-bold">
                برای پروژه خود به تعداد نامحدود صفحه طراحی کنید
              </h3>
              <p className="text-[16px] w-[440px] font-[500] py-[15px] leading-[36px] text-[#354150]">
                شما برای هر پروژه میتوانید به تعداد نامحدود صفحه طراحی کنید و
                فرم های خود را داخل صفحات فراخوانی کنید و محتوای دلخواه خود را
                به همراه فرم خود بسازید.
              </p>
              <p className="text-[14px] w-[389px] text-[#354150]">
                هیچ محدودیتی برای فری فرم وجود ندارد، فقط برای اینکه بتوانید از
                آن لذت ببرید.
              </p>
              <div className="w-[219px] h-[76px] mt-[30px] mx-auto rounded-[15px] backdrop-blur-[2px] py-[15px] flex justify-around items-center ">
                <div>
                  <p className="text-[#0E0B3D] text-[20px] font-bold">
                    Freeform
                  </p>
                  <p className="text-[#6C6F93] text-[13px]">Freeform.ir</p>
                </div>
                <div>
                  <Logo />
                </div>
              </div>
            </div>
            <div className="w-[60%] h-full bg-content bg-no-repeat bg-left"></div>
          </div>
        </div>
        <div className="w-full h-[400px] rounded-[15px] mt-[150px] relative  pt-[67px] bg-[#354150] flex items-center flex-col before:absolute  before:content-back8 before:right-0 before:bottom-[-8px] after:absolute after:content-back9 after:left-0 after:bottom-[-8px]">
          <p className="text-[#FAF603] text-[14px] font-[400]">
            همین الان شروع کنید
          </p>
          <h2 className="text-[#fff] text-[46px] font-bold">
            با یک کلیک به سادگی فرم خود را بسازی
          </h2>
          <p className="text-center text-[#fff] text-[16px] w-[515px] leading-[36px] ">
            برای شروع نام پروژه خود را وارد کنید و دکمه شروع کردن را بزنید تا
            وارد پنل کاربری خود شوید و بعد میتوانید به راحتی فرم خود را بسازید
          </p>
          <div className="absolute bottom-[-15px] w-[435px] h-[79px] rounded-[15px] p-[15px] bg-[#fff] flex justify-between items-center">
            <Inmp />
            <input
              type="text"
              name=""
              id=""
              className="w-full h-full outline-none placeholder:text-[#979797]"
              placeholder="نام پروژه خود را وارد کنید..."
            />
            <button className="w-[129px] h-[49px] text-[#fff] bg-[#354150] rounded-[15px] text-[14px]">
              ساخت پروژه
            </button>
          </div>
        </div>

        {/* ########### */}
        <div className="w-full h-auto  mt-[150px]">
          <div className="w-full h-[164px] flex">
            <div className="w-[50%] h-full ">
              <p className="text-[14px] text-[#354150]">
                ثبت هر تغییر در ورژن فرم
              </p>
              <h4 className="text-[40px] ">
                هر تغییری که در فرم خود ایجاد کنید یک ورژن به فرم اضافه خواهد شد
              </h4>
            </div>
            <div className="w-[50%] h-full  flex justify-end">
              <p className="w-[421px] text-[16px] text-[#354150] leading-[36px]">
                با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد
                شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.
              </p>
            </div>
          </div>
          <div className="w-full h-[586px] rounded-[15px] mt-[30px] bg-[#F7F8FA] p-[25px]">
            <div className="w-full h-full bg-[#FFFFFF] p-[20px] rounded-[15px]">
              <div className="w-full h-[35px] flex items-center justify-between">
                <p className="text-[14px] text-[#354150]">تاریخچه فرم</p>
                <select
                  id="large"
                  class="block w-[186px] h-[35px] px-4 text-[12px] text-base text-[#354150] border border-gray-300 rounded-lg bg-[#F7F8FA] focus:ring-blue-500 focus:border-blue-500  "
                >
                  <option selected>فرم مشاوره</option>
                  <option value="">فرم مشاوره </option>
                  <option value="">فرم مشاوره</option>
                  <option value="">فرم مشاوره</option>
                  <option value="">فرم مشاوره</option>
                </select>
              </div>
              <div className="w-full h-full  overflow-hidden">
                <div className="w-full bg-[#fff] relative z-50 overflow-y-hidden h-[34px]">
                  <p></p>
                </div>
                {/* ########################## */}
                <div className="w-full h-[380px] ">
                  <div class="overflow-hidden  bg-white">
                    <div
                      class="w-full h-[60px] border rounded-[15px]  border-[#35415027] flex justify-between items-center py-[10px] px-[20px]"
                      onClick={() => {
                        {
                          flag
                            ? (showH.current.style.display = "flex")
                            : (showH.current.style.display = "none");
                        }
                        setFlag(!flag);
                      }}
                    >
                      <div className="flex items-center w-[350px]  justify-between">
                        <p className="w-[97px] h-[40px] flex justify-center items-center text-[#FAF603] text-[14px] bg-[#354150] rounded-[15px] ">
                          ورژن فعلی
                        </p>
                        <p className="text-[#354150] text-[14px]">
                          1401/01/01 | 14:30
                        </p>
                      </div>

                      <div className="flex items-center">
                        <button>
                          <Notes />
                        </button>
                        <button>
                          <Eye />
                        </button>
                        <span className="w-[1px] h-[25px] mx-[10px]  bg-[#97979780]"></span>
                        <button>
                          <ArrowD />
                        </button>
                      </div>
                    </div>
                    <div className=" w-full h-[295px] bg-[#F7F8FA] rounded-b-[15px] mb-[15px] px-[15px] py-[30px] flex flex-col duration-1000"  ref={showH}>
                    
                    
                    {/* <p>فیلد (نام) به (نام و نام خانوادگی)...فیلد (نام) به (نام و نام خانوادگی)...</p> */}
                    <p><span className="ml-[50px] w-[58px] h-[35px] text-[16px] font-[700] bg-[#35415034] p-[8px] rounded-[15px] text-[#354150]">اصلاح</span>فیلد (نام) به (نام و نام خانوادگی)...فیلد (نام) به (نام و نام خانوادگی)...</p>
                    <p className="my-[50px]"><span className="ml-[50px]  w-[58px] h-[35px] text-[16px] font-[700] bg-[#ed1c234e] px-[15px] p-[8px] rounded-[15px] text-[#ED1C24]">حذف</span>فیلد (نام) به (نام و نام خانوادگی)...فیلد (نام) به (نام و نام خانوادگی)...</p>
                    <p><span className="ml-[50px] w-[58px] h-[35px] text-[16px] font-[700] bg-[#0572153b] p-[8px] rounded-[15px] text-[#057216]">اضافه کردن</span>فیلد (نام) به (نام و نام خانوادگی)...فیلد (نام) به (نام و نام خانوادگی)...</p>
                      
                    </div>
                  </div>
                  {dataForm.map((e) => {
                    return (
                      <>
                        <div className="w-full h-[60px] border rounded-[15px] mt-[15px] border-[#35415027] flex justify-between items-center py-[10px] px-[20px]">
                          <div className="flex items-center w-[350px] justify-between">
                            <p className="w-[53px] h-[40px] flex justify-center items-center text-[#354150b9] text-[14px] bg-[#35415034] rounded-[15px] ">
                              {e.version}
                            </p>
                            <p className="text-[#354150] text-[14px]">
                              {e.date}
                            </p>
                          </div>

                          <div className="flex items-center">
                            <button>
                              <Notes />
                            </button>
                            <button>
                              <Eye />
                            </button>
                            <span className="w-[1px] h-[25px] mx-[10px]  bg-[#97979780]"></span>
                            <button>
                              <ArrowD />
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
