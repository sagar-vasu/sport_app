import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const images = [
  require('../../../assets/76124792-efb5-4b62-bc64-13f4f2946b79.jpg'), // Local image
  require('../../../assets/86ca1804-7879-4da3-9d5e-23b8748d801b.jpg'), // Local image
  require('../../../assets/IMG_6939.jpg'), // Local image
];

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <SliderBox
          dotColor="#0040A4"
          inactiveDotColor="#D00E42"
          sliderBoxHeight={235}
          resizeMode={'cover'}
          images={images && images}
          paginationBoxStyle={{
            alignItems: 'center',
            alignSelf: 'center',
            paddingVertical: 10,
          }}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>TRAX SPORTS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
    color: '#033E9C',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
