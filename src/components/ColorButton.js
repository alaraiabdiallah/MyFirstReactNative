import React from "react"
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
} from "react-native"

const ColorButton = ({ backgroundColor, onSelect=f=>f }) => (
	<TouchableHighlight style={styles.button} 
		onPress={()=> onSelect(backgroundColor)}
		underlayColor="orange">
		<View style={styles.row}>
			<View style={[styles.sample,{backgroundColor}]} />
			<Text style={styles.text}>{backgroundColor}</Text>
		</View>
	</TouchableHighlight>
)

const styles = StyleSheet.create({
	row:{
		flexDirection: 'row',
		alignItems: 'center',

	},
	sample:{
		width: 20,
		height: 20,
		borderRadius: 10,
		margin: 5,
		backgroundColor: 'white'
	},
	button: {
		margin: 8,
		padding: 8,
		borderWidth: 2,
		borderRadius: 10,
		alignSelf: 'stretch',
		backgroundColor: 'rgba(255,255,255,.8)'
	},
	text:{
		fontSize:25,
		margin:5
	}
})

module.exports = ColorButton;