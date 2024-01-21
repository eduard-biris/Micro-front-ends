import React from 'react';
import SingleOptionDialog from "../singleOptionDialog/SingleOptionDialog";

const ErrorDialog = ( props: {
    title?: string,
    text?: string,
    confirmText?: string,
    showDialog: boolean,
    onConfirm: () => void,
} ) => {
    return (
        <SingleOptionDialog
            title={props.title || 'ERROR'}
            text={props.text || 'An error occurred'}
            confirmText={props.confirmText || 'Close'}
            showDialog={props.showDialog}
            onConfirm={props.onConfirm}
      />
    );
};

export default ErrorDialog;