import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';

import Firebase from '../../config/firebase/firebase';

function ListScreen({route, navigation}) {
  const isFocused = useIsFocused();

  const [allPosts, setAllPosts] = useState();

  // getDatafrom Database

  const GetData = async () => {
    const {category} = route.params;
    var data = [];

    await Firebase.database()
      .ref('/')
      .child(category)
      .on('child_added', async (snap) => {
        let allData = snap.val();
        await data.push(allData);
        setAllPosts(data);
      });
  };

  useEffect(() => {
    if (isFocused) {
      // The screen is focused
      // Call any action

      GetData();
      //setallProducts();
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {allPosts && allPosts ? (
          allPosts.map((val, i) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('PostDetail', {
                    title: val.title,
                    url: val.video,
                  })
                }
                activeOpacity={0.7}
                key={i}
                style={styles.list}>
                <Image source={{uri: val.image}} style={styles.image} />
                <Text style={styles.text} numberOfLines={2}>
                  {val.title}
                </Text>
                <Text style={styles.category}>{val.category}</Text>
              </TouchableOpacity>
            );
          })
        ) : (
          <View style={styles.loader}>
            <ActivityIndicator size={50} color="#033E9C" />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    justifyContent: 'space-between',
    elevation: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingBottom: 20,
    marginTop: 10,
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
    marginBottom: 20,
  },
  text: {
    color: '#033E9C',
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  category: {
    fontSize: 12,
    color: 'grey',
    marginLeft: 12,
  },
});

export default ListScreen;
