import { createSlice } from "@reduxjs/toolkit";
import { progressColor } from '../../colors'

const description = {
    'pomodoro': 'Pomodoro',
    'longBreak': 'Long Break',
    'shortBreak': 'Short Break'
}

const initialState = {
    pomodoro: 1500,
    shortBreak: 300,
    longBreak: 600,
    mode: 'pomodoro',
    cycle: 0,

    activeStrokeColor: progressColor['pomodoro'],
    subtitle: description['pomodoro']
}

initialState.duration = initialState.pomodoro

export const circularProgressSlice = createSlice({
    name: 'circularProgress',
    initialState,
    reducers: {
        switchMode: (state) => {
            const currentMode = state.mode

            switch (currentMode) {
                case 'pomodoro':
                    if (state.cycle != 0 && state.cycle % 4 == 0) {
                        state.mode = 'longBreak'
                    } else {
                        state.mode = 'shortBreak'
                    }
                    state.cycle++
                    break;
                default:
                    state.mode = 'pomodoro'
                    break;
            }

            state.activeStrokeColor = progressColor[state.mode]
            state.duration = state[state.mode]
            state.subtitle = description[state.mode]
        },
        adjustPomodoro: (state, action) => {
            const newValue = state.pomodoro + action.payload

            if (newValue >= 0 && newValue <= 3600) {
                state.pomodoro = newValue
                state.duration = state[state.mode]
            }

        },
        adjustShortBreak: (state, action) => {
            const newValue = state.shortBreak + action.payload

            if (newValue >= 0 && newValue <= 3600) {
                state.shortBreak = newValue
                state.duration = state[state.mode]
            }
        },
        adjustLongBreak: (state, action) => {
            const newValue = state.longBreak + action.payload

            if (newValue >= 0 && newValue <= 3600) {
                state.longBreak = newValue
                state.duration = state[state.mode]
            }
        }
    }
})

export const { switchMode, adjustPomodoro, adjustShortBreak, adjustLongBreak } = circularProgressSlice.actions
export default circularProgressSlice.reducer
