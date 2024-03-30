import { Column } from "@ant-design/plots";
import React, { useEffect, useState } from "react";

import columnDarkTheme from "./theme/dark-column-theme.json";
import columnLightTheme from "./theme/light-column-theme.json";
import { useGlobalStore } from "@/store/global";

function DemoColumn() {
  const [data, setData] = useState([]);
  const { darkMode } = useGlobalStore();

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json",
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data,
    isStack: true,
    xField: "year",
    yField: "value",
    seriesField: "type",
    height: 460,
    legend: {
      position: "bottom",
    },
  };

  return (
    <Column theme={darkMode ? columnDarkTheme : columnLightTheme} {...config} />
  );
}

export default DemoColumn;
