import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./RegistrationForm.css";
import {
  updateFormData,
  resetFormData,
  fetchFormData,
} from "../Redux/actions/formActions";
import { connect } from "react-redux";
import axios from "axios";

const RegistrationForm = ({
  formData,
  updateFormData,
  resetFormData,
  fetchFormData,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBtn, setIsBtn] = useState(false);

  useEffect(() => {
    return () => {
      resetFormData();
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: formData.fullName || "",
      dob: formData.dob || "",
      gender: formData.gender || "",
      mobileNumber: formData.mobileNumber || "",
      govIdType: formData.govIdType || "",
      govIdNumber: formData.govIdNumber || "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, "Full Name must be at least 3 characters")
        .required("Full Name is required"),
      dob: Yup.date().required("Date of Birth is required"),
      gender: Yup.string().required("Gender is required"),
      mobileNumber: Yup.string().required("Mobile Number is required"),
      govIdType: Yup.string().required("Government ID Type is required"),
      govIdNumber: Yup.string()
      .min(12, "Addhar must be at least 12 characters")
      .required("Government ID Number is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("Form submitted with values:", values);

        updateFormData(values);

        await submitForm(values);

        const fetchedData = await fetchDataFromBackend();
        fetchFormData(fetchedData);

        resetForm();
        setIsSubmitted(true);
        setIsBtn(true)
        

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const fetchDataFromBackend = async () => {
    try {
      const response = await axios.get("http://localhost:3000/submitForm");
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/submitForm",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <>
    <h2>Personal Details</h2>
    
    <div className="registration-form-container">
      <form onSubmit={formik.handleSubmit} className="registration-form">
        {isSubmitted && (
          <div className="success-message">Form submitted successfully!</div>
        )}
        <div className={`form-group ${formik.errors.fullName ? "error" : ""}`}>
          <label htmlFor="fullName">
            Full Name <b>*</b>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="error-message">{formik.errors.fullName}</div>
          )}
        </div>

        <div className={`form-group ${formik.errors.fullName ? "error" : ""}`}>
          <label htmlFor="dob">
            Date of Birth or Age <b>*</b>{" "}
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
          />
          {formik.touched.dob && formik.errors.dob && (
            <div className="error-message">{formik.errors.dob}</div>
          )}
        </div>

        <div className={`form-group ${formik.errors.fullName ? "error" : ""}`}>
          <label>
            Sex <b>*</b>{" "}
          </label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                style={{}}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.gender === "male"}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.gender === "female"}
              />{" "}
              Female
            </label>
          </div>
          {formik.touched.gender && formik.errors.gender && (
            <div className="error-message">{formik.errors.gender}</div>
          )}
        </div>

        <div className={`form-group ${formik.errors.fullName ? "error" : ""}`}>
          <label htmlFor="mobileNumber">
            Mobile Number <b>*</b>
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Enter Mobile"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobileNumber}
          />
          {formik.touched.mobileNumber && formik.errors.mobileNumber && (
            <div className="error-message">{formik.errors.mobileNumber}</div>
          )}
        </div>

        <div className={`form-group ${formik.errors.fullName ? "error" : ""}`}>
          <label htmlFor="govIdType">
            Government ID Type <b>*</b>
          </label>
          <select
            id="govIdType"
            name="govIdType"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.govIdType}
          >
            <option value="" label="Select ID Type" />
            <option value="aadhar" label="Aadhar" />
            <option value="passport" label="Passport" />
            <option value="license" label="Driver's License" />
          </select>
          {formik.touched.govIdType && formik.errors.govIdType && (
            <div className="error-message">{formik.errors.govIdType}</div>
          )}
        </div>

        <div className={`form-group ${formik.errors.fullName ? "error" : ""}`}>
          <label htmlFor="govIdNumber">
            Govt Id Number <b>*</b>
          </label>
          <input
            type="number"
            id="govIdNumber"
            name="govIdNumber"
            placeholder="Enter Govt ID"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.govIdNumber}
          />
          {formik.touched.dob && formik.errors.dob && (
            <div className="error-message">{formik.errors.govIdNumber}</div>
          )}
        </div>

        <div className="btn-box1">
        <button type="submit" className="submit-button">
          Submit
        </button>
        {isBtn && (
           <Link to="/add">Next</Link>
          
        )} 
      
        </div>
      </form>
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    formData: state.form,
  };
};

const mapDispatchToProps = {
  fetchFormData,
};

export default connect(mapStateToProps, {
  updateFormData,
  resetFormData,
  fetchFormData,
})(RegistrationForm);
