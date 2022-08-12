import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image } from "react-native"
import propTypes from 'prop-types';
import Dots from './DotComponent'

class Carousel extends React.Component {
    scrollRef = React.createRef()
    constructor() {
        super()
        this.state = {
            selectedIndex: 0
        }
    }
    componentDidMount = () => {
        this.timer = setInterval(() => {
            this.setState(prev => ({ selectedIndex: prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1 }),
                () => {
                    this.scrollRef.current.scrollTo({
                        animated: true,
                        y: 0,
                        x: Dimensions.get("window").width * this.state.selectedIndex
                    })
                })
        }, this.props.delay * 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        const { selectedIndex } = this.state
        const { images, delay } = this.props
        const { width, height } = Dimensions.get("window")
        const setSelectedIndex = (event) => {
            const contentOffset = event.nativeEvent.contentOffset;
            const viewSize = event.nativeEvent.layoutMeasurement;
            // Divide the horizontal offset by the width of the view to see which page is visible
            const selectedIndex = Math.ceil(contentOffset.x / viewSize.width);
            this.setState({ selectedIndex });
        }
        return (
            <View>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={setSelectedIndex} ref={this.scrollRef}>
                    {images.map((item, i) => {
                        return <Image
                            key={i}
                            resizeMethod="scale"
                            resizeMode="stretch"
                            source={{ uri: item }}
                            style={{ width: width, height: height }}

                        />
                    })}
                </ScrollView>
                <View style={style.Circlediv}>
                    {images.map((_, i) => {
                        return <Dots key={i} delay={delay * 1000} selectedIndex={i === selectedIndex} />
                    })}
                </View>
            </View>

        )
    }
}
const style = StyleSheet.create({
    Circlediv: {
        position: "absolute",
        bottom: 25,
        height: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    circle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "white"
    }
})

Carousel.propTypes = {
    images: propTypes.arrayOf(propTypes.string).isRequired,
    delay: propTypes.number.isRequired
}

export default Carousel