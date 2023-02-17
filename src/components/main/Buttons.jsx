import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Buttons({ innerRef, outerRef, isOn, setIsOn }) {
    const isLandscape = useSelector((state) => state.screen.isLandscape)
    const navigation = useNavigation()

    return (
        <View style={isLandscape ? styles.landscapeButtonSection : styles.buttonsSection}>
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    innerRef.current.reAnimate()
                    outerRef.current.reAnimate()
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
                        innerRef.current.pause()
                        outerRef.current.pause()
                        setIsOn(false)
                    } else {
                        innerRef.current.play()
                        outerRef.current.play()
                        setIsOn(true)
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
                        innerRef.current.pause()
                        outerRef.current.pause()
                        setIsOn(false)
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

const styles = StyleSheet.create({
    buttonsSection: {
        position: 'absolute',
        bottom: 100,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    landscapeButtonSection: {
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
});
