import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { useState } from "react"
import { Header } from '../../components/Header/index';
import { EmptyList } from '../../components/EmptyList/index';
import { Task } from '../../components/Task/index';
import uuid from 'react-native-uuid';


export interface Task {
    id: string,
    description: string,
    isDone: boolean
}

export function Todo() {

    const [taskInput, setTaskInput] = useState<string>("")
    const [tasks, setTasks] = useState<Task[]>([])

    function handleCreateTodo () {
        const newTodo = {
            id: uuid.v4(),
            description: taskInput,
            isDone: false
        }
        setTasks(state => [...state, newTodo])
    }

    function handleToggleTaskCompletion(id: string) {
        const nextState = tasks.map((task) => {
            if (task.id === id) {
                if (!task.isDone) {
                    return {
                        ...task,
                        isDone: true,
                    }
                } else {
                    return {
                        ...task,
                        isDone: false,
                    }
                }
            } else {
                return task
            }
        })
        setTasks(nextState)
    }

    function handleDeleteTask(id: string) {
        const nextState = tasks.filter((task) => task.id !== id)
        setTasks(nextState)
    }

    return (
        <View style={styles.container}>
           <Header
                inputValue={taskInput}
                setInputValue={setTaskInput}
                createTodo={handleCreateTodo}
                tasks={tasks}
           />
            <FlatList
                style={styles.taskList}
                data={tasks}
                keyExtractor={item => item.id}
                showVerticalScrollIndicator={false}
                renderItem={({item}) => {
                return (
                    <Task
                        id={item.id}
                        description={item.description}
                        isDone={item.isDone}
                        onToggleTaskCompletion={handleToggleTaskCompletion}
                        onDeleteTask={handleDeleteTask}
                    />
                    )
                }}
                ListEmptyComponent={ () => <EmptyList /> }
            />
        </View>
    )
}