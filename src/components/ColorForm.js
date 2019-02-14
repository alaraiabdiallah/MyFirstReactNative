import React,{Component} from "react"
import PropTypes from 'prop-types'
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableHighlight,
} from "react-native"

export default class ColorForm extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	txtColor: ''
	  }
	  this.submit = this.submit.bind(this)
	}
	submit(){
		this.props.onNewColor(this.state.txtColor.toLowerCase())
		this.setState({txtColor:''})
	}
	render(){
		return(
			<View style={styles.container}>
				<TextInput style={styles.txtInput} 
					placeholder="Enter a color..." 
					onChangeText={ (txtColor) => this.setState({txtColor}) } 
					value={this.state.txtColor} />
				<Text style={styles.button} onPress={this.submit} >+</Text>		
			</View>
		)
	}
}

ColorForm.propTypes = {
  onNewColor: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		backgroundColor: 'rgba(255,255,255,.5)'
	},
	txtInput:{
		flex:1,
		margin:2,
		padding:5,
		borderWidth:2,
		fontSize:20,
		borderRadius:5,
		backgroundColor:'snow'
	},
	button:{
		paddingLeft:20,
		paddingRight:20,
		paddingTop:5,
		paddingBottom:5,
		margin:2,
		fontSize:20,
		textAlign:'center',
		backgroundColor: '#fff',
		borderWidth:2,
		borderRadius:5
	}
})
