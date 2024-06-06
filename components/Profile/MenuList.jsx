import { View, Text, FlatList, Image, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'
import { useRouter } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function MenuList() {
    const { signOut } = useAuth();
    const menuList = [
        {
            id: 1,
            name: 'Добавить магазин',
            icon: require('./../../assets/images/add.png'),
            path: '/business/add-business'
        },
        {
            id: 2,
            name: 'Мои Магазины',
            icon: require('./../../assets/images/business-and-trade.png'),
            path: '/business/my-business'
        },
        {
            id: 3,
            name: 'Поделиться',
            icon: require('./../../assets/images/share_1.png'),
            path: 'share'
        },
        {
            id: 4,
            name: 'Выйти',
            icon: require('./../../assets/images/logout.png'),
            path: 'logout'
        }
    ]

    const router = useRouter();

    const onMenuClick = (item) => {
        if (item.path == 'logout') {
            signOut();
            return;
        }
        if (item.path == 'share') {
            Share.share(
                {
                    message: 'Скачайте приложение Patchwork-shop ссылка для скачивания:'
                }
            )
            return;
        }
        router.push(item.path)
    }

    return (
        <View style={{
            marginTop: 50,
            paddingHorizontal: 20,
        }}>
            <FlatList
                data={menuList}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => onMenuClick(item)}
                        style={{
                            flex: 1,
                            margin: 10,
                            padding: 20,
                            borderRadius: 15,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 5,
                            elevation: 5,
                        }}>
                        <Image source={item.icon}
                            style={{
                                width: 50,
                                height: 50,
                                marginBottom: 10,
                            }}
                        />
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 16,
                            color: Colors.PRIMARY,
                            textAlign: 'center',
                        }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />

            <Text style={{
                fontFamily: 'outfit',
                textAlign: 'center',
                marginTop: 50,
                color: Colors.GRAY
            }}>Для дипломного работы @ 2024</Text>
        </View>
    )
}
