import {
    SAVE_VOX_IMPLANT_TOKENS,
    SAVE_API_TOKEN,
    SAVE_USERNAME,
    SAVE_CONTACT_LIST,
    LOGOUT,
    MAKE_CALL,
    MAKE_VIDEO_CALL,
    FETCH_CONTACTS,
    HIDE_MODAL,
    SHOW_MODAL,
} from './constants';

export function saveVoxImplantTokens(tokens) {
    return {
        type: SAVE_VOX_IMPLANT_TOKENS,
        tokens,
    };
}

export function saveContactList(contactList) {
    return {
        type: SAVE_CONTACT_LIST,
        contactList,
    };
}

export function saveApiToken(apiToken) {
    return {
        type: SAVE_API_TOKEN,
        apiToken,
    };
}

export function saveUsername(username) {
    return {
        type: SAVE_USERNAME,
        username,
    };
}


export function logout() {
    return {
        type: LOGOUT,
    };
}

export function fetchContacts() {
    return {
        type: FETCH_CONTACTS,
    };
}

export function makeCall(contactUsername) {
    return {
        type: MAKE_CALL,
        contactUsername,
    };
}

export function makeVideoCall(contactUsername) {
    return {
        type: MAKE_VIDEO_CALL,
        contactUsername,
    };
}

export function showModal(text) {
    return {
        type: SHOW_MODAL,
        text,
    };
}

export function hideModal() {
    return {
        type: HIDE_MODAL,
    };
}