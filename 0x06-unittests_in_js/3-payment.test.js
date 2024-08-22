const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const bigBrother = sinon.spy(Utils, 'calculateNumber');

    // Updated test values
    const totalAmount = 150;
    const totalShipping = 25;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    
    expect(bigBrother.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
    expect(bigBrother.callCount).to.be.equal(1);
    
    bigBrother.restore();
  });
});

