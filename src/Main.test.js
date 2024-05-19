import React, { useState, useReducer, useEffect } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from './Api';
import '@testing-library/jest-dom';
import BookingForm from "./components/Booking/BookingForm";

describe ('Booking form page, all dates should be in 24-hour format', () => {
  const timeValidFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  const mockSubmitForm = jest.fn();
  let mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:30', '22:00'];
  const mockDispatch = jest.fn(action => {
    if (action.type === 'UPDATE_TIMES') {
      mockAvailableTimes = fetchAPI(new Date(action.payload));
    }
  });

  test('Times state should have at least one booking time option', async () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />
      </MemoryRouter>
    );

    const timeOptions = await waitFor(() => screen.findAllByTestId('available-times-option'), { timeout: 5000 });

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach(timeOption =>
      expect(timeOption.value).toMatch(timeValidFormat)
    );
  });

  test('Times state should update available booking times in response to change in booking date', async () => {
    const { rerender } = render(
    <MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />
    </MemoryRouter>
    );

    const inputDateForTest = "2024-07-26"
    const dateInput = screen.getByLabelText('Choose date *');
    const initializedTimeOptions = await waitFor(() => screen.findAllByTestId('available-times-option'), { timeout: 5000 });
    fireEvent.change(dateInput, { target: { value: inputDateForTest } });
    fireEvent.blur(dateInput);

    rerender(
      <MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />
      </MemoryRouter>
    );

    // Wait for the dispatch function to be called
    await waitFor(() => expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: inputDateForTest }));

    // Check that mockAvailableTimes has been updated
    expect(mockAvailableTimes).not.toEqual(initializedTimeOptions.map(option => option.value));

    const updatedTimeOptions = await waitFor(() => screen.findAllByTestId('available-times-option'), { timeout: 5000 });

    expect(dateInput).toHaveValue(inputDateForTest);
    initializedTimeOptions.forEach(timeOption =>
      expect(timeOption.value).toMatch(timeValidFormat)
    );

    updatedTimeOptions.forEach(timeOption =>
      expect(timeOption.value).toMatch(timeValidFormat)
    );
    console.log('initializedTimeOptions:', initializedTimeOptions.map(option => option.value));
    console.log('updatedTimeOptions:', updatedTimeOptions.map(option => option.value));
    expect(initializedTimeOptions.length).not.toBe(updatedTimeOptions.length);
  });
});
