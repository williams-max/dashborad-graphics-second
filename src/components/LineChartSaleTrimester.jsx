import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData } from "../data/mockDataDemo";

import dataProducts from "../data/products";
import { useState, useEffect } from "react";
import { set } from "date-fns";
import axios from "axios";
import { proResponseProductsDocsTrimesterUrl, proResponseProductsUrl } from "./values/Strings/Url";

const LineChartSaleTrimester = ({ isDashboard = false, newRender }) => {
  //console.log("valor en lineChar ",newRender)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [dataTest1, setDataTest1] = useState([
    {
      id: "price_list",
      color: 'red',
      data: []
    }
  ]);

  const dataTest = [
    {
      id: "price_list",
      color: 'red',
      data: [
        {
          x: "64.75",
          y: 1,
        },
        {
          x: "58.28",
          y: 2,
        },
        {
          x: "48.56",
          y: 3,
        },
        {
          x: "45.33",
          y: 4,
        },
        {
          x: "15.0",
          y: 5,
        },

      ],
    },

  ]

  const dataExcel = [
    {
      id: "price_list",
      color: 'red',
      data: [

        { x: 1, y: 40 },
        { x: 1, y: 20 },
        { x: 2, y: 30 },
        { x: 3, y: 40 },
        { x: 4, y: 60 },
        { x: 5, y: 45 },



      ],
    },

  ]
  useEffect(() => {

   // updateDate()
  }, []);

  useEffect(() => {
    if (newRender == true) {
      setDataTest1(mockLineData)
    }
    if (newRender == false) {

      //updateDate()
      getProductsDemo();
    }

  }, [newRender]);



  const getProductsDemo = async () => {


    //`http://localhost:4000/api/get-docs-trimester`

    try {
      //proResponseProductsDocsTrimesterUrl
      const resultado = await axios.get("http://localhost:4000/api/get-docs-trimester")
      console.log("resultado formateado", resultado.data)

      setDataTest1(resultado.data)
     

    } catch (error) {

      console.log(error)
    //  setDataTest1([])
    }
    /**************** */

  }

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  return (
    <>
      {dataTest1[0]?.data?.length > 0 ?
        <ResponsiveLine
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100],
                },
              },
              legend: {
                text: {
                  fill: colors.grey[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.grey[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.grey[100],
                },
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
              },
            },
            tooltip: {
              container: {
                background: colors.primary[400],
                color: colors.grey[100],
              },
            },
          }}
          curve="catmullRom"
          //  data={dataExcel}
          data={dataTest1}
          //  data={mockLineData}
          colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Quarters",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickValues: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Sales ",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          enableGridX={false}
          enableGridY={!isDashboard}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
        : <><h4> Loading...</h4></>}
    </>
  );
};

export default LineChartSaleTrimester;
