# snap-it

This is a tool to create a snapshot for your components.


## Usage:
Follow instalation guide and then:
```bash
yarn snap-it components/Search.tsx
```

Or you can use it directly without installing:
```bash
npx @patys/snap-it g components/Search.tsx
```

## Installation:

```bash
yarn add --dev @patys/snap-it
```

Add to your package.json

```bash
{
  "scripts": {
    ...
    "snap-it": "yarn snap-it g "
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
  return (
    <View />
  );
}
```

Effect:
```javascript
import React from 'react';
import { render } from 'react-native-testing-library';

import { Search } from '../example/Search.tsx';

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

      numberTest: 123,
    }
    const tree = render(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Snaphot for booleanTest', () => {
    const props = {
      requiredTest: 'testing string',

      booleanTest: true,
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

      anyTest: {},
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

});
```
