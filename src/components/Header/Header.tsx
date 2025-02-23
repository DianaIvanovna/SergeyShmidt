"use client";
import "./Header.scss";
import React from "react";
import { Menu } from "@/components/Menu";


export const Header = () => {
  return (
    <div
      className={"header"}
    >
      <Menu />
    </div>
  );
};