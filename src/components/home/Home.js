import React, {useState} from 'react';
import {Container, Row} from 'reactstrap';
import './Home.css';
import TableNavigation from '../common/table-navigation';
import TableList from '../table-list';
import data from '../../utils/data.json';
import live from '../../utils/live.json';
import past from '../../utils/past.json';

const Home = () => {
  const [list, setList] = useState(data);
  const loadData = (type) => {
    if (type.includes('Live')) {
      setList(live);
    } else if (type.includes('Past')) {
      setList(past);
    } else {
      setList(data);
    }
  }
  return (
    <Container>
      <Row>
        <div className='title'>Manage Campaigns</div>
      </Row>
      <TableNavigation loadData={loadData}/>
      {list.data && <TableList list={list.data}/>}
    </Container>
  )
}

export default Home;