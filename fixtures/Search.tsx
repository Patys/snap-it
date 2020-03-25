import React from 'react';
import { TextInput, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'constants/index';

import styles from './Search.styles';

interface Props {
  style?: object;
  placeholder?: string;
  onChange?: (text: string) => void;
  value: string;
  los?: boolean;
  num?: number;
  a?: any;
}

export default function Search({
  style = {},
  placeholder = '',
  onChange = t => t,
  value = '',
}: Props) {
  const onChangeText = (text: string) => {
    onChange(text);
  };

  return (
    <View style={[styles.container, style]}>
      <Icon name="search" color={colors.toryBlue} />
      <TextInput
        testID="search.textinput"
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
