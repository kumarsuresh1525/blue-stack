import React from 'react';
import {render} from '@testing-library/react';
import TableList from '../index';
import data from '../../../utils/data.json';

describe("Table navigation test", () => {
  const defaultProps = {
    list: data
  }
  test("should render table navigation component", () => {
    const {container} = render(<TableList {...defaultProps}/>);
    expect(container).toMatchSnapshot();
  });
});