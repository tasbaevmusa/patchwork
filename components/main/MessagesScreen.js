import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { showMessage } from "react-native-flash-message";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { addDoc, collection,query, onSnapshot, orderBy } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MessageCard from '../components/MessageCard/MessageCard'
import styles from './Chat.style'

import { database, db } from "../../firebase/config";




const Chat = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const getEmail = async () => {
      try {
        const value = await AsyncStorage.getItem('userEmail');
        if (value !== null) {
          setData(value);
        } else {
          console.log('error');
        }
      } catch (error) {
        console.error(error);
      }
    }
    getEmail();

  }, []);

  useEffect(() => {
    try {

      const q = query(collection(database, 'messages'), orderBy("date", "asc"));
      const querySnapshot = onSnapshot(q, (docs) => {
        setMessages([]);
        const a = [];
        docs.forEach((doc) => {
          a.push(doc.data());
        });
        setMessages(a);
      });

    } catch (error) {
      console.log("error")
    }

  }, [])

  const handleMessageSend = async () => {
    if (message.trim() === "") {
      showMessage({
        message: "Error",
        description: "Please enter a message.",
        type: "danger",
      });
      return;
    }

    try {
      const docRef = await addDoc(collection(database, "messages"), {
        name: data,
        message: message,
        date: new Date()
      });
      setMessage("");
    } catch (error) {
      console.log(error)
      showMessage({
        message: "Error",
        description: "An error occurred while sending message.",
        type: "danger",
      });
    }
  };


  const flatrender = ({ item }) => <MessageCard message={item.message} name={item.name} date={item.date}></MessageCard>
  return (
      <SafeAreaView style={styles.container}>
        <FlatList
            data={messages}
            renderItem={flatrender}
            keyExtractor={(item, index) => index.toString()}
        />
        <Input
            placeholder={'Message'}
            value={message}
            onChangeText={(text) => setMessage(text)}
        />
        <Button title={'Send'} onPress={handleMessageSend} />
      </SafeAreaView>
  );
}

export default Chat;
