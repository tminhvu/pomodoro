import { Icon } from '@rneui/base';
import React, { useState } from 'react';
import { useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Buttons from '../components/main/Buttons';
import CountDown from '../components/main/CountDown';
import { setIsLandscape } from '../redux/slices/screenSlice';

export default function Main() {
    const innerRef = useRef()
    const outerRef = useRef()
    const [isOn, setIsOn] = useState(false)
    const dispatch = useDispatch()

    const isMuteRef = useRef()
    const [isMute, setIsMute] = useState(false)
    isMuteRef.current = isMute

    return (
        <View style={styles.container}
            onLayout={(e) => {
                let isLandscape = e.nativeEvent.layout.width > e.nativeEvent.layout.height
                dispatch(setIsLandscape(isLandscape))
            }}
        >
            <TouchableOpacity style={styles.volumeToggle}
                onPress={() => {
                    setIsMute(prev => !prev)
                }}
            >
                {isMute
                    ? <Icon name='volume-variant-off' type='material-community' color='darkgray' />
                    : <Icon name='volume-source' type='material-community' color='darkgray' />
                }
            </TouchableOpacity>

            <CountDown innerRef={innerRef} outerRef={outerRef} isOn={isOn} isMuteRef={isMuteRef} />
            <Buttons innerRef={innerRef} outerRef={outerRef} isOn={isOn} setIsOn={setIsOn} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        position: 'relative'
    },
    volumeToggle: {
        position: 'absolute',
        top: 10,
        right: 20
    }
});
