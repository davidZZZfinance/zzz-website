import ZzzIcon from "assets/zzz_menu_icon.png";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GovernanceSVG, HomeSVG, PoolSVG, VaultSVG } from "svg/MenuIcons";
import {
  LinkContainer,
  MenuAbsoluteWrapper,
  MenuContainer,
} from "./Menu.styles";

const views = [
  { name: "Home", url: "/", icon: <HomeSVG /> },
  { name: "Pools", url: "/pools", icon: <PoolSVG /> },
  { name: "Vault", url: "/vault", icon: <VaultSVG /> },
  { name: "Governance", url: "/governance", icon: <GovernanceSVG /> },
];

function Menu() {
  let location = useLocation();
  return (
    <MenuAbsoluteWrapper>
      <MenuContainer>
        <img src={ZzzIcon} alt="zzz" />
        {views.map((v) => (
          <LinkContainer
            key={`menu-${v.name}`}
            isActive={location.pathname === v.url}
          >
            <Link to={v.url}>
              {v.icon}
              {v.name}
            </Link>
          </LinkContainer>
        ))}
      </MenuContainer>
    </MenuAbsoluteWrapper>
  );
}
export default Menu;
