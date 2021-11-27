import { StyleSheet } from "react-native";
import { Platform } from "react-native";

import Colors from "../Colors/Colors";

const AddressStyle = StyleSheet.create({
    container: {
        ...Platform.select({
            android: {

            },
            default: {
                flex: 1,
                backgroundColor: Colors.rgba,

                paddingTop: 20,
                paddingRight: 80,
                paddingLeft: 80,
                paddingBottom: 80,
                top: 30,
                bottom: 50,
                left: 200,
                right: 80,

                borderRadius: 15,
                borderWidth: 1,
                borderColor: Colors.grey,
                shadowColor: Colors.black,

                shadowOffset: {
                    width: 10,
                    height: 10,
                    padding: 20,
                },
                shadowOpacity: 0.8,
                shadowRadius: 40,
                elevation: 15,
                width: "70%",
                justifyContent: "center",
                alignItems: "left",
            },
        })
    },

    /* */

    //! --------------------------Address----------------------------

    address: {
        ...Platform.select({
            android: {

            },
            default: {
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "left",

                padding: 30,

                borderBottomWidth: 1,
                botderWidth: 1,
                borderBottomColor: Colors.black,

            }
        })
    },
    SingleAddress: {
        ...Platform.select({
            android: {

            },
            default: {
                flex: 1,
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "left",

                padding: 30,

                borderBottomWidth: 1,
                borderBottomColor: Colors.black,
            }
        })
    },
    addresscol: {
        top: 10,
        ...Platform.select({
            android: {

            },
            default: {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "left",

                paddingHorizontal: 30,
            }
        })
    },

    addresslabel: {
        ...Platform.select({
            android: {
            },
            default: {
                fontSize: 18,
                color: Colors.black,
                fontWeight: "bold",
            }
        }),
    },

    //! ------------------------Fonts/Text------------------------

    Font: {
        ...Platform.select({
            android: {

            },
            default: {
                fontSize: 20,
                fontWeight: "bold",
                color: Colors.white,
                // top: 50,
            },
        })
    },

    Text: {
        ...Platform.select({
            android: {

            },
            default: {
                color: Colors.black,
                fontSize: 18,
                fontWeight: "bold",

                borderWidth: 1.5,
                borderRadius: 5,
                borderColor: Colors.grey,

                paddingVertical: 10,
                marginVertical: 5,
                paddingHorizontal: 15,
                // marginHorizontal: 10,
                // top: 50,

            }
        })
    },
    state: {
        ...Platform.select({
            android: {

            },
            default: {
                paddingHorizontal: 60,
                paddingVertical: 5,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: Colors.black,
                /* marginLeft: 10,
                marginRight: 10, */

            }
        })
    },

    Line: {
        top: 10,
        ...Platform.select({
            android: {
            },
            default: {
                backgroundColor: Colors.grey,
                height: 0.5,
                width: "50%",
            }
        })
    },


})

export default AddressStyle;