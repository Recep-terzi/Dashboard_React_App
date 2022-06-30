import React from "react";
import {
  Chart,
  Series,
  CommonSeriesSettings,
  Legend,
  Export,
} from "devextreme-react/chart";
import { useCollection } from "../../hooks/useCollection";
import { useAuthcontext } from "../../hooks/useAuthContext";

const DashboardCalculated = () => {
  const { user } = useAuthcontext();
  const { belge } = useCollection("dashboard1", ["uid", "==", user.uid]);
  return (
    <>
      {belge.map((belg) => (
        <div
          className="card"
          key={belg.id}
          style={{
            marginTop: "30px",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          <div className="card-body">
            <Chart
              id="chart"
              palette="Soft"
              title="Ürünlerin Günlük Satış Dağılımları"
              dataSource={[
                {
                  state: "Monday",
                  oil: parseInt(belg.pazartesi[1].Clothes),
                  gas: parseInt(belg.pazartesi[2].Technology),
                  coal: parseInt(belg.pazartesi[3].Other),
                },
                {
                  state: "Tuesday",
                  oil: parseInt(belg.sali[1].Clothes),
                  gas: parseInt(belg.sali[2].Technology),
                  coal: parseInt(belg.sali[3].Other),
                },
                {
                  state: "Wednesday",
                  oil: parseInt(belg.çarşamba[1].Clothes),
                  gas: parseInt(belg.çarşamba[2].Technology),
                  coal: parseInt(belg.çarşamba[3].Other),
                },
                {
                  state: "Thuesday",
                  oil: parseInt(belg.perşembe[1].Clothes),
                  gas: parseInt(belg.perşembe[2].Technology),
                  coal: parseInt(belg.perşembe[3].Other),
                },
                {
                  state: "Friday",
                  oil: parseInt(belg.cuma[1].Clothes),
                  gas: parseInt(belg.cuma[2].Technology),
                  coal: parseInt(belg.cuma[3].Other),
                },
                {
                  state: "Saturday",
                  oil: parseInt(belg.cumartesi[1].Clothes),
                  gas: parseInt(belg.cumartesi[2].Technology),
                  coal: parseInt(belg.cumartesi[3].Other),
                },
                {
                  state: "Sunday",
                  oil: parseInt(belg.pazar[1].Clothes),
                  gas: parseInt(belg.pazar[2].Technology),
                  coal: parseInt(belg.pazar[3].Other),
                },
              ]}
            >
              <CommonSeriesSettings
                argumentField="state"
                type="bar"
                valueField="value"
                ignoreEmptyPoints={true}
                
              />
              <Series valueField="oil" name="Clothes Quantity" />
              <Series valueField="gas" name="Technology Quantity" />
              <Series valueField="coal" name="Other Quantity" />
              <Legend verticalAlignment="bottom" horizontalAlignment="center" />
              <Export enabled={true} />
            </Chart>
          </div>
        </div>
      ))}
    </>
  );
};

export default DashboardCalculated;
