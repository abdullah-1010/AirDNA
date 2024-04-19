import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobeIcon from "@mui/icons-material/Public";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function DenseAppBar() {
  const dropdownItems = [
    "Score",
    "Type",
    "Market",
    "Listing",
    "Performance",
    "Amenities",
    "Quick Actions",
  ];

  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
        <Toolbar variant="dense">
          <GlobeIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              flexGrow: 1,
              whiteSpace: "nowrap",
              paddingRight: isMobileScreen ? "30px" : "unset",
            }}
          >
            United States
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {dropdownItems.map((item, index) => (
              <Grid
                item
                key={index}
                sx={{ minWidth: isMobileScreen ? "120px" : "unset" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                  <FormControl variant="standard">
                    <Select label={item}>
                      <MenuItem value={1}>{`${item} 1`}</MenuItem>
                      <MenuItem value={2}>{`${item} 2`}</MenuItem>
                    </Select>
                  </FormControl>
                </Typography>
              </Grid>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
