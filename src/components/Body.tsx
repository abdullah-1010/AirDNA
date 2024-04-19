import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Body: React.FC = () => {
  return (
    <Box className="MuiBox-root css-zp1kr7">
      <Typography
        variant="h4"
        className="MuiTypography-root MuiTypography-titleS css-abax7w"
        sx={{
          fontWeight: "bold",
          color: "black",
          marginTop: "20px",
          paddingLeft: "10px",
        }}
      >
        Short-term rental markets:{" "}
        <Typography
          variant="h4"
          className="MuiTypography-root MuiTypography-body2 css-pmh8fq"
          sx={{ color: "grey", display: "inline" }}
        >
          United States
        </Typography>
      </Typography>

      {/* Additional elements */}
      <div className="MuiBox-root css-1t1b5do">
        <div className="MuiTabs-root css-1p8j6id">
          <div
            className="MuiTabs-scrollableX MuiTabs-hideScrollbar css-oqr85h"
            style={{
              width: "99px",
              height: "99px",
              position: "absolute",
              top: "-9999px",
              overflow: "scroll",
            }}
          ></div>
          <div
            className="MuiTabs-scroller MuiTabs-hideScrollbar MuiTabs-scrollableX css-1t0s2fz"
            style={{ marginBottom: "0px" }}
          >
            <div
              className="MuiBox-root css-1t1b5do"
              style={{ marginTop: "20px", paddingLeft: "10px" }}
            >
              <Button
                variant="outlined"
                className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-1o1mcry"
                tabIndex={0}
                type="button"
                role="tab"
                aria-selected={true}
              >
                106 Markets
              </Button>{" "}
              <Button
                variant="outlined"
                className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1o1mcry"
                tabIndex={-1}
                type="button"
                role="tab"
                aria-selected={false}
              >
                3.6K Submarkets
              </Button>{" "}
              <Button
                variant="outlined"
                className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1o1mcry"
                tabIndex={-1}
                type="button"
                role="tab"
                aria-selected={false}
              >
                878.8K STR Listings
              </Button>{" "}
              <Button
                variant="outlined"
                className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1o1mcry"
                tabIndex={-1}
                type="button"
                role="tab"
                aria-selected={false}
              >
                599.3K For Sale Properties
              </Button>
            </div>
            <span
              className="MuiTabs-indicator css-m74y4d"
              style={{ left: "0px", width: "90px" }}
            ></span>
          </div>
        </div>
        {/* Removed Market Score */}
      </div>
    </Box>
  );
};

export default Body;
