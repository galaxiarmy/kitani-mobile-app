import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/color';
import Stock from '../../components/Stock';
import {addProduct, deductProduct} from '../../helper/general';

const FormStock = ({route, navigation}) => {
  const {product, type} = route.params;

  const [form, setForm] = useState(0);
  const [result, setResult] = useState([]);
  const [amount, setAmount] = useState('');

  const submitProduct = async () => {
    if (type === 'add') {
      // eslint-disable-next-line radix
      if (parseInt(amount) > 0) {
        // eslint-disable-next-line radix
        const data = await addProduct(parseInt(amount), product.sku_code);

        setResult(data);
        setForm(1);
      } else {
        Alert.alert(
          'Add Stock',
          'Jumlah harus lebih dari 0 dan tidak boleh kosong!',
          [{text: 'OK'}],
        );
      }
    } else {
      // eslint-disable-next-line radix
      if (parseInt(amount) > 0 && amount <= product.amount) {
        // eslint-disable-next-line radix
        const data = await deductProduct(parseInt(amount), product.sku_code);
        setResult(data);
        setForm(1);
      } else {
        Alert.alert(
          'Deduct Stock',
          `Jumlah harus lebih dari 0 dan harus kurang dari stock/sama. (Stock : ${product.amount})`,
          [{text: 'OK'}],
        );
      }
    }
  };

  const finishProduct = () => {
    navigation.navigate('Home');
    setForm(0);
  };

  return (
    <View style={styles.container}>
      {form === 0 ? (
        <Stock
          onPress={submitProduct}
          value={product}
          type={type}
          form={form}
          valueAmount={amount}
          onChangeAmount={e => setAmount(e)}
        />
      ) : (
        <Stock
          onPress={finishProduct}
          value={product}
          type={type}
          form={form}
          result={result}
        />
      )}
    </View>
  );
};

export default FormStock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.BACKGROUND,
  },
});
