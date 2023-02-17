import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setIsLandscape } from '../redux/slices/screenSlice';

export default function About() {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}
            onLayout={(e) => {
                let isLandscape = e.nativeEvent.layout.width > e.nativeEvent.layout.height
                dispatch(setIsLandscape(isLandscape))
            }}
        >
            <Text>fuck</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
});
