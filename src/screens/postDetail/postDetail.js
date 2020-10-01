import React, {useEffect, useState} from 'react';

import {View, Text, StatusBar, StyleSheet} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useIsFocused} from '@react-navigation/native';

function PostDetailScreen({route, navigation}) {
  const isFocused = useIsFocused();
  const [id, setVideoId] = useState();

  const getStateData = () => {
    const {url} = route.params;
    const id = url.slice(-11);
    setVideoId(id);
  };

  useEffect(() => {
    if (isFocused) {
      // The screen is focused
      // Call any action

      getStateData();
      //setallProducts();
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <YoutubePlayer height={300} play={true} videoId={id && id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
    color: '#033E9C',
    fontWeight: 'bold',
  },
  backgroundVideo: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
  },
});

export default PostDetailScreen;
