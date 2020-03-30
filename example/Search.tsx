import React from 'react';
import { View } from 'react-native';

interface Props {
  numberTest?: number;
  booleanTest?: boolean;
  stringTest?: string;
  anyTest?: any;
  functionTest?: () => void;
  color?: string;
  backgroundColor?: string;
  bgColor?: string;

  requiredTest: string;
}

export default function Search({}: Props) {
  return (
    <View />
  );
}
