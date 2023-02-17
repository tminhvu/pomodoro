import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main';
import Settings from './src/screens/Settings';
import { StatusBar } from 'expo-status-bar';
import About from './src/screens/About';

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <Provider store={store}>
            <StatusBar
                hidden
            />
            <View style={styles.container} >
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="ClockScreen">
                        <Stack.Screen
                            name="ClockScreen"
                            component={Main}
                            options={
                                {
                                    headerShown: false
                                }
                            }
                        />
                        <Stack.Screen
                            name="Settings"
                            component={Settings}
                            options={{
                                headerStyle: {
                                    backgroundColor: 'black'
                                },
                                headerTintColor: 'white',
                                title: 'Settings'
                            }}
                        />
                        <Stack.Screen
                            name="About"
                            component={About}
                            options={{
                                headerStyle: {
                                    backgroundColor: 'black'
                                },
                                headerTintColor: 'white',
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
});
