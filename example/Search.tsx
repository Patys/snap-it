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
