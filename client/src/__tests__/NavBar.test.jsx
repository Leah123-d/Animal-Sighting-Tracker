import React from 'react';
import {jest} from '@jest/globals'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from '../components/NavBar'



test('navlink and title should appear', async () => {
  const handleClickForm1 = jest.fn(); // required to mock the user click for testing

  render(<NavBar handleClickForm1={handleClickForm1}/>); //pass the mock click function as a prop

  const title = screen.getByText('Animal Sightings Tracker');
  await userEvent.click(screen.getByText(/Report new Species!/i));

  
  expect(title).toBeInTheDocument();
  expect(handleClickForm1).toHaveBeenCalled();
  


})