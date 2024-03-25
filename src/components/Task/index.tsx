import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Check, Trash } from "react-native-feather";

interface TaskProps {
    id: string,
    description: string,
    isDone: boolean,
    onToggleTaskCompletion: (id: string) => void
    onDeleteTask: (id: string) => void
}

export function Task({ id, description, isDone, onToggleTaskCompletion, onDeleteTask }: TaskProps) {

    return (
        <View style={styles.container}>
            {isDone
                ? (
                    <TouchableOpacity style={styles.checkbox} onPress={() => onToggleTaskCompletion(id)}>
                        <Check style={styles.icon} width={16} height={16}/>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.uncheckedCheckbox} onPress={() => onToggleTaskCompletion(id)}>
                    </TouchableOpacity>
                )
            }

            <Text style={styles.description}>{description}</Text>
            
            <TouchableOpacity onPress={() => onDeleteTask(id)}>
                <Trash style={styles.mutedIcon} strokeWidth={1} />
            </TouchableOpacity>
        </View>
    )
}