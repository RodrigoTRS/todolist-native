import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        backgroundColor: "#0D0D0D",
        alignItems: "center",
        paddingTop: 70,
        paddingBottom: 70,
    },
    inputField: {
        flexDirection: "row",
        paddingLeft: 24,
        paddingRight: 24,
        gap: 6,
        marginTop: -32
    },
    input: {
        backgroundColor: "#262626",
        padding: 24,
        height: 64,
        borderRadius: 5,
        flex: 1,
        fontSize: 16,
        color: "white"
    },
    button: {
        height: 64,
        width: 64,
        backgroundColor: "#1E6F9F",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    buttonText: {
        color: "#fff"
    },
    infobar: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 24
    },
    createdText: {
        fontSize: 16,
        color: "#4EA8DE",
        fontWeight: "bold"
    },
    finishedText: {
        fontSize: 16,
        color: "#8284FA",
        fontWeight: "bold"
    },
    counterWrapper: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        justifyContent: "center"
    },
    counter: {
        backgroundColor: "#333333",
        borderRadius: 60,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 2,
        paddingBottom: 2,
    },
    counterText: {
        color: "#fff",
    }
})