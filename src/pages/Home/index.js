import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCatalog from '../../components/ProductCatalog';
import {colors} from '../../utils/color';
import Gap from '../../components/Gap';
import {getDataProduct} from '../../helper/general';

const Home = ({navigation}) => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, [dataProduct]);

  const getProduct = async () => {
    const data = await getDataProduct();
    setDataProduct(data);
  };

  return (
    <View style={styles.container}>
      {dataProduct && dataProduct.length > 0 ? (
        <ScrollView>
          {dataProduct.map((value, i) => {
            return (
              <View key={value.sku_code}>
                <ProductCatalog
                  skuCode={value.sku_code}
                  skuName={value.sku_name}
                  amount={value.amount}
                  skuImage={value.sku_img}
                  onPressAdd={() => {
                    navigation.navigate('FormStock', {
                      product: value,
                      type: 'add',
                      form: 'stock',
                    });
                  }}
                  onPressDeduct={() => {
                    navigation.navigate('FormStock', {
                      product: value,
                      type: 'deduct',
                      form: 'stock',
                    });
                  }}
                />
                <Gap height={10} />
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <View style={styles.containerLoading}>
          <View style={styles.loading}>
            <Text>Loading...</Text>
            <ActivityIndicator size={'large'} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.BACKGROUND,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    display: 'flex',
    flexDirection: 'row',
  },
});
