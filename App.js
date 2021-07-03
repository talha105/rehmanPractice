import React,{Component,useEffect,useMemo,useState} from "react"
import {View,Text,StyleSheet, TouchableOpacity,TextInput,FlatList} from "react-native"
import formatedDate from "./utils/formateDate"
import {Header} from "./components/header"
import List from "./flatList"

function App(){

  const [data,getData]=useState([])
  useEffect(()=>{
    console.log("call")
  },[])

  const pageLoadMemo=useMemo(()=>{
  console.log("call2")

  },[data])

  function clean(){
    console.log("clean")
  }
  const [fields,setFields]=useState({
    firstName:"",
    lastName:""
  })

  function change(key,v){
    setFields(pS=>({
      ...pS,
      [key]:v
    }))
  }
  const date=new Date()
  console.log("renderComponent")
  return(
    <View style={styles.con}>
      <TouchableOpacity 
      onPress={change}
      style={{backgroundColor:'green',marginLeft:20}}
      >
        <TextInput onChange={(v)=>change("firstName",v)}/>
        <Text>{formatedDate(date)}</Text>
        <Text>Click</Text>
        <FlatList
        data
        onEndReached
        />
      </TouchableOpacity>
      <List/>
    </View>
  )
}

const styles=StyleSheet.create({
  con:{
    flex:1
  },
  box1:{
    backgroundColor:'red',
    flex:3,
  },
  box2:{
    backgroundColor:'blue',
    flex:4,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end'
  },
  box3:{
    backgroundColor:'yellow',
    flex:1
  }
})
export default App;
