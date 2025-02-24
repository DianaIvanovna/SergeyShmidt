import React, { useState } from "react";
import { IconButton, SvgIcon } from "@mui/material";
import MenuIcon from "@/shared/icons/icn.svg";
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
        <SvgIcon component={MenuIcon} viewBox="0 0 58 58" />
      </IconButton>
      <MenuModal open={open} onClose={onClose} />
    </>


  );
};