import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/color';
import Gap from '../Gap';

const ProductCatalog = ({
  skuCode,
  skuName,
  skuImage,
  amount,
  onPressAdd,
  onPressDeduct,
}) => {
  const urlImg = skuImage.replace('https', 'http');

  return (
    <View style={styles.container}>
      <View style={styles.productInformation}>
        <Image style={styles.imageFruit} source={{uri: urlImg}} />
        <View style={styles.fruitInformation}>
          <Text style={styles.titleSKU}>{skuCode}</Text>
          <Gap height={6} />
          <Text style={styles.titleFruit}>{skuName}</Text>
          <Gap height={6} />
          <Text style={styles.titleQty}>Qty: {amount}</Text>
        </View>
      </View>
      <Gap height={8} />
      <View style={styles.bodyButton}>
        <TouchableOpacity onPress={onPressAdd} style={styles.buttonAdd}>
          <Text style={styles.titleButton}>Add</Text>
        </TouchableOpacity>
        {amount > 0 && (
          <TouchableOpacity onPress={onPressDeduct} style={styles.buttonDeduct}>
            <Text style={styles.titleButton}>Deduct</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProductCatalog;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.WHITE,
  },
  imageFruit: {
    width: 80,
    height: 80,
  },
  productInformation: {
    flexDirection: 'row',
  },
  bodyButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fruitInformation: {
    marginLeft: 18,
  },
  buttonAdd: {
    height: 40,
    backgroundColor: colors.BUTTON_ADD,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonDeduct: {
    height: 40,
    backgroundColor: colors.BUTTON_DEDUCT,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  titleButton: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.WHITE,
  },
  titleSKU: {
    fontSize: 14,
  },
  titleFruit: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: 17,
  },
  titleQty: {
    color: colors.BLACK,
    fontSize: 14,
  },
});
