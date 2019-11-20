import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TableNavigation from '../index';

describe("Table navigation test", () => {
  const defaultProps = {
    loadData: jest.fn()
  }
  test("should render table navigation component", () => {
    const {container} = render(<TableNavigation {...defaultProps}/>);
    expect(container).toMatchSnapshot();
  });

  it('it should handle tab change', () => {
    const {getAllByTestId, container} = render(<TableNavigation {...defaultProps} />);
    const tab = getAllByTestId('tab-navigation');
    fireEvent.click(tab[0]);
    expect(container.querySelector('.active').textContent).toBe('Upcoming Campaigns');
    fireEvent.click(tab[1]);
    expect(container.querySelector('.active').textContent).toBe('Live Campaigns');
    fireEvent.click(tab[2]);
    expect(container.querySelector('.active').textContent).toBe('Past Campaigns');
  });
});