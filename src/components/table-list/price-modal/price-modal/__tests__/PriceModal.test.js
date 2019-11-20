import React from 'react';
import {render} from '@testing-library/react';
import PriceModal from '../../index';

describe("Price modal test", () => {
  const data = {
    name: 'name',
    image_url: 'image_url',
    createdOn: 12213123123
  }
  const defaultProps = {
    modal: true,
    data,
    toggle: jest.fn(),
    region: 'region',
    className: 'className'
  };
  test("should render price modal", () => {
    const {container, debug} = render(<PriceModal {...defaultProps}/>);
    expect(container).toMatchSnapshot();
  });
});