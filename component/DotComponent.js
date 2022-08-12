import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
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

    return (
        <View style={{ ...style.circle, width: selectedIndex ? 150 : 10 }}>
            <Animated.View style={[{ height: 6, backgroundColor: selectedIndex ? 'white' : '#808080' }, animatedStyle]} />
        </View>
    )
}

const style = StyleSheet.create({
    circle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 5,
        backgroundColor: "#808080",
        overflow: 'hidden'
    }
})

Dots.propTypes = {
    selectedIndex: propTypes.bool.isRequired,
    delay: propTypes.number.isRequired
}

export default Dots