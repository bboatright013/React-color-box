import React from 'react';
import {render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

//Smoke Test
it("SMOKE: renders without crashing", () => {
    render(<NewBoxForm />);
  });
  
//Snapshot test
it("SNAP: matches snapshot", () => {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment).toMatchSnapshot();
  });