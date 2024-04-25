import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'expo-image';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:b3psimnw5xxta2n4h5qzxu55/bafkreietuymak7njxkkr35ecjwlkhk3risz3zmfmvwak5hlji7agvdhcwm@jpeg"
        enableLiveTextInteraction
        style={{aspectRatio: 1, height: 600, width: '100%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
