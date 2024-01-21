import React from 'react';
import BaseDialog from "../baseDialog/BaseDialog";

const DeleteProjectDialog = ( props: {
    showDialog: boolean,
    projectName: string,
    onCancel: () => void,
    onConform: () => void,
} ) => {
    return (
        <BaseDialog
            showDialog={props.showDialog}
            title={`Are you sure that you want to delete project ${props.projectName}?`}
            text=''
            onCancel={props.onCancel}
            onConfirm={props.onConform}
      />
    );
};

export default DeleteProjectDialog;