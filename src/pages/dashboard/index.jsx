import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
  TextField
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import React, { useState, useEffect } from 'react'
import MyResponsiveBar from "../../components/MyResponsiveBar";
import MyResponsiveFunnel from "../../components/MyResponsiveFunnel";
import MyResponsiveMarimekko from "../../components/MyResponsiveMarimekko";
import LineChartDemo from "../../components/LineChartDemo";
import LineChartSale from "../../components/LineChartSale";
import LineChartSaleTrimester from "../../components/LineChartSaleTrimester";


const Dashboard = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(Date());

  const [newRender, setNewRender] = useState(false);

  const handleChange = async (fecha) => {

    //setCurrentDate(fecha);
    console.log("fecha", fecha)
    if (newRender == false) {
      setNewRender(true);
    } else {
      //newRenderValue ->True
      setNewRender(false)
    }
  };

  return (
    <Box m="20px">
      {/* HEADER */}

      <Box
        display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        {/*<Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>*/}


        <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ backgroundColor: 'red', width: '50px' }}>
          <Stack spacing={3}>

            <DesktopDatePicker
              label="Current date"
              value={value}
              minDate={dayjs('2017-01-01')}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />

          </Stack>
        </LocalizationProvider>
      </Box>

      {/* GRID & CHARTS */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box width="100%"
            backgroundColor={colors.primary[400]}
          >
            <Typography
              variant="h5"
              //fontWeight="bold"
              sx={{ color: '#00D3AC' }}
            >
              Period
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>

                <DesktopDatePicker
                  //  label="For desktop"
                  value={value}
                  minDate={dayjs('2017-01-01')}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />

              </Stack>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <Stack spacing={3}>

                <DesktopDatePicker
                  //  label="For desktop"
                  value={value}
                  minDate={dayjs('2017-01-01')}
                  /*onChange={(newValue) => {
                    setValue(newValue);
                  }}*/
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />

              </Stack>
            </LocalizationProvider>
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[700]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="431,225"
              subtitle="Sales Obtained"
              progress="0.50"
              increase="+21%"
              icon={
                <PointOfSaleIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[700]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="32,441"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[700]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="1,325,134"
              subtitle="Pages Views"
              progress="0.80"
              increase="+43%"
              icon={
                <RemoveRedEyeIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={11}
          lg={11}
          //md={8}
          //lg={8}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {/* <Grid xs={12}>
            <Box backgroundColor={colors.primary[400]}>
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    Products
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.greenAccent[500]}
                  >
                    60
                  </Typography>
                </Box>
                <Box>
                  <IconButton>
                    <DownloadOutlinedIcon
                      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box height="250px" m="-20px 0 0 0">
                <LineChart isDashboard={true} newRender={newRender}/>
              </Box>
            </Box>
          </Grid>*/}


          <Grid xs={12}>
            <Box backgroundColor={colors.primary[400]}>
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    Products
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.greenAccent[500]}
                  >
                    Sales / Month 
                  </Typography>
                </Box>
                <Box>

                </Box>
              </Box>
              <Box height="300px" m="-20px 0 0 0">
                <LineChartSale isDashboard={true} newRender={newRender} />
              </Box>
            </Box>
          </Grid>


          <Grid xs={12}>
            <Box backgroundColor={colors.primary[400]}>
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    Products
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.greenAccent[500]}
                  >
                    Sales / Quarters 
                  </Typography>
                </Box>
                <Box>

                </Box>
              </Box>
              <Box height="300px" m="-20px 0 0 0">
                <LineChartSaleTrimester isDashboard={true} newRender={newRender} />
              </Box>
            </Box>
          </Grid>


          {/*<Grid xs={12}>
            <Box backgroundColor={colors.primary[400]}>
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    Products
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.greenAccent[500]}
                  >
                    Price list
                  </Typography>
                </Box>

              </Box>
              <Box height="300px" m="-20px 0 0 0">
                <LineChartDemo isDashboard={true} newRender={newRender} />
              </Box>
            </Box>
          </Grid>*/}

          <Grid xs={12} sm={12} md={6}>
            <Box backgroundColor={colors.primary[400]} p="30px">
              <Typography variant="h5" fontWeight="600">
                Products
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
              >
                <ProgressCircle size="125" />
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                  sx={{ mt: "15px" }}
                >
                  $48
                </Typography>
                <Typography>
                  Includes extra misc expenditures and costs
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Box backgroundColor={colors.primary[400]}>
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ padding: "30px 30px 0 30px" }}
              >
                Sales Quantity
              </Typography>
              <Box height="250px" mt="-20px">
                <BarChart isDashboard={true} />
              </Box>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box backgroundColor={colors.primary[400]} padding="30px">
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
              >
                Geography Based Traffic
              </Typography>
              <Box height="200px">
                <GeographyChart isDashboard={true} />
              </Box>
            </Box>
          </Grid>
          {/*<Grid xs={12}>
            <Box backgroundColor={colors.primary[400]} padding="30px">
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
              >
                Widget type: charts with steps by periods)
              </Typography>
              <Box height="200px">
                <MyResponsiveBar isDashboard={true} />
              </Box>
            </Box>
          </Grid>*/}
          <Grid xs={12} sm={12} md={6}>
            <Box backgroundColor={colors.primary[400]} padding="30px">
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
              >
                Year
              </Typography>
              <Box height="200px">
                <MyResponsiveFunnel isDashboard={true} />
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Box backgroundColor={colors.primary[400]} padding="30px">
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
              >
                Quarters
              </Typography>
              <Box height="200px">
                <MyResponsiveMarimekko isDashboard={true} />
              </Box>
            </Box>
          </Grid>

          <Grid xs={12}>
            <Box backgroundColor={colors.primary[400]}>
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    Products
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.greenAccent[500]}
                  >
                    net_size_x, net_size_y
                  </Typography>
                </Box>
                <Box>
                  <IconButton>
                    <DownloadOutlinedIcon
                      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box height="300px" m="-20px 0 0 0">
                <LineChart isDashboard={true} newRender={newRender} />
              </Box>
            </Box>
          </Grid>


        </Grid>

      </Grid>
    </Box>
  );
};

export default Dashboard;
