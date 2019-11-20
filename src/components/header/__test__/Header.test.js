import React from 'react';
import {render} from '@testing-library/react';
import Header from '../Header';

describe("Home Page test", () => {
  test("should render Home component", () => {
    const {container} = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});