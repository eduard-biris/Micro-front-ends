import React, { useMemo } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { baseStyle, focusedStyle, acceptStyle, rejectStyle } from './styleDropzone';

type DropzoneProps = {
    onFilesAccepted: (files: File[]) => void,
    onFilesRejected?: (files: FileRejection[]) => void
};

const Dropzone = ( props: DropzoneProps ) => {
    const {
        getRootProps,
        getInputProps,
        isDragAccept,
        isFocused,
        isDragReject,
        isDragActive,
    } = useDropzone({
        onDropAccepted(files) {
            props.onFilesAccepted(files);
        },
        onDropRejected(fileRejections) {
            props.onFilesRejected && props.onFilesRejected(fileRejections);
        },
    })

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

    return (
        <div {...getRootProps({ style: dropzoneStyle })}>
            <input {...getInputProps()} />
            {
            isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    );
};

export default Dropzone;