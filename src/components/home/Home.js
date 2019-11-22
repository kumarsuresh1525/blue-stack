import React, {useState} from 'react';
import {Container, Row} from 'reactstrap';
import './Home.css';
import TableNavigation from '../common/table-navigation';
import TableList from '../table-list';
import data from '../../utils/data.json';

const Home = () => {
  const [activeTab, setTab] = useState('upcoming');
  const loadData = (type) => {
    if (type.includes('Live')) {
      setTab('live');
    } else if (type.includes('Past')) {
      setTab('past');
    } else {
      setTab('upcoming');
    }
  }
  return (
    <Container>
      <Row>
        <div className='title'>Manage Campaigns</div>
      </Row>
      <TableNavigation loadData={loadData}/>
      <TableList list={data.data} activeTab={activeTab}/>
    </Container>
  )
}

export default Home;