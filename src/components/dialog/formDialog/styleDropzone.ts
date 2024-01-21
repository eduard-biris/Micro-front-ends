const baseStyle = {
  flex: 1,
  display: 'flex',
  FlexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: 'darkgray',
  borderStyle: 'dashed',
  backgroundColor: '#lightgray',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  marginTop: 20,
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export {
    baseStyle,
    focusedStyle,
    acceptStyle,
    rejectStyle,
};