import { View, Alert } from 'react-native';
import { useState } from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function AddTaskScreen({ route, navigation }) {
  const [title, setTitle] = useState('');
  const { addTask } = route.params;

  function handleSave() {
    if (!title) {
      Alert.alert('Erro', 'O título é obrigatório!');
      return;
    }

    addTask({ title });
    navigation.goBack();
  }

  return (
    <View style={{ padding: 20 }}>
      <CustomInput
        placeholder="Digite a tarefa"
        value={title}
        onChangeText={setTitle}
      />

      <CustomButton title="Salvar" onPress={handleSave} />
    </View>
  );
}