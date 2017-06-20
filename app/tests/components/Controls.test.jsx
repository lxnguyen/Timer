const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });
  
  describe('render', () => {
  	it('should render pause when starting', () => {
  		const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
		const $el = $(ReactDOM.findDOMNode(controls));
		//Now we can search for the text
		const pauseButton = $el.find('button:contains(Pause)');
  		
  		expect(pauseButton.length).toBe(1);
  		
  	});
  	it('should render start after pause', () => {
  		const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
		const $el = $(ReactDOM.findDOMNode(controls));
		//Now we can search for the text
		const startButton = $el.find('button:contains(Start)');
  		
  		expect(startButton.length).toBe(1);
  		
  	});
  });  
});
