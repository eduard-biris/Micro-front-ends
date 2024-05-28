import { PieChartData } from 'types/visualizations';
import { WithLegend, WithOptions } from '../../commons/types/types';
import React, { lazy, Dispatch, SetStateAction, useState } from 'react';
import { visualizationTypesEnum } from '../../commons/validation/visualizations';
import CollapsableSearchBar from '../../commons/searchbar/collapsable-searchbar';

interface FilteredPieChartShellProp extends WithLegend, WithOptions {
  data: PieChartData
}
const PieChartGraphView = lazy(() => import('./pie-chart'));
const FilteredPieChartGraphShellView = ({
  data,
  legend,
  options
}: FilteredPieChartShellProp) => {
  const [filteredData, setFilteredData] = useState<PieChartData>(data);

  return (
    <>
      <CollapsableSearchBar
        data={data}
        setFilteredData={
          setFilteredData as Dispatch<
            SetStateAction<PieChartData>
          >
        }
        type={visualizationTypesEnum.PIE_CHART}
      />
      <>
        <PieChartGraphView options={options} data={filteredData} legend={legend} />
      </>
    </>
  );
};
export default FilteredPieChartGraphShellView;
