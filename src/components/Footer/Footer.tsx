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


export const Footer = () => {
  return <div
    className={"footer"}
  >
    <Box className={"footer__link"}>
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

    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant={"h6"}>GET IN TOUCH:
        <a href="mailto:mail@htmlacademy.ru"> MAIL</a>
      </Typography>
      <Link href={Routes.PRIVACY_POLICY} className={"footer__privacy-policy"}>
        <Typography variant={"h6"}>PRIVACY POLICY</Typography>
      </Link>

      <Typography variant={"h6"}>Copyright 2024 | All Rights Reserved</Typography>
    </Box>
  </div>;
};