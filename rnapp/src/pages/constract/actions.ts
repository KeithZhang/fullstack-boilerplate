const mapDispatchToProps = dispatch => {
  const actions = {
    init: () => {
      dispatch({
        type: 'INIT'
      });
    },

    submit: formData => {
      dispatch({
        type: 'SUBMIT',
        formData
      });
    }
  };

  return actions;
};

export default mapDispatchToProps;
