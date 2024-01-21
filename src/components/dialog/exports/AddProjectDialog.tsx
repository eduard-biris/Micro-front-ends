import React from 'react';
import SingleOptionDialog from '../singleOptionDialog/SingleOptionDialog';

const AddProjectDialog = ( props: {
    showDialog: boolean,
    onConfirm: () => void,
} ) => {
    return (
        <SingleOptionDialog
        title='Project Added Successfully!'
        confirmText='Close'
        showDialog={props.showDialog}
        onConfirm={props.onConfirm}
      />
    );
};

export default AddProjectDialog;