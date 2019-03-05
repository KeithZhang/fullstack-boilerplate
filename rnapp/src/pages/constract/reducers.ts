const initState = {
  constractTypes: [
    [
      {
        label: '生产合同',
        value: 0
      },
      {
        label: '销售合同',
        value: 1
      }
    ]
  ]
};

const constractTypes = (state = initState, action) => {
  switch (action) {
    case 'INIT':
      return state;
    default:
      return state;
  }
};

export default { constractTypes };
