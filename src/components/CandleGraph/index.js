import React, { useEffect, useState } from "react";

import Chart from "./Chart";
import { getData } from "./utils.js";

import { TypeChooser } from "react-stockcharts/lib/helper";

function ChartComponent() {
	const [data, setData] = useState(null);
	
  useEffect(() => {
    getData().then(data => {
      setData(data);
    });
  }, []);

	if (data == null) return <div>Loading...</div>
  return (
    <TypeChooser>
      {type => <Chart type={type} data={data} />}
    </TypeChooser>
  );
}

export default ChartComponent;
