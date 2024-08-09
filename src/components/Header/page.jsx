"use client";
import React, { useRef ,useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [previousScrollYPosition, setPreviousScrollYPosition] = useState(0);
  const getloc = useRef(null)
  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setPreviousScrollYPosition(scrollYPosition);
    setScrollYPosition(newScrollYPosition);
  
    if (newScrollYPosition > previousScrollYPosition) {
      getloc.current.style.position = "fixed"
    } else if (newScrollYPosition < previousScrollYPosition) {
      getloc.current.style.position = "relative"
      getloc.current.style.top = "0px"
      
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYPosition, previousScrollYPosition]);
  
  
  

  return (
    <div className="w-full  mx-auto h-[90px] px-[30px] py-[26.5px] bg-[#fff] duration-500  top-0 left-0 right-0 z-[999] flex justify-between items-center border-b"
    ref={getloc}
    >
      <div>
        <Link href="#" as="#">
          <Image
            width={63}
            height={40}
            src="icon/logo.svg"
            alt="Picture of the Logo"
          />
        </Link>
      </div>

      <div>
        <ul className="w-[436px] text-[13px] text-[#354150] font-kalame font-[500]  flex items-center justify-between">
          <li>قالب ها</li>
          <li>ویژگی ها</li>
          <li>مقالات</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>

      <div>
        <button className="w-[123px] hover:bg-[#354150] hover:text-[#FAF603] duration-300 h-[37px] rounded-[15px] px-[8px] bg-[#3541501A] text-[#354150] text-[12px] font-[500] ">
          ورود به پنل کاربری
        </button>
      </div>
    </div>
  );
}
