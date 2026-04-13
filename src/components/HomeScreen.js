import { View, Text, FlatList, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }
 

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>Nenhuma tarefa ainda</Text>}
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item.title}</Text>
        )}
      />

      <CustomButton
        title="Nova Tarefa"
        onPress={() => navigation.navigate('Nova Tarefa', { addTask })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
});