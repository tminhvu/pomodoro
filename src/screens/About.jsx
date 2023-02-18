import { Icon } from '@rneui/base';
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setIsLandscape } from '../redux/slices/screenSlice';

const portfolio = 'https://tminhvu.vercel.app/'
const github = 'https://github.com/tminhvu'
const repository = 'https://github.com/tminhvu'

export default function About() {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}
            onLayout={(e) => {
                let isLandscape = e.nativeEvent.layout.width > e.nativeEvent.layout.height
                dispatch(setIsLandscape(isLandscape))
            }}
        >
            <View style={styles.aboutMe}>
                <Text style={styles.aboutMeText}>
                    * Made with React Native, Redux, Expo.
                </Text>
                <Text style={styles.aboutMeText}>
                    * More about me at:
                </Text>
                <View style={styles.linksSection}>
                    <TouchableOpacity style={styles.link}
                        onPress={() => {
                            Linking.openURL(portfolio)
                        }}
                    >
                        <Icon
                            name="cactus"
                            type="material-community"
                            color="lightgreen"
                            size={18}
                        />
                        <Text style={styles.link}>
                            Portfolio
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.link}
                        onPress={() => {
                            Linking.openURL(github)
                        }}
                    >
                        <Icon
                            name="github"
                            type="material-community"
                            color="white"
                            size={18}
                        />
                        <Text style={styles.link}>
                            Github
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.license}>
                <Text style={styles.licenseText}>
                    Open sourced and licensed under GNU General Public License
                </Text>
                <View style={styles.repo}>
                    <TouchableOpacity style={styles.link}
                        onPress={() => {
                            Linking.openURL(repository)
                        }}
                    >
                        <Icon
                            name="github"
                            type="material-community"
                            color="white"
                            size={18}
                        />
                        <Text style={styles.link}>
                            Repository
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },
    aboutMe: {
        padding: 30
    },
    aboutMeText: {
        color: 'white',
    },
    linksSection: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 20
    },
    link: {
        color: 'white',
        textDecorationLine: 'underline',
        fontSize: 18,
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    repo: {

    },
    license: {
        padding: 30,
    },
    licenseText: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20
    }
});
