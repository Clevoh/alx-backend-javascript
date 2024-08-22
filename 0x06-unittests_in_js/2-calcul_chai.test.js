const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUM', 3.0, 3.0)).to.equal(6);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUM', 2.3, 1.9)).to.equal(4);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('SUM', -3.0, -3.0)).to.equal(-6);
    });

    it('equal negative numbers (alternate)', () => {
      expect(calculateNumber('SUM', -2.3, -1.9)).to.equal(-4);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUM', -3.0, 3.0)).to.equal(0);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUM', 3.0, -3.0)).to.equal(0);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 3.0, 3.0)).to.equal(0);
    });

    it('positive number greater than negative number', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 2.3)).to.equal(3);
    });

    it('negative number greater than positive number', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 5.5)).to.equal(-3);
    });

    it('negative number less than negative number', () => {
      expect(calculateNumber('SUBTRACT', -5.5, -2.3)).to.equal(-3);
    });

    it('positive number less than negative number', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -5.5)).to.equal(3);
    });

    it('0 and positive number', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 5.5)).to.equal(-6);
    });

    it('positive number and 0', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 0.0)).to.equal(6);
    });

    it('negative number and 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, -5.5)).to.equal(6);
    });

    it('0 and negative number', () => {
      expect(calculateNumber('SUBTRACT', -5.5, 0.0)).to.equal(-6);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 3.0, 3.0)).to.equal(1);
    });

    it('positive number divided by negative number', () => {
      expect(calculateNumber('DIVIDE', 5.5, -2.3)).to.equal(-2);
    });

    it('negative number divided by positive number', () => {
      expect(calculateNumber('DIVIDE', -2.3, 5.5)).to.equal(0);
    });

    it('negative number divided by negative number', () => {
      expect(calculateNumber('DIVIDE', -5.5, -2.3)).to.equal(2);
    });

    it('positive number divided by 0', () => {
      expect(calculateNumber('DIVIDE', 5.5, 0)).to.equal('Error');
    });

    it('0 divided by positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.5)).to.equal(0);
    });

    it('0 divided by 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});

