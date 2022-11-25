import React, {useState} from 'react';
import Link from 'next/link';

//INTERNAL IMPORT

import Style from "./Discover.module.css";

const MenuComponent = (props) => {

const {data}= props;
  //--------DISCOVER NAVIGATION MENU

  
  return (
    <div>
     
      {data?.map((el, i) => (
      <div key= {i + 1} className={Style.discover} >
        <Link href={{ pathname: `${el.link}`}}>{el.name}</Link>
      </div>
    ) )}</div>
  );
};

export default MenuComponent;