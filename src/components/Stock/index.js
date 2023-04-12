import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Button from '../Button';
import {colors} from '../../utils/color';
import Gap from '../Gap';

const Stock = ({
  onPress,
  value,
  type,
  form,
  result,
  valueAmount,
  onChangeAmount,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>
        {type === 'add' ? 'Add' : 'Deduct'} Stock
      </Text>
      <Gap height={10} />
      <Text style={styles.titleSKU}>{value.sku_code}</Text>
      <Gap height={10} />
      <Text style={styles.titleProduct}>{value.sku_name}</Text>
      <Gap height={30} />

      {form === 0 ? (
        <View>
          <Text style={styles.titleAmount}>Amount</Text>
          <TextInput
            value={valueAmount}
            onChangeText={onChangeAmount}
            keyboardType="number-pad"
            style={styles.containerInput}
          />
        </View>
      ) : (
        <Text style={styles.titleProduct}>{result.msg}</Text>
      )}
      <Gap height={30} />
      <Button
        form={form}
        result={result}
        type={type}
        onPress={onPress}
        title={form === 0 ? 'Submit' : 'OK'}
      />
    </View>
  );
};

export default Stock;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    backgroundColor: colors.WHITE,
  },
  containerInput: {
    borderWidth: 1,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  titleSKU: {
    fontSize: 16,
  },
  titleProduct: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
});
