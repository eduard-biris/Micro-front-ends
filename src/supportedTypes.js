import React, { useEffect } from "react";

const supportedTypes = ({ getAvailableComponents = false, onRetrieve }) => {
    const types = [
        'TimelineView',
        'TestComponentOne',
        'TestComponentTwo'
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