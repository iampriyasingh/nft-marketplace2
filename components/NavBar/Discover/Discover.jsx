import React, {useState} from 'react';
import Link from 'next/link';

//INTERNAL IMPORT

import Style from "./Discover.module.css";

const Discover = () => {

  // const [isOpen, setIsOpen] = useState(initialState= true); 
  // const btnRef = useRef();
  
  // useEffect(
  //   effect = () => {
  //     const closeDropdown = e =>{
  //       if(e.path[0].tagName !== 'BUTTON'){
  //         setIsOpen (value= false);
  //       }
  //     };

  //     document.body.addEventListener(type= 'click', closeDropdown);
  //   }, deps= []);

  //--------DISCOVER NAVIGATION MENU

  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "searchPage",
    },
    {
      name: "Author Profile",
      link: "author",
    },
    {
      name: "NFT-Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account",
    },
    {
      name: "Upload NFT",
      link: "uploadNFT",
    },
    {
      name: "Connect Wallet",
      link: "connectWallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  return (
    <div>
     
      {discover.map((el, i) => (
      <div key= {i + 1} className={Style.discover}>
        <Link href={{ pathname: `${el.link}`}}>{el.name}</Link>
      </div>
    ) )}</div>
  );
};

export default Discover;