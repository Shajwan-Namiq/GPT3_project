import React from 'react'

const feature = ({title,text}) => {
  return (
    <div className=" w-full  text-white grid grid-cols-3 justify-between ">
   <p>{title}</p>
   <p>{text}</p>
    </div>
  );
}

export default feature