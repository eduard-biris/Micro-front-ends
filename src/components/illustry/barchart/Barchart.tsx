import { AxisChartData } from 'types/visualizations';
import { WithLegend, WithOptions } from '../commons/types/types';
import React, { useState, lazy } from 'react';
import { visualizationTypesEnum } from '../commons/validation/visualizations';
import CollapsableSearchBar from '../commons/searchbar/collapsable-searchbar';

interface FilteredAxisChartsShellProp extends WithLegend, WithOptions {
  data: AxisChartData;
  type: 'line' | 'bar';
}
const AxisChartsView = lazy(() => import('./components/axis-charts'));
const FilteredAxisChartsShellView = ({
  data,
  legend,
  options,
  type
}: FilteredAxisChartsShellProp) => {
  const [filteredData, setFilteredData] = useState<AxisChartData>(data);
  return (
  <>
    <CollapsableSearchBar data = {data} setFilteredData ={setFilteredData} type={type === 'line' ? visualizationTypesEnum.LINE_CHART : visualizationTypesEnum.BAR_CHART}/>
    <AxisChartsView options={options} data={filteredData} type={type} legend={legend} />
  </>
  );
};
export default FilteredAxisChartsShellView;
