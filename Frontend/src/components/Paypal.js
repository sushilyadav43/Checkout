import React from 'react';
import { Card } from 'react-bootstrap';


export const Paypal = () => {
  return (
    <>

      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p>After payment via PayPal's secure checkout, we will send
              you a link to download your files.</p>
            <div>
              <div className='row'>
                <div className='col-md-3 c-paypal'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/pyicon-1.svg" />
                    <Card.Body><button className='button '><Card.Link href="https://www.visa.co.in/pay-with-visa/visa-checkout.html" target="_blank">Visa</Card.Link></button></Card.Body>
                    
                  </Card>
                </div>
                <div className='col-md-3'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/pyicon-2.svg" />
                    <Card.Body><button className='button '><Card.Link href="https://www.visa.co.in/pay-with-visa/visa-checkout.html" target="_blank">MasterCard</Card.Link></button></Card.Body>
                  </Card>
                </div>
                <div className='col-md-3'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/pyicon-3.svg" />
                    <Card.Body><button className='button '><Card.Link href="https://www.visa.co.in/pay-with-visa/visa-checkout.html" target="_blank">American Express</Card.Link></button></Card.Body>
                  </Card>
                </div>
                <div className='col-md-3'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/pyicon-4.svg" />
                    <Card.Body><button className='button '><Card.Link href="https://www.visa.co.in/pay-with-visa/visa-checkout.html" target="_blank">Discover</Card.Link></button></Card.Body>
                  </Card>
                </div>
              </div>

              {/* <img src="/images/pyicon-1.svg"></img>
                 <img src="/images/pyicon-2.svg"></img>
                 <img src="/images/pyicon-3.svg"></img>
                 <img src="/images/pyicon-4.svg"></img>
                 <img src="/images/pyicon-5.svg"></img> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="tab-pane fade" id="payapl-method-tab" role="tabpanel"
                                    aria-labelledby="payapl-tab">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p className="t-body">After payment via PayPal's secure checkout, we will send
                                                you a link to download your files.</p>
                                            <div className="media h-mt2">
                                                <div className="media__item -align-center">
                                                    <p className="t2-body h-m0">PayPal accepts</p>
                                                </div>
                                                <div className="media__body">
                                                    <ul id="paypal-gateway" className="financial-institutes">
                                                        <li className="financial-institutes__logo">
                                                            <img alt="Visa" title="Visa"
                                                                src="images/membership/pyicon-1.svg" />
                                                        </li>
                                                        <li className="financial-institutes__logo">
                                                            <img alt="MasterCard" title="MasterCard"
                                                                src="images/membership/pyicon-2.svg" />
                                                        </li>
                                                        <li className="financial-institutes__logo">
                                                            <img alt="American Express" title="American Express"
                                                                src="images/membership/pyicon-3.svg" />
                                                        </li>
                                                        <li className="financial-institutes__logo">
                                                            <img alt="Discover" title="Discover"
                                                                src="images/membership/pyicon-4.svg" />
                                                        </li>
                                                        <li className="financial-institutes__logo">
                                                            <img alt="China UnionPay" title="China UnionPay"
                                                                src="images/membership/pyicon-5.svg" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
    </>
  )
}

export default Paypal;
