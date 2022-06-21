import React from 'react'
import { initializeApp } from 'firebase/app';
import {  child, push, update } from "firebase/database";
import { getDatabase, ref, set } from "firebase/database";
export default function App3() {
  const firebaseConfig = {
    apiKey: "AIzaSyA5KvHey5SPNHLCeZ2HFThniYm9bYLg6uk",
    authDomain: "chat-teste-ed7ce.firebaseapp.com",
    projectId: "chat-teste-ed7ce",
    storageBucket: "chat-teste-ed7ce.appspot.com",
    messagingSenderId: "461605538492",
    appId: "1:461605538492:web:d822d29e60da5d9ab99eb9",
    measurementId: "G-N1STMB8FWS"
  };
  
  const app = initializeApp(firebaseConfig);
  
  const database = getDatabase(app);
  

  function writeUserData(userId, name) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      // email: email,
      // profile_picture : imageUrl
    });
    console.log("criado ")
  }
  writeUserData('1',"fabio",)




  function writeNewPost(uid, username, picture, title, body) {
    const db = getDatabase();
  
    // A post entry.
    const postData = {
      author: username,
      uid: uid,
      body: body,
      title: title,
      starCount: 0,
      authorPic: picture
    };
  
    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'posts')).key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return update(ref(db), updates);
  }
  writeNewPost(1,'fabio','','','')
  return (
    <div>App3</div>
  )
}
