import * as React from "react";

import { Link } from "react-router-dom";

import { AppBar, IconButton, Tab, Tabs, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import "./../assets/scss/Header.scss";

const logo = require("../assets/img/logo.svg");

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const [tab, setTab] = React.useState(0);

  const onTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Tabs value={tab} onChange={onTabChange}>
          <Tab component={Link} to={'/projects'} label="Мои проекты" />
          <Tab component={Link} to={'/profile'} label="Профиль" />
          <Tab label="Статистика" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
