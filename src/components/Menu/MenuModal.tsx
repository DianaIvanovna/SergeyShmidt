import { Box, IconButton, Modal, SvgIcon, Typography } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import CloseIcon from "@/shared/icons/close.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RoutesTranslation } from "@/shared/constants/Routes";
import "./MenuModal.scss";

interface MenuModalProp {
  open: boolean,
  onClose: () => void
}

const LinkWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <Box sx={{ padding: "10px", textTransform: "uppercase", textAlign: "center", marginBottom: "35px" }}
              className={"link-wrapper"}>
    {children}
  </Box>;
};

export const MenuModal: FC<MenuModalProp> = ({ open, onClose }) => {
  const pathname = usePathname();

  return (
    <Modal
      open={open}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)"
          }
        }
      }}
    >
      <Box className={"layout menu-modal"}>
        <IconButton onClick={onClose} className={"menu-modal__close "}>
          <SvgIcon component={CloseIcon} viewBox="0 0 44 44" className={"menu-modal__icon"} />
        </IconButton>


        <Box

          className={"menu-modal__menu"}
          sx={{
            maxWidth: "392px",
            width: "70%",
            minWidth: "192px",
            border: "1px solid #EAE7E7",
            borderRadius: "10px",

            boxSizing: "border-box"


          }}>
          {
            Object.entries(RoutesTranslation).map(([link, name]) => (
              <LinkWrapper key={link}>
                <Link href={link} onClick={onClose}>
                  <Typography variant={"h1"} color={link === pathname ? "primary" : ""}>{name}</Typography>
                </Link>
              </LinkWrapper>
            ))
          }
        </Box>
      </Box>
    </Modal>
  );
};