import React from "react";

import Chart, {
  ArgumentAxis,
  Label,
  Legend,
  Series,
} from "devextreme-react/chart";


const DayDashboard = ({ belgeler }) => {
  

  return (
    <>
      {belgeler.map((belge) => (
        <Chart
        key={belge.id}
          title="Günlük Kazanç Grafiği"
          dataSource={[
            { arg: "Monday", val: parseInt(belge.pazartesi[0])},
            { arg: "Tuesday", val: parseInt(belge.sali[0])},
            { arg: "Wednesday", val: parseInt(belge.çarşamba[0])},
            { arg: "Thursday", val: parseInt(belge.perşembe[0])},
            { arg: "Friday", val: parseInt(belge.cuma[0])},
            { arg: "Saturday", val: parseInt(belge.cumartesi[0])},
            { arg: "Sunday", val: parseInt(belge.pazar[0])},
          ]}
          id="chart"
        >
          <ArgumentAxis tickInterval={10}>
            <Label format="decimal" />
          </ArgumentAxis>

          <Series type="bar" />

          <Legend visible={false} />
        </Chart>
      ))}
    </>
  );
};

export default DayDashboard;
