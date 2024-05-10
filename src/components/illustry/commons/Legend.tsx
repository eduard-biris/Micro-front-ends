import React from 'react';

interface LegendProps {
    legendData: { [key: string]: string };
    maxItemsPerRow?: number; // Define the maximum number of items per row
  }
  
  const Legend = ({ legendData, maxItemsPerRow }: LegendProps) => {
    const legendItems = Object.keys(legendData);
    const itemsPerRow = maxItemsPerRow || 10; // Define the maximum number of items per row
  
    return (
      <div
        className="flex flex-wrap justify-center items-center"
        style={{
          flexWrap: 'wrap',
          justifyContent: 'flex-start' // Start each new row from the left
        }}
      >
        {legendItems.map((name, index) => (
          <div
            key={index}
            className="flex items-center mx-2"
            style={{
              flex: `1 0 calc(100% / ${itemsPerRow})` // Distribute evenly and prevent item from growing
            }}
          >
            <div
              style={{ backgroundColor: legendData[name] }}
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border border-gray-300 rounded"
            ></div>
            <span
              className="ml-1 text-xs sm:text-sm md:text-base max-w-xs overflow-hidden"
              style={{ whiteSpace: 'nowrap' }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  export default Legend;
  