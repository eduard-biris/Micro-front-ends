import React, { lazy, Suspense } from 'react';

const TimelineView = lazy(() => import('loop/Timelines/TimelineView'));
const CalendarView = lazy(() => import('loop/CalendarView'));
const BarchartView = lazy(() => import('loop/BarchartView'));
const PiechartView = lazy(() => import('loop/PiechartView'));

import './index.css';

// ===== TimelineView mock props =====
// const data = {
//   "2023-10-07": {
//     "summary": {
//       "title": "Sample Timeline"
//     },
//     "events": [
//       {
//         "summary": "Event 1",
//         "date": "08:00:00",
//         "type": "Type A",
//         "author": "Author 1",
//         "tags": [
//           {
//             "name": "Tag A"
//           }
//         ],
//         "description": "Description of Event 1"
//       },
//       {
//         "summary": "Event 2",
//         "date": "09:00:00",
//         "type": "Type B",
//         "author": "Author 2"
//       }
//     ]
//   },
//   "2023-10-10": {
//     "summary": {
//       "title": "Sample Timeline"
//     },
//     "events": [
//       {
//         "summary": "Event 3",
//         "date": "09:00:00",
//         "type": "Type C",
//         "author": "Author 3"
//       },
//       {
//         "summary": "Event 4",
//         "date": "10:00:00",
//         "type": "Type D",
//         "author": "Author 4"
//       },
//       {
//         "summary": "Event 5",
//         "date": "10:00:00",
//         "type": "Type E",
//         "author": "Author 5"
//       }
//     ]
//   },
//   "2023-10-08": {
//     "summary": {
//       "title": "Sample Timeline"
//     },
//     "events": [
//       {
//         "summary": "Event 6",
//         "date": "11:00:00",
//         "type": "Type F",
//         "author": "Author 6"
//       },
//       {
//         "summary": "Event 7",
//         "date": "11:00:00",
//         "type": "Type G",
//         "author": "Author 7"
//       },
//       {
//         "summary": "Event 8",
//         "date": "12:00:00",
//         "type": "Type H",
//         "author": "Author 8"
//       }
//     ]
//   },
//   "2023-10-06 ": {
//     "summary": {
//       "title": "Sample Timeline"
//     },
//     "events": [
//       {
//         "summary": "Event 9",
//         "date": "12:00:00",
//         "type": "Type I",
//         "author": "Author 9"
//       },
//       {
//         "summary": "Event 10",
//         "date": "13:00:00",
//         "type": "Type J",
//         "author": "Author 10"
//       }
//     ]
//   }
// };

// ===== CalendarView mock props =====
// const categories = [ '1', '2', '3', '5', '6', '7' ];
// const calendar = [
//   { date: '1939-09-02', value: 1, category: '1' },
//   { date: '1939-09-07', value: 1, category: '2' },
//   { date: '1939-09-17', value: 1, category: '3' },
//   { date: '1939-10-06', value: 1, category: '1' },
//   { date: '1939-10-07', value: 1, category: '1' },
//   { date: '1939-10-14', value: 1, category: '5' },
//   { date: '1939-10-17', value: 1, category: '1' },
//   { date: '1939-10-22', value: 1, category: '6' },
//   { date: '1939-10-28', value: 1, category: '1' },
//   { date: '1939-11-04', value: 1, category: '7' },
//   { date: '1939-11-28', value: 1, category: '3' },
//   { date: '1939-12-05', value: 1, category: '3' },
//   { date: '1939-12-11', value: 1, category: '2' },
//   { date: '1939-12-16', value: 1, category: '2' },
//   { date: '1939-12-23', value: 1, category: '1' }
// ];
// const legend = true;
// const options = true;

// ===== BarchartView mock props =====
// const data = {
//   "headers": [
//     "Mon",
//     "Tue",
//     "Wed",
//     "Thu",
//     "Fri",
//     "Sat",
//     "Sun"
//   ],
//   "values": {
//     "Statistic 1": [
//       120,
//       132,
//       101,
//       134,
//       90,
//       230,
//       210
//     ],
//     "Statistic 2": [
//       220,
//       182,
//       191,
//       234,
//       290,
//       330,
//       310
//     ],
//     "Statistic 3": [
//       150,
//       232,
//       201,
//       154,
//       190,
//       330,
//       410
//     ],
//     "Statistic 4": [
//       320,
//       332,
//       301,
//       334,
//       390,
//       330,
//       320
//     ]
//   }
// };
// const legend = true;
// const options = true;
// const type = 'bar';

