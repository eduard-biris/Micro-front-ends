import React, { useState } from 'react';
import BaseDialog from '../baseDialog/BaseDialog';

type SingleOptionDialogProps = {
    showDialog: boolean,
    title: string,
    text?: string,
    confirmText: string,
    onConfirm: () => void,
};

const SingleOptionDialog = (props: SingleOptionDialogProps) => {

    return (
        <BaseDialog 
            showDialog={props.showDialog}
            title={props.title}
            text={props.text ?? ''}
            confirmText={props.confirmText}
            onConfirm={props.onConfirm}
            hideCancel
        />
    );
};

export default SingleOptionDialog;