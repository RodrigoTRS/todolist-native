import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Logo from "../../assets/logo.png"
import { PlusCircle } from "react-native-feather";
import { Task } from '../../screens/Todo/index';

interface HeaderProps {
    inputValue: string
    tasks: Task[]
    setInputValue: () => void
    createTodo: () => void
}

export function Header({ inputValue, setInputValue, createTodo, tasks }: HeaderProps) {

    const createdTasks = tasks.length
    const completedTasks = tasks.filter((task) => task.isDone === true).length

    return (
        <>
            <View style={styles.header}>
                <Image source={Logo} />
            </View>
            <View style={styles.inputField}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setInputValue}
                    value={inputValue}
                />
                <TouchableOpacity style={styles.button} onPress={createTodo}>
                    <PlusCircle style={styles.buttonText}/>
                </TouchableOpacity>
            </View>
            <View style={styles.infobar}>
                <View style={styles.counterWrapper}>
                    <Text style={styles.createdText}>Criadas</Text>
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>{createdTasks}</Text>
                    </View>
                </View>
                <View style={styles.counterWrapper}>
                    <Text style={styles.finishedText}>Concluídas</Text>
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>{completedTasks}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}