import React, { useEffect, useRef, useState } from 'react';
import Dropzone from './components/Dropzone';
import './FormDialog.css';

type FormDialogProps = {
    showDialog: boolean,
    fields: Array<{ type: string, id: string, label: string, value?: string }>,
    onConfirm: (formState: any) => void,
    onCancel: () => void,
};

const FormDialog = ( props: FormDialogProps ) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if(props.showDialog) {
            dialogRef && dialogRef.current.showModal();
        } else {
            dialogRef && dialogRef.current.close();
        }
    }, [props.showDialog]);

    const [formState, setFormState]= useState(props.fields);

    const updateFormState = (fieldId: string, newValue: any) => {
        const currentFormState = [...formState];
        const indexToUpdate = currentFormState.findIndex((el) => el.id === fieldId);
        if(indexToUpdate !== -1) {
            currentFormState[indexToUpdate].value = newValue;
        }
        setFormState(currentFormState);
    }

    return (
        <>
            <dialog ref={dialogRef} className='dialog'>
                <form>
                    {formState.map((field, index) => {
                        if(field.type !== 'upload') {
                            return (
                                <div className='formField' key={field.id}>
                                    <label>{field.label}</label>
                                    <input type={field.type} key={field.id} value={formState[index].value || ''} onChange={(e) => {updateFormState(field.id, e.target.value)}} />
                                </div>
                            );
                        }

                        
                        return (
                            <Dropzone key={field.id} onFilesAccepted={(acceptedFiles) => updateFormState(field.id, acceptedFiles)} />
                        );
                    })}

                    <div className='buttonsBar'>
                        <button type='button' onClick={() => {props.onConfirm(formState);}}>Confirm</button>
                        <button type='button' onClick={() => {props.onCancel();}}>Cancel</button>
                    </div>
                </form>
            </dialog>
        </>
    )
};

export default FormDialog;