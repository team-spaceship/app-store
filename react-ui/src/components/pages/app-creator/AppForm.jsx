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
        <label htmlFor="name">App Name</label>
        {errors.name ? <div className="input-feedback">{errors.name}</div> : null}
        <input
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          placeholder="app name"
        />
      </div>

      <div className="input-group c">
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
        <label htmlFor="url">Repository Url</label>
        {errors.url ? <div className="input-feedback">{errors.url}</div> : null}
        <input
          type="text"
          name="url"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.url}
          placeholder="app repository"
        />
      </div>

      <div className="input-group ">
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
      <button type="submit" disabled={false} className="btn">Submit</button>
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
    name: Yup.string()
      .min(2, "C'mon, an name should be longer than that")
      .required('app name is required.'),
    version: Yup.string()
      .required('a version is required'),
    description: Yup.string()
      .min(50, "Please write a longer description")
      .required('a description is required'),
    url: Yup.string()
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
