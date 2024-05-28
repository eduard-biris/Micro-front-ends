import React from 'react';
import { EChartsOption } from 'echarts/types/dist/echarts';
import { PieChartData } from 'types/visualizations';
import {
  computeLegendColors,
  computeValues
} from '../helper/helper';
import { WithLegend, WithOptions } from '../../commons/types/types';
import Legend from '../../commons/Legend';
import ReactEcharts from '../../commons/echarts/echarts';

const colors = [
    "#5DBE6E",
    "#4C8BF5",
    "#F0AC40",
    "#D73D6C",
    "#1D7A8A",
    "#B65911",
    "#84BA5B"
]

interface PieProp extends WithLegend, WithOptions {
  data: PieChartData;
}
const PieView = ({ data, legend }: PieProp) => {
  const option: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: true
        },
        data: computeValues(data, colors)
      }
    ]
  };
  return (
    <div style={{
      position: 'relative',
      marginTop: '4%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }} 
    //className="relative mt-[4%] flex flex-col items-center"
    >
      {legend && <Legend legendData={computeLegendColors(data, colors)} />}
      <div 
        style={{
          width: '100%',
          marginTop: '1rem',
          height: '80vh'
        }}
        // className="w-full mt-4 h-[80vh]"
      >
        <ReactEcharts option={option} 
          style={{
            width: '100%',
            height: '100%'
          }}
          // className="w-full h-full"
        />
      </div>
    </div>
  );
};
export default PieView;
