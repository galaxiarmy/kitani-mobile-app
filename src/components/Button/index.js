import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../utils/color';

const Button = ({type, title, onPress, form, result}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        form === 0
          ? type === 'add'
            ? styles.containerAdd
            : styles.container
          : result.code === 200
          ? styles.containerAdd
          : styles.container
      }>
      <Text style={styles.titleButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  containerAdd: {
    height: 40,
    backgroundColor: colors.BUTTON_ADD,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  container: {
    height: 40,
    backgroundColor: colors.BUTTON_DEDUCT,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  titleButton: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.WHITE,
  },
});
