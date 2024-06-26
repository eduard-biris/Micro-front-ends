import React from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { TimelineData } from 'types/visualizations';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { formatDate } from './utils/utils';
import { Button } from '../commons/Button';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { WithLegend, WithOptions } from '../commons/types/types';
import TimelineAccordion from './TimelineAccordion';
import TimelineElement from './TimelineElement';

import './Timeline.css';

interface TimelineProp extends WithLegend, WithOptions {
  data: TimelineData;
}

const TimelineView = ({
  data
}: TimelineProp) => {
  const theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
  const isDarkTheme = theme === 'dark';
  const { ref, inView } = useInView({
    triggerOnce: true
  });
  const sortedKeys = Object.keys(data).sort();

  const elementsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  const displayedDates = sortedKeys.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < sortedKeys.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      // className="mt-[10%] mr-[20%]"
      style={{
        marginTop: '10%',
        marginRight: '20%',
      }}
      ref={ref}
    >
      <VerticalTimeline
        layout="1-column-left"
        animate={true}
        lineColor={!isDarkTheme ? 'rgb(245, 245, 245)' : 'rgb(66, 66, 66)'}
      >
        {displayedDates.map((date) => (
            <TimelineElement
              date={date}
              isDarkTheme={isDarkTheme}
              inView={inView}
              key={date}
            >
              <h3 
                // className="vertical-timeline-element-title text-gray-700 dark:text-gray-400 text-center my-2 text-xm md:text-xl">
                className="vertical-timeline-element-title timeline-first-class"
              >
                {data[date]?.summary?.title}
              </h3>
              <span
                // className="capitalize font-medium text-gray-700 dark:text-gray-400 xs:text-sm"
                className={'timeline-second-class'}
              >
                {formatDate(date)}
              </span>
              <TimelineAccordion data={data} date={date}></TimelineAccordion>
            </TimelineElement>
        ))}
      </VerticalTimeline>
      <div 
        // className="flex justify-center mt-[5%] mb-[10%]"
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: '5%',
          marginBottom: '10%'
        }}
      >
        <Button
          suppressHydrationWarning
          aria-label="Go to previous page"
          variant="outline"
          size="icon"
          className="hidden h-8 w-8 lg:flex"
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
        >
          <ChevronLeftIcon 
            // className="h-4 w-4"
            style={{
              height: '1rem',
              width: '1rem'
            }}
            aria-hidden="true"
          />
        </Button>
        <Button
          suppressHydrationWarning
          aria-label="Go to next page"
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={handleNextPage}
          disabled={endIndex >= sortedKeys.length}
        >
          <ChevronRightIcon
            // className="h-4 w-4"
            style={{
              height: '1rem',
              width: '1rem'
            }}
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
};

export default TimelineView;
