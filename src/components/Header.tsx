import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  AccountCircle,
  Explore,
  House,
  Business,
  EmojiObjects,
} from "@mui/icons-material";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="Explore" color="inherit" sx={{ pb: 1 }}>
          <Explore />
        </IconButton>
        <Typography variant="body2">Explore</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Host tools" color="inherit" sx={{ pb: 1 }}>
          <House />
        </IconButton>
        <Typography variant="body2">Host tools</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Enterprise" color="inherit" sx={{ pb: 1 }}>
          <Business />
        </IconButton>
        <Typography variant="body2">Enterprise</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Learn" color="inherit" sx={{ pb: 1 }}>
          <EmojiObjects />
        </IconButton>
        <Typography variant="body2">Learn</Typography>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          sx={{ pb: 1 }}
        >
          <AccountCircle />
        </IconButton>
        <Typography variant="body2">Profile</Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="Explore" color="inherit" sx={{ pb: 1 }}>
          <Explore />
        </IconButton>
        <Typography variant="body2">Explore</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Host tools" color="inherit" sx={{ pb: 1 }}>
          <House />
        </IconButton>
        <Typography variant="body2">Host tools</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Enterprise" color="inherit" sx={{ pb: 1 }}>
          <Business />
        </IconButton>
        <Typography variant="body2">Enterprise</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Learn" color="inherit" sx={{ pb: 1 }}>
          <EmojiObjects />
        </IconButton>
        <Typography variant="body2">Learn</Typography>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          sx={{ pb: 1 }}
        >
          <AccountCircle />
        </IconButton>
        <Typography variant="body2">Profile</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar sx={{ minHeight: 48 }}>
          {" "}
          {/* Adjust minHeight here */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <SearchIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            AIRDNA
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {isMobile ? (
            <Box sx={{ display: "flex" }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="Explore"
                  color="inherit"
                  sx={{ pb: 0 }}
                >
                  <Explore />
                </IconButton>
                <Typography variant="body2">Explore</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="Host tools"
                  color="inherit"
                  sx={{ pb: 0 }}
                >
                  <House />
                </IconButton>
                <Typography variant="body2">Host tools</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="Enterprise"
                  color="inherit"
                  sx={{ pb: 0 }}
                >
                  <Business />
                </IconButton>
                <Typography variant="body2">Enterprise</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="Learn"
                  color="inherit"
                  sx={{ pb: 0 }}
                >
                  <EmojiObjects />
                </IconButton>
                <Typography variant="body2">Learn</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                  sx={{ pb: 0 }}
                >
                  <AccountCircle />
                </IconButton>
                <Typography variant="body2">Profile</Typography>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
