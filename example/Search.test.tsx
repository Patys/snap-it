import React from 'react';
import { render } from 'react-native-testing-library';

import { Search } from './Search.tsx';

describe('Search', () => {
  test('Snaphot for required props', () => {
    const props = {
      requiredTest: 'testing string',

    }
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for numberTest', () => {
    const props = {
      requiredTest: 'testing string',

      numberTest: '123',
    }
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for booleanTest', () => {
    const props = {
      requiredTest: 'testing string',

      booleanTest: 'true',
    }
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for stringTest', () => {
    const props = {
      requiredTest: 'testing string',

      stringTest: 'testing string',
    }
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for anyTest', () => {
    const props = {
      requiredTest: 'testing string',

      anyTest: '{}',
    }
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for functionTest', () => {
    const props = {
      requiredTest: 'testing string',

      functionTest: jest.fn(),
    }
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for color', () => {
    const props = {
      requiredTest: 'testing string',

      color: '#ffffff',
    }
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for backgroundColor', () => {
    const props = {
      requiredTest: 'testing string',

      backgroundColor: '#ffffff',
    }
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for bgColor', () => {
    const props = {
      requiredTest: 'testing string',

      bgColor: '#ffffff',
    }
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});
