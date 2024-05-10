import React, { lazy } from 'react';
import { PieChartData } from 'types/visualizations';
import { WithFilter, WithLegend, WithOptions } from '../commons/types/types';
import FilteredPieChartGraphShellView from './components/filter-piechart-shell';

interface PieChartShellProp extends WithLegend, WithOptions, WithFilter {
  data: PieChartData;
}
const PieChartGraphView = lazy(() => import('./components/pie-chart'));
const PieChartShellView = ({
  data, legend, options, filter
}: PieChartShellProp) => (
  <>
    {filter ? (
      <FilteredPieChartGraphShellView options={options} data={data} legend={legend} />
    ) : (
      <>
        <PieChartGraphView options={options} data={data} legend={legend} />
      </>
    )}
  </>
);
export default PieChartShellView;
