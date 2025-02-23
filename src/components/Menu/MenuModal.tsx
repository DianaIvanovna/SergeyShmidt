import { Box, IconButton, Modal, SvgIcon, Typography } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import CloseIcon from "@/icons/close.svg";
import Link from "next/link";

interface MenuModalProp {
  open: boolean,
  onClose: () => void
}

const LinkWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <Box sx={{ padding: "10px", textTransform: "uppercase", textAlign: "center" }}>
    {children}
  </Box>;
};

export const MenuModal: FC<MenuModalProp> = ({ open, onClose }) => {

  return (
    <Modal
      open={open}

      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", height: "100%" }}>
        <IconButton onClick={onClose} sx={{ position: "absolute", left: "28px", top: "28px" }}>
          <SvgIcon component={CloseIcon} viewBox="0 0 44 44" />
        </IconButton>

        <Box sx={{
          width: "392px",
          border: "1px solid #EAE7E7",
          borderRadius: "10px",
          padding: "127px 102px",
          boxSizing: "border-box"

        }}>
          <LinkWrapper>
            <Link href={"./"}>
              <Typography variant={"h1"} component={"span"}>Home</Typography>
            </Link></LinkWrapper>
          <LinkWrapper>
            <Link href={"./tracks"}>
              <Typography variant={"h1"} component={"span"}>Tracks</Typography>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href={"./poems"}>
              <Typography variant={"h1"} component={"span"}>Poems</Typography>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href={"./website"}>
              <Typography variant={"h1"} component={"span"}>Website</Typography>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href={"./404"}>
              <Typography variant={"h1"} component={"span"}>404</Typography>
            </Link>
          </LinkWrapper>
        </Box>


      </Box>
    </Modal>
  );
};