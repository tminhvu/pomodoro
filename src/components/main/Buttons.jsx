import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';

export default function Buttons({ innerRef, outerRef, isOn, setIsOn }) {
    const navigation = useNavigation()
    const [styles, setStyles] = useState(stylesDefault)
    const { height, width} = useWindowDimensions()

    return (
        <View style={styles.buttonsSection}
            onLayout={()=>{
                let isLandscape = width > height
                if (isLandscape)
                    setStyles(stylesLandscape)
                else
                    setStyles(stylesDefault)
            }}
        >
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    setIsOn(false)
                    innerRef.current.reAnimate()
                    outerRef.current.reAnimate()
                    setTimeout(() => {
                        innerRef.current.pause()
                        outerRef.current.pause()
                    }, 500)
                }}
            >
                <Icon
                    name='sync'
                    type='antdesign'
                    color='darkgray'
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    if (isOn) {
                        setIsOn(false)
                        innerRef.current.pause()
                        outerRef.current.pause()
                    } else {
                        setIsOn(true)
                        innerRef.current.play()
                        outerRef.current.play()
                    }
                }}
            >
                {isOn ?
                    <Icon
                        name='pausecircle'
                        type='antdesign'
                        color='darkgray'
                        size={50}
                    />
                    :
                    <Icon
                        name='play'
                        type='antdesign'
                        color='darkgray'
                        size={50}
                    />
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    if (isOn) {
                        setIsOn(false)
                        innerRef.current.pause()
                        outerRef.current.pause()
                    }
                    navigation.navigate('Settings')
                }} >
                <Icon
                    name='setting'
                    type='antdesign'
                    color='darkgray'
                />
            </TouchableOpacity>
        </View>
    );
}

const stylesDefault = StyleSheet.create({
    buttonsSection: {
        position: 'absolute',
        bottom: 100,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const stylesLandscape = StyleSheet.create({
    buttonsSection: {
        position: 'absolute',
        right: 100,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },

})
