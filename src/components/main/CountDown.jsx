import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import CircularProgress, { CircularProgressBase } from 'react-native-circular-progress-indicator';
import { useDispatch, useSelector } from 'react-redux';
import { switchMode } from '../../redux/slices/circularProgressSlice';
import { formatProgress } from '../../utils';

export default function CountDown({ innerRef, outerRef, isOn }) {
    const duration = useSelector((state) => state.circularProgress.duration)
    const color = useSelector((state) => state.circularProgress.activeStrokeColor)
    const subtitle = useSelector((state) => state.circularProgress.subtitle)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isOn) {
            innerRef.current.reAnimate()
            outerRef.current.reAnimate()

            innerRef.current.play()
            outerRef.current.play()

            setTimeout(() => {
                innerRef.current.pause()
                outerRef.current.pause()
            }, 500)
        }
    }, [duration])

    return (
        <View style={styles.container}>
            <CircularProgressBase
                ref={outerRef}
                onAnimationComplete={() => {
                    dispatch(switchMode())
                    outerRef.current.reAnimate()
                    innerRef.current.reAnimate()
                }}
                duration={duration * 1000}
                activeStrokeColor={color}
                value={0}
                radius={120}
                delay={500}
                activeStrokeWidth={15}
                inActiveStrokeWidth={15}
                startInPausedState={false}
                maxValue={100}
                initialValue={100}
            >
                <CircularProgress
                    ref={innerRef}
                    duration={duration * 1000}
                    activeStrokeColor={color}
                    value={0}
                    radius={120}
                    delay={500}
                    activeStrokeWidth={0}
                    inActiveStrokeWidth={0}
                    startInPausedState={false}
                    initialValue={duration}
                    progressFormatter={formatProgress}
                    subtitle={subtitle}
                />
            </CircularProgressBase>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: Dimensions.get('window').height / 4
    }
});
