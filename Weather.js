import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
 
const weatherOptions = {
    Clear: {
        iconName: "weather-sunny",
        gradient: ['#2980B9', '#6DD5FA', '#FFFFFF'],    // 위 -> 아래 순
        title: "Clear Sky",
        subtitle: "Hurry up and go outside."
    },
    Sunny: {
        iconName: "weather-sunny",
        gradient: ['#FF7300', '#FEF253'],
        title: "Sunny",
        subtitle: "The sunlight dazzles me."
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ['#373B44', '#4286f4'],
        title: "Thunderstorm",
        subtitle: "Just don't go outside."
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subtitle: "My clothes get wet in the drizzle."
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ['#00C6FB', '#005BEA'],
        title: "Rainy",
        subtitle: "Take your umbrella."
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ['#7DE2FC', '#B9B6E5'],
        title: "Snowy",
        subtitle: "Let's make a snowman."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ['#89F7FE', '#66A6FF'],
        title: "Atmosphere",
        subtitle: "I don't know this fucking weather."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ['#D7D2CC', '#304352'],
        title: "Cloudy",
        subtitle: "I don't feel good because it's cloudy."
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ['#4DA0B0', '#D39D38'],
        title: "Dusty",
        subtitle: "Damn yellow dust from China."
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ['#49a09d', '#5f2c82'],
        title: "Hazy",
        subtitle: "I hate gloomy weather like today."
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ['#9bc5c3', '#616161'],
        title: "Mist",
        subtitle: "I can't see anything."
    }
};

export default function Weather({temp, condition}) {
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient}     // 주의: condition이 없으면, 에러발생!!
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName}
                    color= "white" />
                <Text style={styles.temp}>{temp+" °"}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds", 
        "Dust",
        "Haze",
        "Mist"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white"
    }, 
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});