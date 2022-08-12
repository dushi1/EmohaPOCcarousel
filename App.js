import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import Carousel from "./component/CarouselComponent";

const images = [
  "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
];

export default class App extends Component {
  render() {
    return (
      <View>
        {/* Pass images in an array and time in seconds */}
        <Carousel images={images} delay={15} />
      </View>
    )
  }
}