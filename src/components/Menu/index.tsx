import React, { useState } from "react";
import { IconButton, SvgIcon } from "@mui/material";
import MenuIcon2 from "@/shared/icons/icn.svg";
import { MenuModal } from "@/components/Menu/MenuModal";

export const Menu = () => {

  const [open, setOpen] = useState(false);

  function onClick() {
    setOpen(prev => !prev);
  }

  function onClose() {
    setOpen(false);
  }


  return (
    <>
      <IconButton onClick={onClick}>
        <SvgIcon component={MenuIcon2} viewBox="0 0 58 58" className={"menu-modal__icon"} />
      </IconButton>
      <MenuModal open={open} onClose={onClose} />
    </>
  );
};