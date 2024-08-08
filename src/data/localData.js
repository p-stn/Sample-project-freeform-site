import img1 from "../../public/img/product/pro1.png"
import img2 from "../../public/img/product/pro2.png"
import img3 from "../../public/img/product/pro3.png"
import Bin from "@/../../public/icon/iconBody/SecThree/bin"
import Desin from "@/../../public/icon/iconBody/SecThree/desin"
import Oom from "@/../../public/icon/iconBody/SecThree/dom"
import File from "@/../../public/icon/iconBody/SecThree/file"
import myimg1 from "@/../../public/img/article/img1.png"
import myimg2 from "@/../../public/img/article/img2.png"
import myimg3 from "@/../../public/img/article/img3.png"
import Phone from "@/../../public/icon/footerIcon/CallChat"
import PhoneCall from "@/../../public/icon/footerIcon/PhoneCalling"
import Letter from "@/../../public/icon/footerIcon/Letter"
import Map from "@/../../public/icon/footerIcon/Map"
import Folder from "@/../../public/icon/FolderC/Folder"
import FolderCss from "@/../../public/icon/FolderC/FolderCss"
import FolderHtml from "@/../../public/icon/FolderC/FolderHtml"
import FolderJson from "@/../../public/icon/FolderC/FolderJson"
const product = [
    { id: 1, title: "پت شاپ", info: "شما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را بهشما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را به صورت کاملا رایگان در ...", img: img1, usage: 3, like: 4 },
    { id: 2, title: "دکوراسیون", info: "شما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را بهشما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را به صورت کاملا رایگان در ...", img: img2, usage: 2, like: 2 },
    { id: 3, title: "وکیل", info: "شما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را بهشما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را به صورت کاملا رایگان در ...", img: img3, usage: 5, like: 1 },

]


export const items = [
    { id: 1, itemName: "دامنه اختصاصی",  icon:File  },
    { id: 2, itemName: "حذف شده",        icon: Bin  },
    { id: 3, itemName: "دیزاین مجزا",   icon: Oom },
    { id: 4, itemName: "مدیریت فایل",   icon: Desin },
]
export const boxItem =[
    {icon:File, events:"manege", id: 1, itemName: "مدیریت فایل", itemInfo :"فضای ذخیره سازی خود را مدیریت کنید", itemP:"شما میتوانید با استفاده از ابزار مدیریت فایل فری فرم همه فایل های مورد نیاز پروژه خود را ذخیره کنید و از آنها استفاده کنید." },
    {icon: Bin, events:"remvoe", id: 2, itemName: "حذف شده", itemInfo: "مهم نیست اگه اشتباهی فایل های خود را حذف کردید!",itemP:"فری فرم فایل های شما را بعد از حذف کردن هم نگه میدارد، حتی صفحات و فرم های شما هم بعد از حذف شدن در قسمت حذف شده ها هستند و قابل بازیابی هستند."},
    {icon:Oom, events:"design",    id: 3,    itemName: "دیزاین مجزا", itemInfo:"نسخه دسکتاپ و موبایل پروژه خود را مجزا طراحی کنید", itemP:"شما میتوانید برای نسخه دسکتاپ و موبایل خود طراحی مجزا داشته باشید و یا اینکه پروژه خود را روی حالت رسپانسیو بگذارید."},
    {icon:Desin, events:"dom ", id: 4, itemName: "دامنه اختصاصی", itemInfo:"دامنه اختصاصی خود را به فری فرم وصل کنید", itemP:"شما میتوانید دامنه اختصاصی خود را به فری فرم وصل کنید و پروژه خود را بر روی دامنه خود اجزا کنید و فضای ذخیره سازی خود را داشته باشید."},
    
]
export const formL =[
    { id: 1, title: "فایل ها", },
    { id: 2, title: "فرم ها", },
    { id: 3, title: "صفحات", },
]
export const dataForm =[
    {id:1,date:"1401/01/01 | 14:30", version:"1.4"},
    {id:1,date:"1401/01/01 | 14:30", version:"1.3"},
    {id:1,date:"1401/01/01 | 14:30", version:"1.2"},
    {id:1,date:"1401/01/01 | 14:30", version:"1.1"},
]
export const qustion =[
    {id:1,title:"سوالات متداول تستی",info:"با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید."},
    {id:2,title:"سوالات متداول تستی",info:"با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید."},
    {id:3,title:"سوالات متداول تستی",info:"با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید."},
    {id:4,title:"سوالات متداول تستی",info:"با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید."},
    
    
]
export const article =[
    {id:1,title:"چگونه یک فرم بسازیم؟",date:"1401/01/01",info:"آپلود فایل ها با استفاده از رمزگذاری آپلود فایل ها با استفاده از رمزگذاری Base64 یک روش معمول است، استفاده از تکنیک...",img:myimg1},
    {id:2,title:"چگونه یک فرم بسازیم؟",date:"1401/01/01",info:"آپلود فایل ها با استفاده از رمزگذاری آپلود فایل ها با استفاده از رمزگذاری Base64 یک روش معمول است، استفاده از تکنیک...",img:myimg2},
    {id:3,title:"چگونه یک فرم بسازیم؟",date:"1401/01/01",info:"آپلود فایل ها با استفاده از رمزگذاری آپلود فایل ها با استفاده از رمزگذاری Base64 یک روش معمول است، استفاده از تکنیک...",img:myimg3},
]

export const contact =[
    {id:1,title:"مشاوره تلفنی :",info:"021-5556 9833",icon:Phone},
    {id:2,title:"شماره تماس :",info:"021-5556 9833",icon:PhoneCall},
    {id:3,title:"پست الکترونیکی :",info:"freeform@gmail.com",icon:Letter},
    {id:4,title:"آدرس :",info:"خ بهشتی، ما بین یوسفی و صابونچی، پلاک 197، طبقه 7، واحد 25",icon:Map},
] 

export const infoFolder=[
    {id:1,name:"پوشته تست",icon:Folder,storage:null},
    {id:2,name:"پوشته تست",icon:Folder,storage:null},
    {id:3,name:"پوشته تست",icon:Folder,storage:null},
    {id:4,name:"style.css" ,icon:FolderCss,storage: "56 MB"},
    {id:5,name:"style.json",icon:FolderHtml,storage:"56 MB"},
    {id:6,name:"style.html",icon:FolderJson,storage:"2 MB"},
]


export default product





