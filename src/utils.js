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
