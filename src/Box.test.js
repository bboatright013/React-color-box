import React from 'react';
import {render, fireEvent } from '@testing-library/react';
import Box from './Box';

//Smoke Test
it("SMOKE: renders without crashing", () => {
    render(<Box />);
  });
  
//Snapshot test
it("SNAP: matches snapshot", () => {
    const {asFragment} = render(<Box />);
    expect(asFragment).toMatchSnapshot();
  });