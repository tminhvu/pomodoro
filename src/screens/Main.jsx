import { Icon } from '@rneui/base';
import React, { useState } from 'react';
import { useRef } from 'react';
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Buttons from '../components/main/Buttons';
import CountDown from '../components/main/CountDown';

export default function Main() {
    const innerRef = useRef()
    const outerRef = useRef()
    const [isOn, setIsOn] = useState(false)

    const isMuteRef = useRef()
    const [isMute, setIsMute] = useState(false)
    isMuteRef.current = isMute

    const [styles, setStyles] = useState(stylesDefault)
    const { height, width} = useWindowDimensions()

    return (
        <View style={styles.container}
            onLayout={() => {
                let isLandscape = width > height
                if (isLandscape)
                    setStyles(stylesLandscape)
                else
                    setStyles(stylesDefault)
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

const stylesDefault = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        position: 'relative',
    },
    volumeToggle: {
        position: 'absolute',
        top: 10,
        right: 20
    }
});

const stylesLandscape = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        position: 'relative'
    },
    volumeToggle: {
        position: 'absolute',
        top: 20,
        left: 10
    }
})
