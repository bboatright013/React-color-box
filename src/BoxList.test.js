import React from 'react';
import {render, screen, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

//Smoke Test
it("SMOKE: renders without crashing", () => {
    render(<BoxList />);
  });
  
//Snapshot test
it("SNAP: matches snapshot", () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment).toMatchSnapshot();
  });

it("creates a box, and deletes it", function() {
    const {container } = render( <BoxList />);
    // render (<Box />);
    // const { container } = render(<NewBoxForm />);
    const button = container.querySelector("button");
    let color = screen.getByPlaceholderText('color');
    let width = screen.getByPlaceholderText('width');
    let height = screen.getByPlaceholderText('height');

    height.nodeValue="100px";
    width.nodeValue="100px";
    color.nodeValue="red";

    fireEvent.click(button);

    const newBox = container.querySelector("div.Box");
    expect(newBox).toBeInTheDocument()
    const dltButton = container.querySelector("span.DeleteButton");

    fireEvent.click(dltButton);

    expect(newBox).not.toBeInTheDocument();

})

