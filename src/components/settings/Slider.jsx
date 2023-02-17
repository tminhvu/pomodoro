import { Icon } from '@rneui/base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { formatProgress as formatValue } from '../../utils';

export default function Slider({ label, value, adjustValue, dispatch, color }) {

    return (
        <View style={styles.container}>
            <Text style={{...styles.label, color: color}}>
                {label.toUpperCase()}
            </Text>
            <View style={styles.sliderSection}>
                <TouchableOpacity style={styles.left}
                    onPress={()=>{
                        dispatch(adjustValue(-300))
                    }}
                >
                    <Icon
                        name='minuscircle'
                        type='antdesign'
                        color='darkgray'
                    />
                </TouchableOpacity>
                <View style={styles.center}>
                    <Text style={styles.centerText}>
                        {formatValue(value)}
                    </Text>
                </View>
                <TouchableOpacity style={styles.right}
                    onPress={()=>{
                        dispatch(adjustValue(300))
                    }}
                >
                    <Icon
                        name='pluscircle'
                        type='antdesign'
                        color='darkgray'
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '70%',
        marginBottom: 40
    },
    sliderSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900'
    },
    left: {
        justifyContent: 'center',
    },
    center: {
        justifyContent: 'center',
    },
    centerText: {
        color: 'darkgray',
        fontSize: 45
    },
    right: {
        justifyContent: 'center',
    }
});
