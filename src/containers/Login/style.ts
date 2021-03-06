import { StyleSheet } from 'react-native';

import COLOR from 'src/styles/Color';

export default StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    logo: {
        marginBottom: 50,
    },
    loginForm: {
        paddingHorizontal: 20,
        alignItems: 'stretch',
    },
    loginButton: {
        color: COLOR.BUTTON,
        fontSize: 16,
        alignSelf: 'center',
        paddingTop: 20,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    formInput: {
        padding: 5,
        marginBottom: 10,
        color: COLOR.ACCENT,
        height: 40,
        borderColor: COLOR.ACCENT,
        borderWidth: 1,
        borderRadius: 4,
    },
    formInputError: {
        marginTop: -5,
        marginBottom: 15,
        color: COLOR.RED,
        textAlign: 'right',
    },
    useragent: {
        flex: 1,
        flexDirection: 'column',
    },
});
