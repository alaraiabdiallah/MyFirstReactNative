import React, { Component } from "react"
import PropTypes from 'prop-types'
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  ListView
} from "react-native"

import ColorButton from "./ColorButton"
import ColorForm from "./ColorForm"

export default class ColorList extends Component{

  static navigationOptions = {
    title: "Color Changer"
  }

  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })
    const availableColors = []
    this.state = {
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    // this.changeColor = this.changeColor.bind(this)
    this.newColor = this.newColor.bind(this)
  }

  componentDidMount(){
    AsyncStorage.getItem(
      '@ColorListStorage:Colors',
      (err,data) =>{
        if (err) {
          console.error('Error loading colors ', err)
        }else{
          if (data !== null) {
            const availableColors = JSON.parse(data)
            this.setState({
              availableColors,
              dataSource: this.ds.cloneWithRows(availableColors)
            })
          }
        }
      }
    )
  }

  // changeColor(backgroundColor){
  //   this.setState({backgroundColor})
  // }

  saveColors(colors){
    AsyncStorage.setItem(
      '@ColorListStorage:Colors',
      JSON.stringify(colors)
    )
  }

  newColor(color){
    if (color != '') {
      const availableColors = [...this.state.availableColors,color]
      this.setState({
        availableColors,
        dataSource: this.ds.cloneWithRows(availableColors)
      })
      this.saveColors(availableColors)
    }
  }

  render(){
    const { navigate } = this.props.navigation
    return(
      <View style={styles.wrapper}>
        <ListView style={ [styles.container] }
          dataSource={ this.state.dataSource }
          renderRow={(color)=>(
              <ColorButton backgroundColor={color} 
              onSelect={() => navigate('Details',{color})} />
          )}
          enableEmptySections={true}>
        </ListView>
        <ColorForm onNewColor={this.newColor} />
      </View>
    );
  }
}

ColorList.defaultProps = {
  onColorSelected: f=>f
}

ColorList.propTypes = {
  onColorSelected: PropTypes.func
}

const styles = StyleSheet.create({
  textTitle:{
    fontSize: 32,
    color: '#000',
    backgroundColor: 'rgba(255,255,255,.5)',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10
  },
  container: {
    flex: 1,
  },
  wrapper:{
    flex:1
  }
})

