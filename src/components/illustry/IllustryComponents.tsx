import React from 'react';
import TimelineView from './timeline/Timeline';
import BarchartView from './barchart/Barchart';
import CalendarView from './calendar/Calendar';
import PiechartView from './piechart/Piechart';

const ExportedComponents: any = {
    TimelineView,
    BarchartView,
    CalendarView,
    PiechartView
};

const IllustryComponents = ({ type, props }: { type:string, props: any }) => {
    const ComponentToRender = ExportedComponents[type] ?? (() => <>Unkown component</>);

    return <ComponentToRender {...props}/>
};

export default IllustryComponents;