// ===== PiechartView mock props =====
const data = {
  values: {
    'Statistic 1': 122,
    'Statistic 2': 222,
    'Statistic 3': 510,
    'Statistic 4': 320
  }
};
const legend = true;
const options = true;
const filter = true;

function App() {
  return (
    <div>
      <Suspense fallback={'Loading...'}>
        {/* <TimelineView data={data} options={true} legend={true} /> */}
        {/* <CalendarView categories={categories} calendar={calendar} legend={legend} options={options} /> */}
        {/* <BarchartView data={data} legend={legend} options={options} type={type} /> */}
        <PiechartView data={data} legend={legend} options={options} filter={filter} />
      </Suspense>
    </div>
  )
}

export default App;


// import React, { useState } from 'react';
// import BaseDialog from './components/dialog/baseDialog/BaseDialog';
// import AddProjectDialog from './components/dialog/exports/AddProjectDialog';
// import ErrorDialog from './components/dialog/exports/ErrorDialog';
// import DeleteProjectDialog from './components/dialog/exports/DeleteProjectDialog';
// import DeleteIllustrationDialog from './components/dialog/exports/DeleteIllustrationDialog';
// import FormDialog from './components/dialog/formDialog/FormDialog';

// function App() {
//   const [showDialog, setShowDialog] = useState(false);
//   const [showErrorDialog, setShowErrorDialog] = useState(false);
//   const [showAddProjectDialog, setShowAddProjectDialog] = useState(false);
//   const [showDeleteProjectDialog, setShowDeleteProjectDialog] = useState(false);
//   const [showDeleteIllustrationDialog, setShowDeleteIllustrationDialog] = useState(false);
//   const [showFormDialog, setShowFormDialog] = useState(false);

//   return (
//     <>
//       <BaseDialog
//         showDialog={showDialog}
//         title='myDialog'
//         text='DialogText'
//         onCancel={() => {setShowDialog(!showDialog)}}
//         onConfirm={() => {setShowDialog(!showDialog)}}
//       />

//       <ErrorDialog 
//         showDialog={showErrorDialog}
//         onConfirm={() => {setShowErrorDialog(false)}}
//       />

//       <AddProjectDialog
//         showDialog={showAddProjectDialog}
//         onConfirm={() => {setShowAddProjectDialog(false)}}
//       />

//       <DeleteProjectDialog
//         showDialog={showDeleteProjectDialog}
//         onCancel={() => {setShowDeleteProjectDialog(false)}}
//         onConform={() => {setShowDeleteProjectDialog(false)}}
//         projectName='Test Project'
//       />

//       <DeleteIllustrationDialog
//         showDialog={showDeleteIllustrationDialog}
//         onCancel={() => {setShowDeleteIllustrationDialog(false)}}
//         onConform={() => {setShowDeleteIllustrationDialog(false)}}
//         illustrationName='Test Illustration'
//       />

//       <FormDialog
//         showDialog={showFormDialog}
//         fields={[
//           { type: 'text', id: 'projectName', label: 'Project Name' },
//           { type: 'text', id: 'projectDescription', label: 'Project Description' },
//           { type: 'upload', id:'projectFile', label: 'file' }
//         ]}
//         onConfirm={(values) => {console.log('values: ', values); setShowFormDialog(false)}}
//         onCancel={() => {setShowFormDialog(false)}}
//       />

//       <button type='button' onClick={() => setShowDialog(!showDialog)}>ShowDialog</button>
//       <button type='button' onClick={() => setShowErrorDialog(!showErrorDialog)}>ShowErrorDialog</button>
//       <button type='button' onClick={() => setShowAddProjectDialog(!showAddProjectDialog)}>ShowAddProjectDialog</button>
//       <button type='button' onClick={() => setShowDeleteProjectDialog(!showDeleteProjectDialog)}>showDeleteProjectDialog</button>
//       <button type='button' onClick={() => setShowDeleteIllustrationDialog(!showDeleteIllustrationDialog)}>showDeleteIllustrationDialog</button>
//       <button type='button' onClick={() => setShowFormDialog(!showFormDialog)}>ShowDialog</button>
//     </>
//   );
// }

// export default App;
