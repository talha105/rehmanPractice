import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import {FlatList,View,Text,Image,ActivityIndicator} from "react-native"

export default function List (){
    const [data,setDate]=useState([])
    const [page,setPage]=useState(1)
    const [totalNo,setTotalNo]=useState(0)

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users?page=${page}`).then((res)=>{
            setTotalNo(res.data.total_pages)
            setDate([...data,...res.data.data])
        })
    },[page])

    function loadMore(){
        if(page<=totalNo){
            console.log("page",page)
            setPage(page+1)
        }
    }
    function renderUser({item}){
        return (
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                backgroundColor:'lightgrey',
                padding:10,
                margin:10,
                borderRadius:7
            }}>
                <Image
                style={{width:100,height:100,borderRadius:100/2}}
                source={{uri:item.avatar}}
                />
                <Text style={{marginLeft:10,fontSize:30}}>{item.first_name}</Text>
            </View>
        )
    }
    function renderFooter(){
        if(page<=totalNo){
            return(
                <ActivityIndicator color="green" size={30}/>
            )
        }
        return null
    }
    function renderList(){
        if(data.length>0){
            return(
                <FlatList
                data={data}
                renderItem={renderUser}
                onEndReached={loadMore}
                onEndReachedThreshold={0.3}
                keyExtractor={(item,i)=>i.toString()}
                ListFooterComponent={renderFooter}
                />
            )
        }
        else if(totalNo==0){
            return <Text>Loading....</Text>
        }
        else{
            return <Text>Not Found</Text>
        }
    }
    return(
        <View style={{backgroundColor:'white',flex:1}}>
            {renderList()}
        </View>
    )
}
