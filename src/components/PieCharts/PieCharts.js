import React from "react";

import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
} from "devextreme-react/pie-chart";


const PieCharts = ({ belgeler }) => {
  return (
    <>
    {
      belgeler.map((belge) => ( <PieChart
      key={belge.id}
        id="pie"
        dataSource={[
          { country: "Monday", area: parseInt(belge.pazartesi) },
          { country: "Tuesday", area: parseInt(belge.sali) },
          { country: "Wednesday", area: parseInt(belge.carsamba) },
          { country: "Thursday", area: parseInt(belge.perşembe) },
          { country: "Friday", area: parseInt(belge.cuma) },
          { country: "Saturday", area: parseInt(belge.cumartesi) },
          { country: "Sunday", area: parseInt(belge.pazar) }
        ]}
        palette="Bright"
        title="Günlük Kazanç Dağılımı"
      >
        <Series argumentField="country" valueField="area">
          <Label visible={true}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>

        <Size width={500} />
        <Export enabled={true} />
      </PieChart>))
    }
     
    </>
  );
};

export default PieCharts;
