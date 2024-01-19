

const initialState = {
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
  };
  
  const addressReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_ADDRESS_DATA":
        return { ...state, ...action.payload };
      case "RESET_ADDRESS_DATA":
        return initialState;
      default:
        return state;
    }
  };
  
  export default addressReducer;
  