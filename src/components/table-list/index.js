import React, {useState, Fragment, useEffect} from 'react';
import './style.css';
import priceSrc from '../../assets/images/price.png';
import fileSrc from '../../assets/images/file.png';
import calendarSrc from '../../assets/images/calendar.png';
import reportSrc from '../../assets/images/statistics-report.png';
import img1 from '../../assets/images/img2.png';
import img2 from '../../assets/images/img3.png';
import img3 from '../../assets/images/img4.png';
import img4 from '../../assets/images/img5.png';
import img5 from '../../assets/images/img1.png';
import { formatedDate, diffDate, sortList } from '../../utils';
import PriceModal from './price-modal';

const TableList = (props) => {
  const [list, setList] = useState(sortList(props.list, props.activeTab));
  const [modal, setModal] = useState(false);
  const [mList, setData] = useState(props.list[0]);
  const img = [img1, img2, img3, img4, img5];
  
  useEffect(() => {
    if (list !== props.list) {
      setList(sortList(props.list, props.activeTab));
    }
  }, [props.activeTab]);
  const handleSchedule = (event, item) => {
    list.map((elm) => {
      if (elm.id === item.id) {
        elm.createdOn = event.target.value;
      }
      return elm;
    });
    setList(sortList(list, props.activeTab));
  }

  const toggle = () => setModal(!modal);
  const viewPrice = (item) => {
    setData(item);
    toggle();
  }
  const eventIn = props.activeTab === 'past' ? 'ago' : 'ahead';
  return (
    <Fragment>
      <div className='table-list'>
        <div className='row list-header'>
          <div className='col-xs-12 col-md-4 col-lg-2'>
            Date
          </div>
          <div className='col-xs-12 col-md-4 col-lg-3'>
            Campaign
          </div>
          <div className='col-xs-12 col-md-4 col-lg-2'>
            View
          </div>
          <div className='col-xs-12 col-md-4 col-lg-5'>
            Actions
          </div>
        </div>
          {
            list.length > 0 && list.map((item, index) => {
              item.image_url = img[index];
              const days = props.activeTab === 'live' ? 'live' : `${diffDate(item.createdOn)} days ${eventIn}`;
              return (
              <div className='row' key={item.id}>
                  <div className='col-xs-12 col-md-4 col-lg-2 sub-list'>
                    <div className='date'>{formatedDate(item.createdOn)}</div>
                    <div className='days-ago'>{days}</div>
                  </div>
                  <div className='col-xs-12 col-md-4 col-lg-3 sub-list'>
                    <div className='campign-info'>
                      <img alt='campign' className='campign' src={item.image_url}/>
                      <div className='details'>
                        <div>{item.name}</div>
                        <div className='region'>{item.region}</div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-md-4 col-lg-2 sub-list'>
                    <img alt='price' className='price' src={priceSrc} onClick={() => viewPrice(item)} /> View Pricing
                  </div>
                  <div className='col-xs-12 col-md-4 col-lg-5 sub-list'>
                    <div className='actions'>
                      <span><img alt='csv' className='price' src={fileSrc} /> CSV</span>
                      <span><img alt='report' className='price' src={reportSrc} /> Report</span>
                      <span>
                        <input type='date' id="date-picker" onChange={(e) => handleSchedule(e, item)}/>
                        <img alt='calendar' className='price' htmlFor="date-picker" src={calendarSrc}/> Schedule Again</span>
                    </div>
                  </div>
              </div>
              );
            })
          }
      </div>
      <PriceModal
        toggle={toggle}
        modal={modal}
        data={mList}
        className='price-modal'
      />
    </Fragment>
  );
}

export default TableList;