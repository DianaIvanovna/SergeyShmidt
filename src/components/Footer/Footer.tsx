"use client";
import "./Footer.scss";
import { Box, IconButton, SvgIcon, Typography } from "@mui/material";
import spotifyIcon from "@/shared/icons/spotify.svg";
import appleIcon from "@/shared/icons/apple.svg";
import youtubeIcon from "@/shared/icons/youtube.svg";
import yandexIcon from "@/shared/icons/yandex.svg";
import amozonIcon from "@/shared/icons/amozon.svg";
import linktreeIcon from "@/shared/icons/linktree.svg";
import Link from "next/link";
import React from "react";
import { Routes } from "@/shared/constants/Routes";
import { animated, useSpring } from "@react-spring/web";
import { usePathname } from "next/navigation";


export const Footer = () => {
  const springs = useSpring({
    from: { bottom: "-100px", opacity: 0 },
    to: { bottom: "0px", opacity: 1 },
    delay: 300
  });

  const pathname = usePathname();
  const isTrackPage = pathname === Routes.TRACKS;


  return (
    <animated.div
      className={"footer"}
      style={{
        position: "relative",
        ...springs
      }}
    >
      {
        !isTrackPage && <Box className={"footer__link"}>
          <IconButton>
            <SvgIcon fontSize={"small"} component={spotifyIcon} viewBox="0 0 44 44" />
          </IconButton>
          <IconButton>
            <SvgIcon fontSize={"small"} component={appleIcon} viewBox="0 0 45 45" />
          </IconButton>
          <IconButton>
            <SvgIcon fontSize={"small"} component={youtubeIcon} viewBox="0 0 51 39" />
          </IconButton>
          <IconButton>
            <SvgIcon fontSize={"small"} component={yandexIcon} viewBox="0 0 45 45" />
          </IconButton>
          <IconButton>
            <SvgIcon fontSize={"small"} component={amozonIcon} viewBox="0 0 45 45" />
          </IconButton>
          <IconButton>
            <SvgIcon fontSize={"small"} component={linktreeIcon} viewBox="0 0 45 45" />
          </IconButton>
        </Box>
      }


      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <Typography variant={"p_24/11"}>GET IN TOUCH:{" "}
          <a href="mailto:mail@htmlacademy.ru" className={"footer__mail"}>MAIL</a>
        </Typography>

        <Link href={Routes.PRIVACY_POLICY} className={"footer__privacy-policy"}>
          <Typography variant={"p_16/9"}>PRIVACY POLICY</Typography>
        </Link>

        <Typography variant={"p_16/9"}>Copyright {new Date().getUTCFullYear()} | All Rights Reserved</Typography>
      </Box>
    </animated.div>
  );
};