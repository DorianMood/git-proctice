import * as React from "react";
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
          <Tab label="Мои проекты" />
          <Tab label="Инструменты" />
          <Tab label="Статистика" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
