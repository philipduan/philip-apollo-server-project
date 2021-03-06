import { Anchor, Box, Heading, Menu } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import { useLocation, useHistory } from "react-router-dom";
import React from "react";

import { useAuth } from "../../context/AuthContext";

const NavBar = () => {
  const { logout, viewerQuery } = useAuth();
  const location = useLocation();
  const history = useHistory();
  return (
    <header>
      <Box
        align="center"
        border={{
          color: "light-4",
          size: "xsmall",
          style: "solid",
          side: "bottom",
        }}
        direction="row"
        justify="between"
        pad="bottom"
      >
        <Heading color="brand" level="1" size="32px">
          <Anchor href="/" label="philgame" primary />
        </Heading>
        {location.pathname !== "/" && (
          <Menu
            a11yTitle="User Menu"
            dropAlign={{ right: "right", top: "top" }}
            icon={<MenuIcon color="brand" size="20px" />}
            items={[
              {
                label: "Profile",
                onClick: () => {
                  history.push(
                    `/profile/${viewerQuery.data.viewer.profile.username}`
                  );
                },
              },
              { label: "Logout", onClick: logout },
            ]}
            justifyContent="end"
          />
        )}
      </Box>
    </header>
  );
};

export default NavBar;
