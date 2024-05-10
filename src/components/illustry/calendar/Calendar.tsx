/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { EChartsOption, SeriesOption } from 'echarts/types/dist/echarts';
import {
  computeCalendar,
  computeColors,
  computeLegendColors,
  computePropertiesForToolTip
} from './helper/helper';
import { CalendarOption } from 'echarts/types/dist/shared';
import { CalendarType } from 'types/visualizations';
import { WithLegend, WithOptions } from '../commons/types/types';
import Legend from '../commons/Legend';
import ReactEcharts from '../commons/echarts/echarts';

const colors = [
    "#5DBE6E",
    "#4C8BF5",
    "#F0AC40",
    "#D73D6C",
    "#1D7A8A",
    "#B65911",
    "#84BA5B"
]

interface CalendarGraphProp extends WithLegend, WithOptions {
  categories: string[];
  calendar: CalendarType[];
}
const CalendarGraphView = ({ categories, calendar, legend }: CalendarGraphProp) => {
  const theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
  const isDarkTheme = theme === 'dark';
  const textColor = isDarkTheme ? '#888' : '#333';
  const computedCalendar = computeCalendar(calendar, textColor);
  const option: EChartsOption = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',

      formatter(params) {
        // @ts-ignore
        if (params && params.data && params.data.length) {
          const element = (calendar as CalendarType[]).find((el) =>
            // @ts-ignore
            // eslint-disable-next-line implicit-arrow-linebreak
            el.date === params.data[0]);
          if (element) {
            if (element.properties) {
              return computePropertiesForToolTip(
                element.properties,
                element.value
              );
            }
            return computePropertiesForToolTip(null, element.value);
          }
        }
        return '';
      }
    },
    visualMap: {
      show: false,
      orient: 'horizontal',
      left: 'center',
      top: 30,
      type: 'piecewise',
      categories,
      textStyle: {
        color: textColor
      },
      inRange: { color: computeColors(categories, colors) }
    },

    calendar: computedCalendar.calendar as CalendarOption,
    series: computedCalendar.series as SeriesOption
  };
  const canvasHeight = `${computedCalendar.calendar.length * 35}vh`;
  return (
    <div className="relative mt-[4%] flex flex-col items-center">
      {legend && (
        <Legend legendData={computeLegendColors(categories, colors)} />
      )}
      <div className="w-full h-full">
        <ReactEcharts
          option={option}
          className="w-full sm:h-120 lg:h-160"
          style={{
            height: canvasHeight
          }}
        />
      </div>
    </div>
  );
};
export default CalendarGraphView;
