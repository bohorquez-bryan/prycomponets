import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import moment from "moment";
import CountDown from 'react-native-countdown-component';

export default class Page1 extends Component {

  constructor (props) {
    
     super(props);
     this.state = {
       duration:0,
       fin:moment('2019-10-18').format('YYYY-MM-DD hh:mm:ss'),
     };
   }
   componentDidMount() {
    var that = this;
    var date = moment().format('YYYY-MM-DD hh:mm:ss');
    var enddate= this.state.fin;
    var diffdate = moment.duration(moment(enddate).diff(moment(date)));
    var hours = parseInt(diffdate.asHours());
    var minutes = parseInt(diffdate.minutes());
    var seconds = parseInt(diffdate.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    that.setState({ duration: d});
  
   }
  render() {
       return (
      <View style={styles.container}>
        <Text 
        style={{
            marginBottom: 10,
            }}>{`Fecha de Finalizacion: ${this.state.fin}`}
       </Text>
       <CountDown
       style={{
        marginBottom: 20,
        }}
       until={this.state.duration}
       onFinish={() => alert('vencido')}
       timeLabels={{d: 'Dias', h: 'Horas', m: 'Minutos', s: 'Segundos'}}
       digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FFF'}}
       size={20}
       />
      <Button style={{marginTop: 15, flex:1,}} title={'Dictado de voz'} onPress={()=>this.props.navigation.navigate('Page2')}> </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

});
