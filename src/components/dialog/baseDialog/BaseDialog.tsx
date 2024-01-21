import React, { useEffect, useRef } from 'react';
import './Dialog.css';

type BaseDialogProps = {
    showDialog: boolean,
    title: string,
    text: string,
    confirmText?: string,
    hideConfirm?: boolean,
    cancelText?: string,
    hideCancel?: boolean,
    onCancel?: () => void,
    onConfirm?: () => void,
};

const BaseDialog = (props: BaseDialogProps) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if(props.showDialog) {
            dialogRef && dialogRef.current.showModal();
        } else {
            dialogRef && dialogRef.current.close();
        }
    }, [props.showDialog]);

    return (
        <>
            <dialog ref={dialogRef} className='dialog'>
                <div className='content'>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
                <div className='buttonsBar'>

                    {!props.hideConfirm && <button 
                        type='button'
                        onClick={() => props.onConfirm && props.onConfirm()}
                    >
                        {props.confirmText ?? 'Confirm'}
                    </button>}

                    {!props.hideCancel && <button 
                        type='button'
                        onClick={() => props.onCancel && props.onCancel()}
                    >
                        {props.cancelText ?? 'Cancel'}
                    </button> }
                </div>
            </dialog>
        </>
    )
};

export default BaseDialog;