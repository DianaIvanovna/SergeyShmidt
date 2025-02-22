"use client";
import "./Header.scss";
import MenuIcon from "../../icons/icn.svg";
import React from "react";
import { IconButton, SvgIcon } from "@mui/material";


export const Header = () => {


  return (
    <div
      className={"header"}
    >
      <IconButton>
        <SvgIcon component={MenuIcon} viewBox="0 0 58 58" />
      </IconButton>


      {/*<button className={"header__menu"}>*/}
      {/*  <Image src={menuIcon} alt={"menu"} />*/}
      {/*</button>*/}
      {/*<SvgIcon><MenuIcon33 /></SvgIcon>*/}
      {/*<MenuIcon33 />*/}

      {/*<IconButton>*/}
      {/*  /!*<Image src={menuIcon} alt={"menu"} />*!/*/}

      {/*  <SvgIcon component={MenuIcon2} />*/}
      {/*  /!*<MenuIcon />*!/*/}
      {/*  {}*/}
      {/*  <Image*/}
      {/*    src={MenuIcon}*/}
      {/*    alt={"2"}*/}
      {/*  />*/}
      {/*</IconButton>*/}

      {/*типо header*/}
      {/*<Link href={"./"}>*/}
      {/*  Home*/}
      {/*</Link>*/}
      {/*<Link href={"./tracks"}>*/}
      {/*  Tracks*/}
      {/*</Link>*/}
      {/*<Link href={"./poems"}>*/}
      {/*  Poems*/}
      {/*</Link>*/}
      {/*<Link href={"./website"}>*/}
      {/*  Website*/}
      {/*</Link>*/}
      {/*<Link href={"./404"}>*/}
      {/*  404*/}
      {/*</Link>*/}
      {/*<div>*/}

      {/*</div>*/}
      {/*<h2 className={"header__logo"}>SERGEY<br /> SHMIDT</h2>*/}
    </div>
  );
};