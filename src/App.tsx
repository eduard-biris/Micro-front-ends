import React, { useState } from 'react';
import BaseDialog from './components/dialog/baseDialog/BaseDialog';
import AddProjectDialog from './components/dialog/exports/AddProjectDialog';
import ErrorDialog from './components/dialog/exports/ErrorDialog';
import DeleteProjectDialog from './components/dialog/exports/DeleteProjectDialog';
import DeleteIllustrationDialog from './components/dialog/exports/DeleteIllustrationDialog';
import FormDialog from './components/dialog/formDialog/FormDialog';

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [showAddProjectDialog, setShowAddProjectDialog] = useState(false);
  const [showDeleteProjectDialog, setShowDeleteProjectDialog] = useState(false);
  const [showDeleteIllustrationDialog, setShowDeleteIllustrationDialog] = useState(false);
  const [showFormDialog, setShowFormDialog] = useState(false);

  return (
    <>
      <BaseDialog
        showDialog={showDialog}
        title='myDialog'
        text='DialogText'
        onCancel={() => {setShowDialog(!showDialog)}}
        onConfirm={() => {setShowDialog(!showDialog)}}
      />

      <ErrorDialog 
        showDialog={showErrorDialog}
        onConfirm={() => {setShowErrorDialog(false)}}
      />

      <AddProjectDialog
        showDialog={showAddProjectDialog}
        onConfirm={() => {setShowAddProjectDialog(false)}}
      />

      <DeleteProjectDialog
        showDialog={showDeleteProjectDialog}
        onCancel={() => {setShowDeleteProjectDialog(false)}}
        onConform={() => {setShowDeleteProjectDialog(false)}}
        projectName='Test Project'
      />

      <DeleteIllustrationDialog
        showDialog={showDeleteIllustrationDialog}
        onCancel={() => {setShowDeleteIllustrationDialog(false)}}
        onConform={() => {setShowDeleteIllustrationDialog(false)}}
        illustrationName='Test Illustration'
      />

      <FormDialog
        showDialog={showFormDialog}
        fields={[
          { type: 'text', id: 'projectName', label: 'Project Name' },
          { type: 'text', id: 'projectDescription', label: 'Project Description' },
          { type: 'upload', id:'projectFile', label: 'file' }
        ]}
        onConfirm={(values) => {console.log('values: ', values); setShowFormDialog(false)}}
        onCancel={() => {setShowFormDialog(false)}}
      />

      <button type='button' onClick={() => setShowDialog(!showDialog)}>ShowDialog</button>
      <button type='button' onClick={() => setShowErrorDialog(!showErrorDialog)}>ShowErrorDialog</button>
      <button type='button' onClick={() => setShowAddProjectDialog(!showAddProjectDialog)}>ShowAddProjectDialog</button>
      <button type='button' onClick={() => setShowDeleteProjectDialog(!showDeleteProjectDialog)}>showDeleteProjectDialog</button>
      <button type='button' onClick={() => setShowDeleteIllustrationDialog(!showDeleteIllustrationDialog)}>showDeleteIllustrationDialog</button>
      <button type='button' onClick={() => setShowFormDialog(!showFormDialog)}>ShowDialog</button>
    </>
  );
}

export default App;
