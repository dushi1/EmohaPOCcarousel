import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import propTypes from 'prop-types';

const Dots = ({ selectedIndex, delay }) => {
    const X = useSharedValue(10)
    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(X.value, { duration: delay })
        }
    })
    useEffect(() => {
        if (selectedIndex) {
            X.value = 150
        } else {
            X.value = 10
        }

    }, [selectedIndex])
    return <Animated.View
        style={[animatedStyle, { ...style.circle, opacity: selectedIndex ? 1 : 0.6 }]}
    />
}

const style = StyleSheet.create({
    circle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "white"
    }
})

Dots.propTypes = {
    selectedIndex: propTypes.bool.isRequired,
    delay: propTypes.number.isRequired
}

export default Dots