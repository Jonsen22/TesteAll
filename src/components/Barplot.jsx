import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import "./Barplot.css"

const Barplot = ({ vendas }) => {
    const categories = Object.keys(vendas);
    const data = Object.values(vendas);
  
    const options = {
      chart: {
        type: 'column',
        height: 500,
      },
      title: {
        text: '',
      },
      xAxis: {
        categories,
        title: {
          text: 'Meses',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Vendas',
          align: 'middle',
        },
        labels: {
          overflow: 'justify',
        },
      },
      tooltip: {
        valueSuffix: ' vendas',
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: false,
          },
        },
      },
      colors:['#6596E0'],
      series: [
        {
          name: '<b>Vendas</b>',
          data,
         
        },
      ],
    };
  
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  };

export default Barplot;
