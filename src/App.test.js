import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('App', () => {
  const wrapper = mount(<App />);

  const productNameInput = wrapper.find('.product-name-input');
  const productPriceInput = wrapper.find('.product-price-input');
  const form = wrapper.find('.product-add-form');
  const discontInput = wrapper.find('.discount-input');
  const discontSetButton = wrapper.find('.set-discount');

  productNameInput.simulate('change', { target: { value: 'Телефон' } });
  productPriceInput.simulate('change', { target: { value: '100' } });
  form.simulate('submit');
  expect(wrapper.containsMatchingElement(<td>Телефон</td>)).toEqual(true);
  expect(wrapper.containsMatchingElement(<td>{100}</td>)).toEqual(true);

  productNameInput.simulate('change', { target: { value: 'Магнитофон' } });
  productPriceInput.simulate('change', { target: { value: '200' } });
  form.simulate('submit');
  expect(wrapper.containsMatchingElement(<td>Магнитофон</td>)).toEqual(true);
  expect(wrapper.containsMatchingElement(<td>{200}</td>)).toEqual(true);

  discontInput.simulate('change', { target: { value: '17' } });
  discontSetButton.simulate('click');
  expect(wrapper.containsMatchingElement(<td>{95}</td>)).toEqual(true);
  expect(wrapper.containsMatchingElement(<td>{188}</td>)).toEqual(true);

  productNameInput.simulate('change', { target: { value: 'Миелофон' } });
  productPriceInput.simulate('change', { target: { value: '500' } });
  form.simulate('submit');
  expect(wrapper.containsMatchingElement(<td>Миелофон</td>)).toEqual(true);
  expect(wrapper.containsMatchingElement(<td>{500}</td>)).toEqual(true);
  expect(wrapper.containsMatchingElement(<td>{98}</td>)).toEqual(true);
  expect(wrapper.containsMatchingElement(<td>{196}</td>)).toEqual(true);
  expect(wrapper.containsMatchingElement(<td>{489}</td>)).toEqual(true);
});
