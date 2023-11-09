import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import YouTube from 'react-native-youtube';

type Video = {
  id: string;
  title: string;
};

const videos: Video[] = [
  {id: 'Dbc4uaWhKwg', title: 'Video 1'},
  {id: 'WKKQSATij0c', title: 'Video 2'},
  {id: 'Dbc4uaWhKwg', title: 'Video 1'},
];

const VideoList: React.FC = () => {
  const renderItem = ({item}: any) => (
    <View style={styles.videoContainer}>
      <YouTube
        videoId={item.id}
        play={false}
        fullscreen={false}
        loop={false}
        apiKey="YOUR_YOUTUBE_API_KEY"
        style={styles.videoPlayer}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  videoContainer: {
    marginVertical: 10,
    width: '80%',
    aspectRatio: 16 / 9,
  },
  videoPlayer: {
    flex: 1,
  },
});

export default VideoList;
