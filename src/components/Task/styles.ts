import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#262626",
        borderWidth: 1,
        borderColor: "#333333",
        flexDirection: "row",
        gap: 24,
        alignItems: "center",
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: "#fff",
        flex: 1,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: "#5E60CE",
        backgroundColor: "#5E60CE",
        alignItems: "center",
        justifyContent: "center"
    },
    uncheckedCheckbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: "#4EA8DE",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        color: "#fff"
    },
    mutedIcon: {
        color: "#808080"
    }

})