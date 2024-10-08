import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Badge,
  Button,
  Divider
} from "@mui/material";
import PropTypes from "prop-types";

// components
import Profile from "./Profile";
import Notification from "./Notification";
import { IconBellRinging, IconMenu } from "@tabler/icons-react";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px"
    }
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline"
            }
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        {/* notification icons  */}
        <Notification />
        <Box flexGrow={1} />

        {/* right side  */}
        <Stack spacing={1} direction="row" alignItems="center">
          {/* Support button  */}
          <Button
            variant="contained"
            // disableElevation
            color="primary"
            target="_blank"
            href="#"
            sx={{}}
            style={{ backgroundColor: "#1E4939" }}
          >
            Help & Support{" "}
          </Button>

          {/* profile icon  */}
          <Profile />
        </Stack>
      </ToolbarStyled>
      <Divider />
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object
};

export default Header;
