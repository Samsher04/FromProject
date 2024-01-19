// formActions.js

export const updateFormData = (data) => {
  return {
    type: "UPDATE_FORM_DATA",
    payload: data,
  };
};

export const resetFormData = () => {
  return {
    type: "RESET_FORM_DATA",
  };
};

export const fetchFormData = (formData) => {
  return {
    type: "FETCH_FORM_DATA", 
    payload: formData,
  };
};

// addressActions.js
