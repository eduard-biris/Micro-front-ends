import React from 'react';
import { EChartsOption } from 'echarts/types/dist/echarts';

import { AxisChartData } from 'types/visualizations';
import {
  computeLegendColors,
  constructSeries
} from '../helper/helper';
import { SeriesOption } from 'echarts';
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

interface AxisChartProp extends WithLegend, WithOptions {
  data: AxisChartData;
  type: 'line' | 'bar';
}
const AxisChartView = ({ data, type, legend }: AxisChartProp) => {
  const { headers, values } = data;
  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: type !== 'line',
        data: headers
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: constructSeries(
      values,
      colors as string[],
      false,
      type,
      false
    ) as SeriesOption
  };
  return (
    <>
      <div className="relative mt-[4%] flex flex-col items-center">
        {legend && (
          <Legend legendData={computeLegendColors(data, colors as string[])} />
        )}
        <div className="w-full mt-4 h-[80vh]">
          <ReactEcharts option={option} className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
export default AxisChartView;
