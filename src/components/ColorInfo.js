import React from 'react'
import {
	Text,
	View,
	StyleSheet
} from 'react-native'

import ColorTools from 'color'
const ColorInfo = ({navigation}) => {
	const colorPars = navigation.state.params.color
	const color = ColorTools(colorPars)
	return(
		<View style={[styles.container,{backgroundColor:color}]}>
			<Text style={[styles.text,{color:color.negate()}]}>{color.hex()}</Text>
			<Text style={[styles.text,{color:color.negate()}]}>{color.rgb().string()}</Text>
			<Text style={[styles.text,{color:color.negate()}]}>{color.hsl().string()}</Text>
		</View>
	)
}

ColorInfo.navigationOptions = {
	title: 'Color Details'
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent: 'center'
	},
	text:{
		fontSize:20,
		margin:10
	}
})

module.exports = ColorInfo