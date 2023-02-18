import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Slider from "../components/settings/Slider"
import { adjustLongBreak, adjustPomodoro, adjustShortBreak } from "../redux/slices/circularProgressSlice"
import { progressColor } from '../colors'
import { useNavigation } from "@react-navigation/native"
import { Icon } from "@rneui/base"
import { setIsLandscape } from "../redux/slices/screenSlice"

export default function Settings() {
    const pomodoroValue = useSelector((state) => state.circularProgress.pomodoro)
    const shortBreakValue = useSelector((state) => state.circularProgress.shortBreak)
    const longBreakValue = useSelector((state) => state.circularProgress.longBreak)

    const dispatch = useDispatch()

    const navigation = useNavigation()

    return (
        <View style={styles.container}
            onLayout={(e) => {
                let isLandscape = e.nativeEvent.layout.width > e.nativeEvent.layout.height
                dispatch(setIsLandscape(isLandscape))
            }}
        >
            <View style={styles.sliderSection}>
                <Slider value={pomodoroValue} label={'Pomodoro'} color={progressColor['pomodoro']} adjustValue={adjustPomodoro} dispatch={dispatch} />
                <Slider value={shortBreakValue} label={'Short break'} color={progressColor['shortBreak']} adjustValue={adjustShortBreak} dispatch={dispatch} />
                <Slider value={longBreakValue} label={'Long break'} color={progressColor['longBreak']} adjustValue={adjustLongBreak} dispatch={dispatch} />
            </View>
            <TouchableOpacity style={styles.aboutSection}
                onPress={() => {
                    navigation.navigate('About')
                }}
            >
                <Icon
                    name="info"
                    type="materialicons"
                    color={'darkgray'}
                />
                <Text style={styles.aboutLabel}>
                    About
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    sliderSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    aboutSection: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    aboutLabel: {
        color: 'darkgray',
        paddingLeft: 5
    }
})
