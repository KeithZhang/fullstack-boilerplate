const mapDispatchToProps = dispatch => {
  const actions = {
    init: () => {
      dispatch({
        type: 'INIT'
      });
    }
  };

  return actions;
};

export default mapDispatchToProps;
