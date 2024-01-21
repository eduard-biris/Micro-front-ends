import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { baseStyle, focusedStyle, acceptStyle, rejectStyle } from './styleDropzone';
import './FormDialog.css';

type FormDialogProps = {
    showDialog: boolean,
    fields: Array<{ type: string, label: string, initialValue?: string }>,
    onConfirm: () => void,
    onCancel: () => void,
};

const FormDialog = ( props: FormDialogProps ) => {
    const dialogRef = useRef(null);
    const onDrop = useCallback((acceptedFiles: any) => {
        console.log('AcceptedFiles:::', acceptedFiles);
    }, [])
    const {
        getRootProps,
        getInputProps,
        isDragAccept,
        isFocused,
        isDragReject,
        isDragActive,
    } = useDropzone({onDrop})

    const dropzoneStyle = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isFocused,
        isDragAccept,
        isDragReject
      ]);

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
                <form>
                    {props.fields.map((field, index) => {
                        if(field.type !== 'upload') {
                            return (
                                <div className='formField' key={index}>
                                    <label>{field.label}</label>
                                    <input type={field.type} value={field.initialValue} key={index} />
                                </div>
                            );
                        }

                        return (
                            <div {...getRootProps({ style: dropzoneStyle })} key={index}>
                                <input {...getInputProps()} />
                                {
                                isDragActive ?
                                    <p>Drop the files here ...</p> :
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                }
                            </div>
                        );
                    })}

                    <div className='buttonsBar'>
                        <button type='button' onClick={props.onConfirm}>Confirm</button>
                        <button type='button' onClick={props.onCancel}>Cancel</button>
                    </div>
                </form>
            </dialog>
        </>
    )
};

export default FormDialog;