import React from 'react';
import { render } from 'react-native-testing-library';

import { xyz } from 'components';

describe('xyz', () => {
  test('Snaphot for required props', () => {
    const props = {
      value: 'testing string',

    }
    const tree = render(<xyz {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for style', () => {
    const props = {
      value: 'testing string',

      style: {},
    }
    const tree = render(<xyz {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for placeholder', () => {
    const props = {
      value: 'testing string',

      placeholder: 'testing string',
    }
    const tree = render(<xyz {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for onChange', () => {
    const props = {
      value: 'testing string',

      onChange: jest.fn(),
    }
    const tree = render(<xyz {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for los', () => {
    const props = {
      value: 'testing string',

      los: true,
    }
    const tree = render(<xyz {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for num', () => {
    const props = {
      value: 'testing string',

      num: 123,
    }
    const tree = render(<xyz {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Snaphot for a', () => {
    const props = {
      value: 'testing string',

      a: {},
    }
    const tree = render(<xyz {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});
