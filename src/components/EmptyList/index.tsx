import { View, Text } from 'react-native';
import { styles } from './styles';
import { Clipboard } from "react-native-feather";

export function EmptyList() {
    return (
        <View style={styles.container}>
            <Clipboard style={styles.icon} height={48} width={48} strokeWidth={1} />
            <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}