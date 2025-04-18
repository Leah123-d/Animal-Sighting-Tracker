import React from 'react';
import '@testing-library/jest-dom'
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddNewSpecies from '../components/AddNewSpecies';

test('Speices input should accept value and submit', async () => {
  //mocking the data from the form to test the component. 
  const mockSpecies = 
    {
      species: "",
      common_name:"",
      scientific_name:"",
      est_living_in_wild:0,
      conservation_status_code:"",
    }

  
  render(<AddNewSpecies species={mockSpecies} openForm1={true}/>) // adding props to the component it needs to run

  const speciesInput = screen.getByLabelText('Species');
  const button = screen.getByRole('button');

  await userEvent.type(speciesInput, 'Jaguar');
  await userEvent.click(button);

  expect(speciesInput).toBeVisible();
  expect(speciesInput).toHaveValue('Jaguar');

})