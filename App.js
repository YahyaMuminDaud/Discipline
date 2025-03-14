import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Task from './components/task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          <Task text={'Hello'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cbf3f8",

  },
  tasksWrapper: {
   paddingTop: 80,
   paddingHorizontal: 20, 
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
});
