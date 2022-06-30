import * as React from "react";
import PieChart, {
  Legend,
  Series,
  Export,
  Label,
  SmallValuesGrouping,
  Connector,
} from "devextreme-react/pie-chart";



const LeftDash = ({ belgeler }) => {
  
  return (
    <>
      {belgeler.map((belge) => (
        <PieChart
        key={belge.id}
          id="pie"
          type="doughnut"
          title="Haftalık Kazanç Dağılımı"
          palette="Soft Pastel"
          dataSource={[
            
            { language: "Hafta 1", percent: (parseInt(belge.pazartesi)+parseInt(belge.sali)+parseInt(belge.çarşamba)+parseInt(belge.perşembe)+parseInt(belge.cuma)+parseInt(belge.cumartesi)+parseInt(belge.pazar))},
            { language: "Hafta 2", percent: belge.hafta2 },
            { language: "Hafta 3", percent: belge.hafta3 },
            { language: "Hafta 4", percent: belge.hafta4 },
          ]}
        >
          <Series argumentField="language" valueField="percent">
            <SmallValuesGrouping mode="topN" topCount={3} />
            <Label
              visible={true}
              format="fixedPoint"
              
            >
              <Connector visible={true} width={1} />
            </Label>
          </Series>
          <Export enabled={true} />
          <Legend horizontalAlignment="center" verticalAlignment="bottom" />
        </PieChart>
      ))}
    </>
    
  );
  
};


export default LeftDash;
