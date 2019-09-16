import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, Platform, ListView, FlatList } from 'react-native';
import Constants from 'expo-constants';

import { List, ListItem, SearchBar } from "react-native-elements";

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  constructor(props){

    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  
    this.state = {
      view: 'rutas',
      view2: 'cobros',
      saludo : 'Hola mundo',
       dataSource: ds.cloneWithRows([
         {id:1, name:'San Juan - La Villa'},
         {id:2, name:'San Juan - Santa Maria'},
         {id:3, name:'San Juan - Gamarra'},
         {id:4, name:'San Juan - Zona Industrial'},
         {id:5, name:'San Juan - Cagua'},
         {id:6, name:'San Juan - Maracay'},
         {id:7, name:'San Juan - Valencia'},
         {id:8, name:'La Villa - Santa Maria'},
         {id:9, name:'La Villa - Gamarra'},
         {id:10, name:'La Villa - Zona Industrial'},
         {id:11, name:'La Villa - Cagua'},
         {id:12, name:'La Villa - Maracay'},
         {id:13, name:'La Villa - Valencia'},
         {id:14, name:'Santa Maria - Gamarra'},
         {id:15, name:'Santa Maria - Zona Industrial'},
         {id:16, name:'Santa Maria - Cagua'},
         {id:17, name:'Santa Maria - Maracay'},
         {id:18, name:'Santa Maria - Valencia'},
         {id:15, name:'Gamarra - Zona Industrial'},
         {id:16, name:'Gamarra - Cagua'},
         {id:17, name:'Gamarra - Maracay'},
         {id:18, name:'Gamarra - Valencia'},
         {id:19, name:'Gamarra - Cagua'},
         {id:20, name:'Cagua - Maracay'},
         {id:21, name:'Cagua - Valencia'},
         {id:22, name:'Maracay - Valencia'},

        ]),  
    }
    this.onPressView = this.onPressView.bind(this);
  }
  saludo = () => { Alert:alert('hola juan') }
 
  onPressView(e){
    this.setState({view:this.state.view2, view2:this.state.view})
    
    //this.setState({[e.target.name]:e.target.value});
   }

  render() {
    let view = this.state.view
    const version = Platform.Version;
    let name = 'Whatsapp'
    if(view == 'rutas'){
      name = name+' '+view
    }
    else if(view == 'cobros'){
      name = name+' '+view
    }
    

    return (

    
    

      <ImageBackground source={require('./assets/fondo1.jpg')} style={styles.container}>

          <View style={styles.headerB}>
            
            <View style={styles.headerB1}>
           
              <Text style={{ fontSize: 25, color: 'white',fontWeight: 'bold',textAlign: 'left' }}> 
                {name} 
              </Text>
             </View>
            
            <View style={styles.headerB2}>
            <TouchableOpacity onPress={this.onPressView} name="cobros">
            <Image  
            source={require('./assets/search_azul.png')} 
            style={{width:30, height:30, borderRadius:15}}
             />
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headerC}>
           
            <View style={styles.headerC1}>
            <TouchableOpacity onPress={this.onPressView}>
              <Text style={{ fontSize: 25, color: 'white',textAlign: 'center', }}> 
                Rutas
              </Text>

              </TouchableOpacity>
            </View>
            <View style={styles.headerC2}>
              <Text style={{ fontSize: 25, color: 'white',textAlign: 'center',  }}> 
                Cobros
              </Text>
            </View>
          </View>
          <View style={styles.headerD}>

            <ListView  style={{ width: "100%" }}
                dataSource={this.state.dataSource}  
                renderRow={  
                    (rowData) =>
                    <TouchableOpacity>
                        <View style={styles.headerD1}>  

                          <View style={styles.headerD2}>
                          
                            <Text style={{justifyContent:'center', fontSize: 20,marginTop: 8, marginLeft:15}}> {rowData.id} </Text>
                          
                          </View>
                          <View style={styles.headerD3}>
                           <Text style={{fontSize: 20, marginLeft: 10, marginTop:10}}>{rowData.name}</Text>
                          </View>
                        </View>
                    </TouchableOpacity>
                         }  
            />


          </View>
          <View style={styles.headerE}>
          </View>
       
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  headerB: { flex: 0.15, flexDirection: 'row', backgroundColor: 'green',},
  headerB1:{ flex: 1, marginTop: 25, marginLeft: 10},
  headerB2:{ flex: 0.1, marginTop: 35, marginRight: 10},
  headerC: { flex: 0.08, flexDirection: 'row', backgroundColor: 'green',},
  headerC1:{ flex: 1,borderBottomWidth :3, borderBottomColor: 'white',},
  headerC2:{ flex: 1,},
  headerD: { flex: 1, flexDirection: 'column', backgroundColor: 'white', },
  headerD1: { flex: 1, flexDirection: 'row', backgroundColor: 'white', },
  headerD2: { flex: 1, flexDirection: 'row', backgroundColor: 'white',
    width: 50,
    height: 50,
    marginTop: 5,
    borderRadius: 25,
    resizeMode: 'contain',
    borderColor: '#cccbbb',
    borderStyle: 'dotted',
    borderWidth: 1
     },
  headerD3:{ flex: 6, borderBottomWidth :1, borderBottomColor: '#cccbbb', height:60,},
  headerE: { flex: 0.011, flexDirection: 'row', backgroundColor: 'green', borderColor: 'black', borderWidth:1 },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
 
});
