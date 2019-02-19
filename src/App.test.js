import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('App', () => {
  const wrapper = mount(<App />);
  expect(wrapper.render()).toMatchSnapshot();

  const productNameInput = wrapper.find('.product-name-input');
  const productPriceInput = wrapper.find('.product-price-input');
  const form = wrapper.find('.product-add-form');
  const discontInput = wrapper.find('.discount-input');
  const discontSetButton = wrapper.find('discount-set-button');

  productNameInput.simulate('change', { target: { value: 'Телефон' } });
  productPriceInput.simulate('change', { target: { value: '100' } });
  form.simulate('submit');
  expect(wrapper.render()).toMatchSnapshot();

  productNameInput.simulate('change', { target: { value: 'Магнитофон' } });
  productPriceInput.simulate('change', { target: { value: '200' } });
  form.simulate('submit');
  expect(wrapper.render()).toMatchSnapshot();

  discontInput.simulate('change', { target: { value: '17' } });
  discontInput.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  productNameInput.simulate('change', { target: { value: 'Миелофон' } });
  productPriceInput.simulate('change', { target: { value: '500' } });
  form.simulate('submit');
  expect(wrapper.render()).toMatchSnapshot();
});
