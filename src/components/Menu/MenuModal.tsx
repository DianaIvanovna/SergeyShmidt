import { Box, IconButton, Modal, SvgIcon, Typography } from "@mui/material";
import React, { FC } from "react";
import CloseIcon from "@/shared/icons/close.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RoutesTranslation } from "@/shared/constants/Routes";
import "./MenuModal.scss";

interface MenuModalProp {
  open: boolean,
  onClose: () => void
}

export const MenuModal: FC<MenuModalProp> = ({ open, onClose }) => {
  const pathname = usePathname();

  return (
    <Modal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)"
          }
        },
        root: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          sx: {
            overflow: "auto"
          }
        }
      }}
    >
      <Box className={"layout menu-modal"} onClick={onClose}>
        <IconButton onClick={onClose} className={"menu-modal__close "}>
          <SvgIcon component={CloseIcon} viewBox="0 0 44 44" className={"menu-modal__icon"} />
        </IconButton>


        <Box

          className={"menu-modal__menu"}
          sx={{

            border: "1px solid #EAE7E7",
            borderRadius: "10px",
            boxSizing: "border-box"
          }}>
          {
            Object.entries(RoutesTranslation).map(([link, name]) => (
              <Box className={`link-wrapper ${link === pathname ? "link-wrapper--active" : ""}`} key={link}>
                <Link href={link} onClick={onClose}>
                  <Typography variant={"h1"}
                  >{name}</Typography>
                </Link>
              </Box>
            ))
          }
        </Box>
      </Box>
    </Modal>
  );
};