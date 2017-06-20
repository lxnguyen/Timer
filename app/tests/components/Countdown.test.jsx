const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  }); 
  
  describe('handleSetCountdown', () => {
  	it('set state to started and count down', (done) => {
	    const countdown = TestUtils.renderIntoDocument(<Countdown/>);
	    countdown.handleSetCountdown(10);
	    
	    expect(countdown.state.count).toBe(10);
	    expect(countdown.state.coundownStatus).toBe('started');

	    setTimeout(() => {
		    expect(countdown.state.count).toBe(9);
		    done();
	    }, 1001);

  	});
  	it('set state to started and count down is not negative', (done) => {
	    const countdown = TestUtils.renderIntoDocument(<Countdown/>);
	    countdown.handleSetCountdown(1);

	    setTimeout(() => {
		    expect(countdown.state.count).toBe(0);
		    done();
	    }, 3001);

  	});
  });
});
