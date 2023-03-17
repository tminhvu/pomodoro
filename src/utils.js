import AsyncStorage from "@react-native-async-storage/async-storage"

export const formatProgress = (value) => {
    'worklet'

    const number = value.toFixed(0)

    const minutes = Math.floor(number / 60)
    const remainingSeconds = number - minutes * 60

    let minuteStr = minutes.toString()
    let remainingSecondsStr = remainingSeconds.toString()

    if (minutes <= 9) {
        minuteStr = '0' + minutes.toString()
    }

    if (remainingSeconds <= 9) {
        remainingSecondsStr = '0' + remainingSeconds.toString()
    }

    return minuteStr + ':' + remainingSecondsStr
}

const storeKey = '@com.tminhvu.pomodoro'
export const storeSettings = async (settings) => {
    try {
        await AsyncStorage.setItem(storeKey, JSON.stringify(settings))
        //console.log('store success', settings)
    } catch (error) {
    }
}

export const loadSettings = async () => {
    try {
        const settings = await AsyncStorage.getItem(storeKey)

        if (settings != null) {
            //console.log('load success', settings)
            return JSON.parse(settings)
        }
    } catch (error) {
    }
}
