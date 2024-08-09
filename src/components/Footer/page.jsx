"use client"
import React from 'react'
import Link from 'next/link'
import Logo from "@/../../public/icon/logoB"
import LogoHolding from "@/../../public/icon/footerIcon/logoHolding"
import {contact} from "@/data/localData"
export default function page() {
  return (
    <div className='w-full max-w-[1440px] mx-auto h-[446px] border-t'>
        <div className='w-full h-full flex flex-col text-center items-center justify-center'>
        <Link href="#" >
            <Logo/>
        </Link>
        <div className='w-full max-w-[1100px]'>
            <p className='w-full text-center mt-[30px] text-[18px] mb-[60px] text-[#354150b6]'>وب سایت شرکت گروه شرکتهای منظومه نگاران به عنوان بخش مرکزی روابط عمومی ، ماموریت آشنایی شما عزیزان با شرکتهای تابع واحد انتشارات ؛ استارت‌آپها و همچنین جذب و آموزش نیروهای متخصص را بر عهده دارد .برای مشاهده سایر استارت آپ ها اینجا را کلیک کنید.</p>
            <div className='w-full h-[72px] py-[20px] bg-[#35415034] rounded-[12px] px-[30px]'>
                <ul className='w-full h-full flex items-center justify-between'>
                {contact.map((e,index)=>{
                    return(
                        <li className='flex items-center flex-row' key={index}>{<e.icon/>} <span className='text-[13px]'>{e.title}</span> <span className='text-[12px]'>{e.info}</span> </li>
                    )
                })}
                    
                </ul>
            </div>
            <div className='w-full h-[80px] flex items-end justify-center'>
                <h2 className='flex items-center text-[#979797] text-[16px]'>Powered By <LogoHolding/> MANZOOMEH</h2>
            </div>
        </div>
        </div>
    </div>
  )
}
