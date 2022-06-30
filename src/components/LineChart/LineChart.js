import React from "react";
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
  Title,
  Tooltip,
  Grid,
} from "devextreme-react/chart";
const energySources = [
  { value: "clothes", name: "Clothes" },
  { value: "technology", name: "Technology" },
  { value: "other", name: "Other" },
  
];



const LineChart = ({belgeler}) => {
  
  return (
    <>
      {belgeler.map(belge => (
        
        <Chart palette="Violet" key={belge} dataSource={[
          
          {
            country: "Pazartesi",
            clothes: parseInt(belge.pazartesi[1].Clothes),
            technology: parseInt(belge.pazartesi[2].Technology),
            other: parseInt(belge.pazartesi[3].Other),
          },
          {
            country: "Sali",
            clothes: parseInt(belge.sali[1].Clothes),
            technology: parseInt(belge.sali[2].Technology),
            other: parseInt(belge.sali[3].Other),
          },
          {
            country: "Çarşamba",
            clothes: parseInt(belge.çarşamba[1].Clothes),
            technology: parseInt(belge.çarşamba[2].Technology),
            other: parseInt(belge.çarşamba[3].Other),
          },
          {
            country: "Perşembe",
            clothes: parseInt(belge.perşembe[1].Clothes),
            technology: parseInt(belge.perşembe[2].Technology),
            other: parseInt(belge.perşembe[3].Other),
          },
          {
            country: "Cuma",
            clothes: parseInt(belge.cuma[1].Clothes),
            technology: parseInt(belge.cuma[2].Technology),
            other: parseInt(belge.cuma[3].Other),
          },
          {
            country: "Cumartesi",
            clothes: parseInt(belge.cumartesi[1].Clothes),
            technology: parseInt(belge.cumartesi[2].Technology),
            other: parseInt(belge.cumartesi[3].Other),
          },
          {
            country: "Pazar",
            clothes: parseInt(belge.pazar[1].Clothes),
            technology: parseInt(belge.pazar[2].Technology),
            other: parseInt(belge.pazar[3].Other),
          },

        ]}>
          
          <CommonSeriesSettings argumentField="country" />
          {energySources.map((item) => (
            <Series key={item.value} valueField={item.value} name={item.name} />
          ))}
          <Margin bottom={20} />
          <ArgumentAxis
            valueMarginsEnabled={false}
            discreteAxisDivisionMode="crossLabels"
          >
            <Grid visible={true} />
          </ArgumentAxis>
          <Legend
            verticalAlignment="bottom"
            horizontalAlignment="center"
            itemTextPosition="bottom"
          />
          <Export enabled={true} />
          <Title text="Ürünlerin günlük satış çizgi grafiği">
            
          </Title>
          <Tooltip enabled={true} />
        </Chart>
      )) }
    </>
  );
};

export default LineChart;
