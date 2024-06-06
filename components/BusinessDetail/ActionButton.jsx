import { View, Text, FlatList, Image, TouchableOpacity, Linking, Share } from 'react-native'
import React from 'react'
import * as Sharing from 'expo-sharing';
export default function ActionButton({business}) {

    const actionButtonMenu=[
        {
            id:1,
            name:'Позаонить',
            icon:require( './../../assets/images/call.png'),
            url:'tel:'+business?.contact
        },
        {
            id:2,
            name:'Адрес',
            icon:require('./../../assets/images/pin.png'),
            url:'https://www.google.com/maps/search/?api=1&query='+business?.address
        },
        {
            id:3,
            name:'Сайт',
            icon:require('./../../assets/images/web.png'),
            url:business?.website
        },
        {
            id:4,
            name:'Поделиться',
            icon:require('./../../assets/images/share.png'),
            url:business?.website
        },

    ]

    const OnPressHandle=(item)=>{
        if(item.name=='Share')
        {
            Share.share({
                message:business?.name+"\n Address:"+business.address+"\n Find more details on Business Directory App by Tubeguruji !"
            })
            return ;
        }
        Linking.openURL(item.url);
    }
  return (
    <View style={{
        backgroundColor:'#fff',
        padding:20
    }}>
        
        <FlatList
            data={actionButtonMenu}
            numColumns={4}
            columnWrapperStyle={{justifyContent:'space-between'}}
            renderItem={({item,index})=>(
                <TouchableOpacity key={index}
                onPress={()=>OnPressHandle(item)}
                >
                    <Image source={item?.icon}
                      style={{
                        width:50,
                        height:50
                      }}
                    />
                    <Text style={{
                        fontFamily:'outfit-medium',
                        textAlign:'center',
                        marginTop:3
                    }}>{item?.name}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
  )
}