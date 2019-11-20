import React, {useState} from 'react';
import { Row, Col } from 'reactstrap';
import './style.css';

const TableNavigation = (props) => {
  const [tabs, setTabs] = useState([
    {name: 'Upcoming Campaigns', active: true},
    {name: 'Live Campaigns', active: false},
    {name: 'Past Campaigns', active: false}
  ]);
  const handleChangeTab = (item) => {
    const tabList = tabs.map((elm) => {
      elm.active = false;
      if (elm.name === item.name) {
        elm.active = !item.active;
      }
      return elm;
    });
    props.loadData(item.name);
    setTabs(tabList);
  }
  return (
    <Row className='table-navigation'>
      {
        tabs.map((tab, key) => {
          return (
            <Col key={key} xs="12" lg='3'>
              <div data-testid='tab-navigation' className={tab.active ? 'active' : ''} onClick={() => handleChangeTab(tab)}>{tab.name}</div>
            </Col>
          );
        })
      }
    </Row>
  );
}

export default TableNavigation;