import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from './../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import CategoryItem from './CategoryItem'
import { useRouter } from 'expo-router'

export default function Category({explore=false,onCategorySelect}) {

    const [categoryList,setCategortList]=useState([]);
    const router=useRouter();
    useEffect(()=>{
        GetCategoryList()
    },[])
    const GetCategoryList=async()=>{
        setCategortList([])
        const q=query(collection(db,'Category'));
        const querySnapshot=await getDocs(q);

        querySnapshot.forEach((doc)=>{
            console.log(doc.data());
            setCategortList(prev=>[...prev,doc.data()])
        })
    }

    const onCategortPressHandler=(item)=>{
        if(!explore)
        {
            router.push('/businesslist/'+item.name)
        }
        else{
           onCategorySelect(item.name) 
        }
    }
  return (
    <View>
      {!explore&&  <View style={{padding:20,display:'flex',
        flexDirection:'row',justifyContent:'space-between',
        marginTop:10,}}>
        <Text 
        style={{
      
        fontSize:20,
        fontFamily:'outfit-bold'}}>
            Category
            </Text>
            <Text style={{color:Colors.PRIMARY,fontFamily:'outfit-medium'}}>Посмотреть</Text>
        </View>}
 
        <FlatList
            data={categoryList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginLeft:20}}
            renderItem={({item,index})=>(
                <CategoryItem 
                category={item} 
                key={index}
                onCategoryPress={(category)=>
                    onCategortPressHandler(item)}
                />
                
            )}
        />
    </View>
  )
}