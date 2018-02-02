import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('empty', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input').simulate('change', {
        target: { value: ''}
    })
    const renderedResult = wrapper.find('#result').text();
    expect(renderedResult).toBe('');
});

it('partitions', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input').simulate('change', {
        target: { value: '4+'}
    })
    const renderedResult = wrapper.find('#result').text();
    expect(renderedResult).toBe('');
});

it('addition', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input').simulate('change', {
        target: { value: '5+5'}
    })
    const renderedResult = parseInt(wrapper.find('#result').text());
    expect(renderedResult).toBe(10);
});

it('substruct', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input').simulate('change', {
        target: { value: '9-5'}
    })
    const renderedResult = parseInt(wrapper.find('#result').text());
    expect(renderedResult).toBe(4);
});

it('multiplies', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input').simulate('change', {
        target: { value: '5*9'}
    })
    const renderedResult = parseInt(wrapper.find('#result').text());
    expect(renderedResult).toBe(45);
});
