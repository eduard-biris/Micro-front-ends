import React from 'react';
import BaseDialog from '../baseDialog/BaseDialog';

const DeleteIllustrationDialog = ( props: {
    showDialog: boolean,
    illustrationName: string,
    onCancel: () => void,
    onConform: () => void,
} ) => {
    return (
        <BaseDialog
            showDialog={props.showDialog}
            title={`Are you sure that you want to delete illustration ${props.illustrationName}?`}
            text=''
            onCancel={props.onCancel}
            onConfirm={props.onConform}
      />
    );
};

export default DeleteIllustrationDialog;