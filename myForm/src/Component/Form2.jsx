import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import axios from "axios";
import { updateAddressData, resetAddressData } from "../Redux/actions/addressActions";

const AddressForm = ({ addressData, updateAddressData, resetAddressData }) => {
    const[addres,setAddress] = useState(false)
  const formik = useFormik({
    initialValues: {
      address: addressData.address || "",
      state: addressData.state || "",
      city: addressData.city || "",
      country: addressData.country || "",
      pincode: addressData.pincode || "",
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Address is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
      pincode: Yup.string().matches(/^\d{6}$/, "Pincode must have exactly 6 digits").required("Pincode is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
        try {
            const response = await fetch('http://localhost:3000/saveAddress', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });
            setAddress(true)
            
            setTimeout(() => {
                setAddress(false);
              }, 5000);
    
            const data = await response.json();
            console.log(data);
    
            updateAddressData(values);
            resetForm();
          } catch (error) {
            console.error('Error saving data:', error);
          }
    },
  });

  return (

    <>
    <h2>Address Details</h2>
    <div className="address-form-container">
      <form onSubmit={formik.handleSubmit} className="address-form">
      {addres && (
          <div className="success-message">Form submitted successfully!</div>
        )}
        <div className={`form-group ${formik.errors.address ? "error" : ""}`}>
          <label htmlFor="address">
            Address <b>*</b>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address && (
            <div className="error-message">{formik.errors.address}</div>
          )}
        </div>

        <div className={`form-group ${formik.errors.state ? "error" : ""}`}>
          <label htmlFor="state">
            State <b>*</b>{" "}
          </label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter State"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.state}
          />
          {formik.touched.state && formik.errors.state && (
            <div className="error-message">{formik.errors.state}</div>
          )}
        </div>

        <div className={`form-group ${formik.errors.city ? "error" : ""}`}>
          <label>
            City <b>*</b>{" "}
          </label>
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city && (
            <div className="error-message">{formik.errors.city}</div>
          )}
        </div>

        <div className={`form-group ${formik.errors.country ? "error" : ""}`}>
          <label htmlFor="country">
            Country <b>*</b>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter Country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          />
          {formik.touched.country && formik.errors.country && (
            <div className="error-message">{formik.errors.country}</div>
          )}
        </div>

        <div className={`form-group ${formik.errors.pincode ? "error" : ""}`}>
          <label htmlFor="pincode">
            Pincode <b>*</b>
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            placeholder="Enter Pincode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pincode}
          />
          {formik.touched.pincode && formik.errors.pincode && (
            <div className="error-message">{formik.errors.pincode}</div>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit Address
        </button>
      </form>
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
    return {
      addressData: state.address,
    };
  };

const mapDispatchToProps = {
    updateAddressData,
    resetAddressData,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);
