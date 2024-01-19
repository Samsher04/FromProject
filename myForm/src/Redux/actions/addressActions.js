export const updateAddressData = (data) => {
    return {
      type: "UPDATE_ADDRESS_DATA",
      payload: data,
    };
  };
  
  export const resetAddressData = () => {
    return {
      type: "RESET_ADDRESS_DATA",
    };
  };