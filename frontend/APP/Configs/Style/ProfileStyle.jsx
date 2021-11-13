import { StyleSheet } from "react-native";
import { Platform } from "react-native";

import Colors from "../Colors/Colors";

const ProfileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.profile,
        padding: 80,
        paddingTop: 30,
        borderRadius: 20,
        shadowColor: Colors.danger,
        shadowOffset: {
            width: 0,
            height: 5,
            padding: 14,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        elevation: 5,

        ...Platform.select({
            android: {
                top: 20
            },

            default: {
                top: 50
            },
        }),
    },
    Font: {
        fontsize: 50,
        fontWeight: "bold",
        color: Colors.black,
        top: 50,
    },
    FontSpace: {
        paddingHorizontal: 30,

    },
    IconSpace: {
        top: 50,
    },
    Line: {
        height: 0.5,
        backgroundColor:
            Colors.grey,
        top: 15,
    }
})

export default ProfileStyle;