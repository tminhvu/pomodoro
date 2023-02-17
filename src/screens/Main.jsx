import React, { useState } from 'react';
import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Buttons from '../components/main/Buttons';
import CountDown from '../components/main/CountDown';

export default function Main() {
    const innerRef = useRef()
    const outerRef = useRef()
    const [isOn, setIsOn] = useState(false)

    return (
        <View style={styles.container}>
            <CountDown innerRef={innerRef} outerRef={outerRef} isOn={isOn}/>
            <Buttons innerRef={innerRef} outerRef={outerRef} isOn={isOn} setIsOn={setIsOn}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});
