import React from 'react';
import {render} from '@testing-library/react';
import Home from '../Home';

describe("Home Page test", () => {
  test("should render Home component", () => {
    const {container} = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});