import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="MuiBox-root css-qebjua">
          <div
            style={{
              overflow: "visible",
              height: "0px",
              width: "0px",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "1361px",
                width: "1144px",
                overflow: "auto",
                willChange: "transform",
                direction: "ltr",
              }}
            >
              <div
                style={{
                  height: "2700px",
                  width: "100%",
                }}
              >
                <div
                  className="MuiGrid-root MuiGrid-container css-dxp6xd"
                  style={{
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    height: "270px",
                  }}
                >
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-mobile-12 MuiGrid-grid-tablet-4 css-1ltdfuo">
                    <div className="MuiBox-root css-1knggpy">
                      <a
                        className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-7g648y"
                        href=""
                      >
                        <div className="MuiBox-root css-6gxhc5">
                          <div className="MuiBox-root css-b7jmoi">
                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-2lhryt"></span>
                            <img
                              className="MuiBox-root css-1l6savg"
                              src="https://images.unsplash.com/photo-1589402249680-5ff95f2ac3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzgzMTN8MHwxfHNlYXJjaHwxfHxTYW4lMjBKdWFuJTIwUHVlcnRvJTIwUmljb3xlbnwwfHx8fDE2ODIzNjA4ODE&ixlib=rb-4.0.3&q=100&w=400"
                              srcSet="https://images.unsplash.com/photo-1589402249680-5ff95f2ac3bd?auto=format&q=75&w=320 320w, https://images.unsplash.com/photo-1589402249680-5ff95f2ac3bd?auto=format&q=75&w=720 720w, https://images.unsplash.com/photo-1589402249680-5ff95f2ac3bd?auto=format&q=75&w=1120 1120w, https://images.unsplash.com/photo-1589402249680-5ff95f2ac3bd?auto=format&q=75&w=1920 1920w"
                              loading="eager"
                              alt="Description"
                              height={370}
                              width={395}
                            />
                          </div>
                        </div>
                        <div className="MuiBox-root css-10mkmwe">
                          <div className="MuiBox-root css-0">
                            <div className="MuiBox-root css-nljllg">
                              <div className="MuiBox-root css-rcxfxe">
                                <span
                                  className="MuiCircularProgress-root MuiCircularProgress-determinate MuiCircularProgress-colorPrimary css-711yzy"
                                  role="progrssbar"
                                  aria-valuenow={99}
                                  style={{
                                    height: "36px",
                                    width: "36px",
                                    transform: "rotate(-90deg)",
                                  }}
                                >
                                  <svg
                                    className="MuiCircularProgress-svg css-13o7eu2 "
                                    viewBox="22 22 44 44"
                                  >
                                    <circle
                                      className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate css-18h32s2"
                                      cx={44}
                                      cy={44}
                                      r={19.5}
                                      fill="none"
                                      stroke-width={5}
                                      style={{
                                        strokeDasharray: "122.522",
                                        strokeDashoffset: "0.706px",
                                      }}
                                    ></circle>
                                  </svg>
                                </span>
                                <span
                                  className="MuiCircularProgress-root MuiCircularProgress-determinate MuiCircularProgress-colorPrimary css-eny2bh"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  style={{
                                    height: "34px",
                                    width: "34px",
                                    transform: "rotate(-90deg)",
                                  }}
                                >
                                  <svg
                                    className="MuiCircularProgress-svg css-13o7eu2"
                                    viewBox="22 22 44 44"
                                  >
                                    <circle
                                      className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate css-18h32s2"
                                      cx={44}
                                      cy={44}
                                      r={19.5}
                                      fill="none"
                                      stroke-width={5}
                                      style={{
                                        strokeDasharray: "122.522",
                                        strokeDashoffset: "0px",
                                      }}
                                    ></circle>
                                  </svg>
                                </span>
                                <div className="MuiBox-root css-1o8dslu">
                                  <div className="MuiBox-root css-xi606m">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 css-r22nm0">
                                      99
                                    </h6>
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root css-16p1w4b">
                                <h6 className="MuiTypography-root MuiTypography-titleXXS css-1l2kcxs">
                                  San Juan
                                </h6>
                                <p className="MuiTypography-root MuiTypography-caption css-aeps8">
                                  Coastal
                                </p>
                              </div>
                            </div>
                            <div className="MuiBox-root css-5s04d1">
                              <div className="MuiBox-root css-1hx8kxg">
                                <div className="MuiBox-root css-ukkjh9">
                                  <p className="MuiTypography-root MuiTypography-titleXXS css-3ry9xp">
                                    $43.7k
                                  </p>
                                  <p className="MuiTypography-root MuiTypography-caption MuiTypography-noWrap css-1j65iz8">
                                    Reveue
                                  </p>
                                  <p className="MuiTypography-root MuiTypography-caption MuiTypography-noWrap css-vwncaa">
                                    Potential
                                  </p>
                                </div>
                                <hr className="MuiDivider-root MuiDivider-middle MuiDivider-vertical MuiDivider-flexItem css-172lh00" />
                              </div>
                              <div className="MuiBox-root css-72fd9l">
                                <div className="MuiBox-root css-xi606m">
                                  <p className="MuiTypography-root MuiTypography-titleXXS css-3ry9xp">
                                    63%
                                  </p>
                                  <p className="MuiTypography-root MuiTypography-caption MuiTypography-noWrap css-10115j1">
                                    Occupancy
                                  </p>
                                </div>
                              </div>
                              <div className="MuiBox-root css-1hx8kxg">
                                <hr className="MuiDivider-root MuiDivider-middle MuiDivider-vertical MuiDivider-flexItem css-cuv65e" />
                                <div className="MuiBox-root css-ukkjh9">
                                  <p className="MuiTypography-root MuiTypography-titleXXS css-3ry9xp">
                                    $206.8
                                  </p>
                                  <p className="MuiTypography-root MuiTypography-caption MuiTypography-noWrap css-10115j1">
                                    Daily Rate
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="MuiTypography-root MuiTypography-caption css-2cacyf">
                            Over the last 12 months
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
