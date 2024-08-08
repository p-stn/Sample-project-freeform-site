import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 4.99951C10.5817 4.99951 7 9.0021 7 13.4995C7 17.9617 9.55332 22.8119 13.5371 24.674C14.4657 25.108 15.5343 25.108 16.4629 24.674C20.4467 22.8119 23 17.9617 23 13.4995C23 9.0021 19.4183 4.99951 15 4.99951ZM15 14.9995C16.1046 14.9995 17 14.1041 17 12.9995C17 11.8949 16.1046 10.9995 15 10.9995C13.8954 10.9995 13 11.8949 13 12.9995C13 14.1041 13.8954 14.9995 15 14.9995Z"
      fill="#354150"
    />
  </svg>
);
export default SVGComponent;
