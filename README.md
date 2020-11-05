# snap-it

[![npm version](https://badge.fury.io/js/%40patys%2Fsnap-it.svg)](https://badge.fury.io/js/%40patys%2Fsnap-it)

This is a tool to create a snapshot for your component. You can use it to simply generate boilerplate file with all cases. Keep in mind that you should verify and add your own test cases.

Works only with TypeScript for now.

## Usage:

Follow instalation guide and then:

```bash
yarn create-snapshot components/Search.tsx
```

Or you can use it directly without installing:

```bash
npx @patys/snap-it g components/Search.tsx
```

To save in the same directory use option: --direct=true

```bash
npx @patys/snap-it g components/Search.tsx --direct=true
```

Effect with direct:
components/Search.tsx
components/Search.test.tsx

Effect without direct:
components/Search.tsx
\_\_tests\_\_/Search.test.tsx

## Installation:

```bash
yarn add --dev @patys/snap-it
```

Add to your package.json

```bash
{
  "scripts": {
    ...
    "create-snapshot": "yarn snap-it g "
    ...
  }
}
```

## Example:

Your component:

```javascript
// example/Search.tsx
import React from 'react';
import { View } from 'react-native';

interface Props {
  numberTest?: number;
  booleanTest?: boolean;
  stringTest?: string;
  anyTest?: any;
  functionTest?: () => void;

  requiredTest: string;
}

export default function Search({}: Props) {
  return <View />;
}
```

Effect:

```javascript
import React from 'react';
import { render } from '@testing-library/react-native';

import { Search } from '../example/Search.tsx';

describe('Search', () => {
  test('Snaphot for required props', () => {
    const props = {
      requiredTest: 'testing string',
    };
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Snaphot for numberTest', () => {
    const props = {
      requiredTest: 'testing string',

      numberTest: 123,
    };
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Snaphot for booleanTest', () => {
    const props = {
      requiredTest: 'testing string',

      booleanTest: true,
    };
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Snaphot for stringTest', () => {
    const props = {
      requiredTest: 'testing string',

      stringTest: 'testing string',
    };
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Snaphot for anyTest', () => {
    const props = {
      requiredTest: 'testing string',

      anyTest: {},
    };
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Snaphot for functionTest', () => {
    const props = {
      requiredTest: 'testing string',

      functionTest: jest.fn(),
    };
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```
