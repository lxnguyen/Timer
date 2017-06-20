const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  }); 
  
  it('should call onSetCountdown if valid seconds entered', () => {
  	const spy = expect.createSpy();
  	const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
  	const $el = $(ReactDOM.findDOMNode(countdownForm));
  	
  	countdownForm.refs.time.value = '109';
  	TestUtils.Simulate.submit($el.find('form')[0]);
  	
  	expect(spy).toHaveBeenCalled(109);
  }); 
  
});
