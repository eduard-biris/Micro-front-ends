import React, { useEffect } from "react";

const supportedTypes = ({ getAvailableComponents = false, onRetrieve }) => {
    const types = [
        'TimelineView',
        'CalendarView',
        'BarchartView',
        'PiechartView'
    ];

    useEffect(() => {
        if(getAvailableComponents) {
            if(onRetrieve) {
                onRetrieve(types);
            } 
        }
    }, [getAvailableComponents]);

    return (
        <></>
    )
};

export default supportedTypes;