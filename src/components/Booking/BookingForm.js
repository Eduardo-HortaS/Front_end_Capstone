// import { useEffect } from 'react';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('⚠ Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('⚠ Required'),
  contactNumber: Yup.string()
    .matches(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, 'Invalid contact number')
    .required('⚠ Required'),
  date: Yup.date()
    .min(new Date(), 'Date cannot be in the past')
    .required('⚠ Required'),
  time: Yup.string()
    .required('⚠ Required'),
  numberOfGuests: Yup.number()
    .min(1, 'Must be at least 1')
    .max(10, 'Must be 10 or less')
    .required('⚠ Required'),
  occasion: Yup.string()
    .required('⚠ Required'),
});

function BookingForm({ availableTimes, dispatch, submitForm }) {
  console.log('Available times:', availableTimes);
  const today = new Date().toISOString().split('T')[0];
  const options = availableTimes.map(time => <option data-testid="available-times-option" key={time}>{time}</option>);
  const navigate = useNavigate();

  return (
    <main className='ul'>
      <p className='lead-text'> Fill reservation booking form</p>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          contactNumber: "",
          date: "",
          time: "",
          numberOfGuests: 1,
          occasion: "Birthday"
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          submitForm(values);
          navigate('/confirmed');
        }}
        onReset={(values, { setFieldValue }) => {
          setFieldValue('time', '');
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className='form-field'>
              <div className='form-field-child-inline-block'>
                <label htmlFor="first-name">First name *</label>
                <Field type="text" id="first-name" name="firstName" required />
                <ErrorMessage name="firstName" component="div" />
              </div>

              <div className='form-field-child-inline-block'>
                <label htmlFor="last-name">Last name *</label>
                <Field type="text" id="last-name" name="lastName" required />
                <ErrorMessage name="lastName" component="div" />
              </div>
            </div>

            <div className='form-field'>
              <div className='form-field-child-inline-block'>
                <label htmlFor="contact-number">Contact Number *</label>
                <Field type="text" id="contact-number" name="contactNumber" placeholder="012-322-9560" required />
                <ErrorMessage name="contactNumber" component="div" />
              </div>
            </div>

            <div className='form-field date-time'>
              <div className='form-field-child-inline-block'>
                <label htmlFor="res-date">Choose date *</label>
                <Field type="date" id="res-date" name="date" min={today} onChange={e => {
                  setFieldValue('date', e.target.value);
                  dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
                }} required />
                <ErrorMessage name="date" component="div" />
              </div>
              <div className='form-field-child-inline-block'>
                <label htmlFor="res-time">Choose time *</label>
                <Field as="select" id="res-time" name="time" required>
                  {options}
                </Field>
                <ErrorMessage name="time" component="div" />
              </div>
            </div>

            <div className="form-field guests-occassion">
              <div className="form-field-child-inline-block">
                <label htmlFor="guests">Number of guests *</label>
                <Field type="number" placeholder="1" min="1" max="10" id="guests" name="numberOfGuests" required />
                <ErrorMessage name="numberOfGuests" component="div" />
              </div>
              <div className="form-field-child-inline-block">
                <label htmlFor="occasion">Occasion *</label>
                <Field as="select" id="occasion" name="occasion" required>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </Field>
                <ErrorMessage name="occasion" component="div" />
              </div>
            </div>

            <button className="submit" type="submit" aria-label="Submit reservation form">Make Your Reservation</button>
          </Form>
        )}
      </Formik>
    </main>
  );
}

export default BookingForm;