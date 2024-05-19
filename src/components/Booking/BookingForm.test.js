/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Booking form', () => {
  const availableTimes = ['17:00', '17:30'];
  const today = new Date().toISOString().split('T')[0];
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  test('should correctly render all fields and their default values', async () => {
    render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </Router>
    );

    const firstNameInput = screen.getByLabelText('First name *');
    const lastNameInput = screen.getByLabelText('Last name *');
    const contactNumberInput = screen.getByLabelText('Contact Number *');
    const dateInput = screen.getByLabelText('Choose date *');
    const timeSelect = screen.getByLabelText('Choose time *');
    const timeOptions = await screen.findAllByTestId('available-times-option');
    const numberOfGuestsInput = screen.getByLabelText('Number of guests *');
    const occasionSelect = screen.getByLabelText('Occasion *');
    const submitButton = screen.getByLabelText('Submit reservation form');

    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).toHaveAttribute('required');
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).toHaveAttribute('required');
    expect(contactNumberInput).toBeInTheDocument();
    expect(contactNumberInput).toHaveAttribute('required');

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min', today);
    expect(dateInput).toHaveAttribute('required');

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('required');
    expect(timeOptions.length).toBe(2);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
    expect(numberOfGuestsInput).toHaveAttribute('min', '1');
    expect(numberOfGuestsInput).toHaveAttribute('max', '10');
    expect(numberOfGuestsInput).toHaveAttribute('required');

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('required');

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });



  test('should successfully submit form with valid values', async () => {
    render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </Router>
    );

    const firstNameInput = screen.getByLabelText('First name *');
    const lastNameInput = screen.getByLabelText('Last name *');
    const contactNumberInput = screen.getByLabelText('Contact Number *');
    const dateInput = screen.getByLabelText('Choose date *');
    const timeSelect = screen.getByLabelText('Choose time *');
    const numberOfGuestsInput = screen.getByLabelText('Number of guests *');
    const occasionSelect = screen.getByLabelText('Occasion *');
    const submitButton = screen.getByLabelText('Submit reservation form');

    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: 'John' } });
      fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
      fireEvent.change(contactNumberInput, { target: { value: '012-345-6789' } });
      fireEvent.change(dateInput, { target: { value: today } });
      fireEvent.change(timeSelect, { target: { value: '17:00' } });
      fireEvent.change(numberOfGuestsInput, { target: { value: '2' } });
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

      fireEvent.submit(submitButton);
    });

    await waitFor(() => expect(submitForm).toHaveBeenCalledWith({
      firstName: "John",
      lastName: "Doe",
      contactNumber: "012-345-6789",
      date: today,
      time: "17:00",
      numberOfGuests: 2,
      occasion: "Birthday",
    }));
  });

  test('should display an error message when date field\'s value is in the past', async () => {
    render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </Router>
    );

    const dateInput = screen.getByLabelText('Choose date *');

    await act(async () => {
      fireEvent.change(dateInput, { target: { value: '2000-01-01' } });
      fireEvent.blur(dateInput);
    });

    const errorMessage = screen.getByText(/Date cannot be in the past/);
    expect(errorMessage).toBeInTheDocument();
  });

  test('should display an error message when number of guests field\'s value is more than 10', async () => {
    render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </Router>
    );

    const numberOfGuestsInput = screen.getByLabelText('Number of guests *');

    await act(async () => {
      fireEvent.change(numberOfGuestsInput, { target: { value: '11' } });
      fireEvent.blur(numberOfGuestsInput);
    });

    const errorMessage = screen.getByText(/Must be 10 or less/);
    expect(errorMessage).toBeInTheDocument();
  });
});
