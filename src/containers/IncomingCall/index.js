import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Modal from 'components/Modal';
import CallButton from 'components/CallButton';
import styles from 'styles/Styles';
import COLOR from 'styles/Color';
import { answerCall, answerVideoCall, declineCall } from './actions';

// TODO: use own
import CallManager from '../../manager/CallManager';

class IncomingCall extends React.Component {
    constructor(props) {
        super(props);

        const { callId } = props.navigation.state.params;
        this.call = CallManager.getInstance().getCallById(callId);
    }

    render() {
        return (
            <SafeAreaView style={[styles.safearea, styles.aligncenter]}>
                <Text style={styles.incoming_call}>
                    Incoming call from:
                </Text>
                <Text style={styles.incoming_call}>
                    Somebody
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        height: 90,
                    }}
                >
                    <CallButton
                        icon_name="call"
                        color={COLOR.ACCENT}
                        buttonPressed={() => this.props.answerCall(this.call)}
                    />
                    <CallButton
                        icon_name="videocam"
                        color={COLOR.ACCENT}
                        buttonPressed={() => this.props.answerVideoCall(this.call)}
                    />
                    <CallButton
                        icon_name="call-end"
                        color={COLOR.RED}
                        buttonPressed={() => this.props.declineCall(this.call)}
                    />
                </View>
                <Modal />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
    answerCall: (call) => dispatch(answerCall(call)),
    answerVideoCall: (call) => dispatch(answerVideoCall(call)),
    declineCall: (call) => dispatch(declineCall(call)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IncomingCall);