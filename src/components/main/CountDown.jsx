import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, useWindowDimensions, View } from 'react-native';
import CircularProgress, { CircularProgressBase } from 'react-native-circular-progress-indicator';
import { useDispatch, useSelector } from 'react-redux';
import { switchMode } from '../../redux/slices/circularProgressSlice';
import { formatProgress } from '../../utils';
import { Audio } from 'expo-av';
import alarmFile from '../../sounds/alarm.mp3'

export default function CountDown({ innerRef, outerRef, isOn, isMuteRef }) {
    const duration = useSelector((state) => state.circularProgress.duration)
    const color = useSelector((state) => state.circularProgress.activeStrokeColor)
    const subtitle = useSelector((state) => state.circularProgress.subtitle)
    const [alarm, setAlarm] = useState()

    const dispatch = useDispatch()

    const [styles, setStyles] = useState(stylesDefault)
    const { height, width } = useWindowDimensions()

    const playAlarm = async () => {
        if (isMuteRef.current)
            return

        const { sound } = await Audio.Sound.createAsync(alarmFile)
        setAlarm(sound)
        await sound.playAsync()
    }

    useEffect(() => {
        return alarm ? () => {
            alarm.unloadAsync()
        } : undefined

    }, [alarm])

    useEffect(() => {
        if (!isOn) {
            innerRef?.current.reAnimate()
            outerRef?.current.reAnimate()

            innerRef?.current.play()
            outerRef?.current.play()

            setTimeout(() => {
                innerRef?.current.pause()
                outerRef?.current.pause()
            }, 500)
        }
    }, [duration])

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
            <CircularProgressBase
                ref={outerRef}
                onAnimationComplete={() => {
                    playAlarm()
                    dispatch(switchMode())
                    outerRef?.current.reAnimate()
                    innerRef?.current.reAnimate()
                }}
                duration={duration * 1000}
                activeStrokeColor={color}
                value={0}
                radius={Math.max(width, height) / 5}
                delay={500}
                activeStrokeWidth={10}
                inActiveStrokeWidth={10}
                startInPausedState={false}
                maxValue={100}
                initialValue={100}
            >
                <CircularProgress
                    ref={innerRef}
                    duration={duration * 1000}
                    activeStrokeColor={color}
                    value={0}
                    radius={Math.max(width, height) / 5}
                    delay={500}
                    activeStrokeWidth={0}
                    inActiveStrokeWidth={0}
                    startInPausedState={false}
                    initialValue={duration}
                    progressFormatter={formatProgress}
                    progressValueStyle={{fontWeight: 'normal'}}
                    subtitle={subtitle}
                />
            </CircularProgressBase>
        </View>
    );
}

const stylesDefault = StyleSheet.create({
    container: {
        marginBottom: Dimensions.get('screen').height / 4,
    }
});

const stylesLandscape = StyleSheet.create({
    container: {
        marginLeft: Dimensions.get('screen').width / 4,
    }
})
