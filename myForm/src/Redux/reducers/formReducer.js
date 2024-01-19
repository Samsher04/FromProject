const initialState = {
    fullName: "",
    dob: "",
    gender: "",
    mobileNumber: "",
    govIdType: "",
    govIdNumber: "",
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_FORM_DATA":
        return { ...state, ...action.payload };
      case "RESET_FORM_DATA":
        return initialState;
      default:
        return state;
    }
  };

  
  
  export default formReducer;
  