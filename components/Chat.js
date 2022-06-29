import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Chat(props) {
  let { name, color } = props.route.params;

  // Set name as title chat
  useEffect(() => {
    props.navigation.setOptions({ title: name });
  });

  return (
    <View style={[{ backgroundColor: color }, { flex: 1 }]}>
      <Text style={styles.greeting}>Hello {name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  greeting: {
    color: '#fff',
  },
});
