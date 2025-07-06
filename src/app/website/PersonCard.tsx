import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import "./style.scss";

interface PersonCardProps {
  work: string,
  name: string,
  link: string,
}

export const PersonCard: FC<PersonCardProps> = ({ work, name, link }) => {
  return (
    <Grid container direction={"column"} className={"person-card"}>
      <Typography variant={"hedvig_16/13"} className={"person-card__work"}>{work}: </Typography>
      <Link href={link} target="_blank">
        <Typography variant={"hedvig_32/20"} className={"person-card__link"}>{name}</Typography>
      </Link>

    </Grid>
  );
};