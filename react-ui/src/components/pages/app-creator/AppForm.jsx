// Higher Order Component
import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

import './appform.css';

// Our inner form component which receives our form's state and updater methods as props
const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit} className="app-form">

    <div className="input-group">
      <label htmlFor="appname">App Name</label>
      {errors.appname ? <div className="input-feedback">{errors.appname}</div> : null}
      <input
        type="text"
        name="appname"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.appname}
        placeholder="app name"
      />
    </div>

    <div className="input-group">
      <label htmlFor="version">App Version</label>
      {errors.version ? <div className="input-feedback">{errors.version}</div> : null}
      <input
        type="text"
        name="version"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.version}
        placeholder="version"
      />
    </div>

    <div className="input-group">
      <label htmlFor="description">App Description</label>
      {errors.description ? <div className="input-feedback">{errors.description}</div> : null}
      <input
        type="text"
        name="description"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.description}
        placeholder="description"
      />
    </div>

    <div className="input-group">
      <label htmlFor="apprepository">Repository Url</label>
      {errors.apprepository ? <div className="input-feedback">{errors.apprepository}</div> : null}
      <input
        type="text"
        name="apprepository"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.apprepository}
        placeholder="app repository"
      />
    </div>

    <button type="submit" disabled={isSubmitting} className="btn">Submit</button>
  </form>
);

// Wrap our form with the using withFormik HoC
const AppForm = withFormik({
  // Transform outer props into form values

  mapPropsToValues: ({ app }) => ({
    ...app,
  }),
  // Add a custom validation function (this can be async too!)
  validationSchema: Yup.object().shape({
    appname: Yup.string()
      .min(2, "C'mon, an appname should be longer than that")
      .required('app name is required.'),
    version: Yup.string()
      .required('a version is required'),
    description: Yup.string()
      .min(50, "Please write a longer description")
      .required('a description is required'),
    apprepository: Yup.string()
      .url("That's not a valid url!")
      .required('app repository is required.'),
  }),
  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    },
  ) => {
    props.handleFormSubmit(values);
  },
})(InnerForm);

export default AppForm;
