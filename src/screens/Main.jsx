import React, { useState } from 'react';
import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Buttons from '../components/main/Buttons';
import CountDown from '../components/main/CountDown';
import { setIsLandscape } from '../redux/slices/screenSlice';

export default function Main() {
    const innerRef = useRef()
    const outerRef = useRef()
    const [isOn, setIsOn] = useState(false)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}
            onLayout={(e) => {
                let isLandscape = e.nativeEvent.layout.width > e.nativeEvent.layout.height
                dispatch(setIsLandscape(isLandscape))
            }}
        >
            <CountDown innerRef={innerRef} outerRef={outerRef} isOn={isOn} />
            <Buttons innerRef={innerRef} outerRef={outerRef} isOn={isOn} setIsOn={setIsOn} />
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
