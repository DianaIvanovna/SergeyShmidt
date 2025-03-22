import { Box, IconButton, Modal, SvgIcon, Typography } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import CloseIcon from "@/shared/icons/close.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Routes } from "@/shared/constants/Routes";

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
  const pathname = usePathname();

  return (
    <Modal
      open={open}

      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "transparent",
            backdropFilter: "blur(5px)"
          }
        }
      }}
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
          {
            Object.values(Routes).map((item, key) => (
              <LinkWrapper key={key}>
                <Link href={item} onClick={onClose}>
                  <Typography variant={"h1"} color={item === pathname ? "primary" : ""}>{item}</Typography>
                </Link>
              </LinkWrapper>
            ))
          }
        </Box>
      </Box>
    </Modal>
  );
};