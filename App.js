import React, { Component } from "react"
import {
  Alert
} from "react-native"

import { StackNavigator } from 'react-navigation'

import ColorList from "./src/components/ColorList"
import ColorInfo from "./src/components/ColorInfo"

const App = StackNavigator({
  Home : { screen: ColorList },
  Details : { screen: ColorInfo }
})

export default App