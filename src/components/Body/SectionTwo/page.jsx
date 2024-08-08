"use client"
import React, { useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";

export default function page() {
  const codeSnippet = `<form action="https://formcarry.com/s/{Your Form ID}"
method="POST" enctype="multipart/form-data">
    <input type="email" name="email">

  <textarea name="message"></textarea>
  <button type="submit">Submit</button>
</form>
`;

  return (
    <>
      <div className=" w-full max-w-[843px] h-[760px] mx-auto mt-[100px]">
        <p className="text-[#354150] text-center text-[14px]">
          فرم را در سایت خود استفاده کنید
        </p>
        <h4 className="w-[562px] mx-auto text-[46px] font-[800] text-center mt-[15px] mb-[30px] text-[#354150]">
          راه اندازی فرم در وبسایت خود بدون دردسر{" "}
        </h4>
        <p className="w-[797px] text-center text-[16px] text-[#354150]">
          بعد از اتمام پروسه ساخت فرم یا پروژه خود، به راحتی می‌توانید کدهای آن
          را در وبسایت خود پیاده سازی و یا اضافه کنید، بدین شکل که اگر شما
          ویرایشی در فرم خود اعمال کردید سایت شما نیز به صورت داینامیک آپدیت
          می‌شود.
        </p>
        <div className="w-full h-[490px] bg-[url('/img/img-Body1.png')] relative  flex justify-center bg-no-repeat bg-center before:absolute before:content-back before:left-[-10px] before:z-0  before:bottom-[-90px]">
          <div className="w-[616px] h-[364px] p-[15px] bg-[#fff]  mt-[150px]  z-[90] rounded-[15px] flex flex-col justify-between">
            <div className="flex justify-between ">
              <div></div>
              <div className="w-[100px] h-[24px] bg-[#3777FD] rounded-[15px] flex justify-center items-center">
                <h4 className="text-[#fff] text-[12px] font-[500]">VS Code</h4>
              </div>

              <div className="flex ">
                <span className="w-[10px] h-[10px] rounded-full bg-[#FA85A4]"></span>
                <span className="w-[10px] h-[10px] mx-[10px] rounded-full bg-[#FFE56E]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#52E282]"></span>
              </div>
            </div>

            <div className="w-full h-[296px] rounded-[15px] flex flex-col items-center  py-[10px] bg-[#F7F9FC] " >
             <div className="w-full">
             <Highlight
                theme={themes.vsLight}
                code={codeSnippet}
                language="html"
                
                
                
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <pre>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })} style={{direction:"ltr"}}>
                        <span className="ml-[23px] mr-[16px]">{i + 1}</span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
             </div>
              <div>
              <button className="w-[119px]  h-[46px] rounded-[15px] text-[#fff] bg-[#354150]">کپی کردن</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
