import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import './style.css';

const PriceModal = (props) => {
  const {
    className,
    modal,
    toggle,
    data
  } = props;
  const price = [
    {title: '1 Week - 1 Month', price: '$ 100.00'},
    {title: '6 Months', price: '$ 500.00'},
    {title: '1 Year', price: '$ 900.00'},
  ];
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <div className='campign-info'>
            <img alt='name' src={data.image_url} />
            <div className='details'>
              <div>{data.name}</div>
              <div className='region'>{data.region}</div>
            </div>
          </div>
          <div className='pricing-details'>
            <div>Pricing</div>
            {
              price.map((elm, index) => {
                return (
                    <div className='sub-details' key={index}>
                      <span>{elm.title}</span>
                      <span>{elm.price}</span>
                    </div>
                );
              })
            }
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PriceModal;