import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
    apiKey: "",
    authDomain: "vue3-firebase-crud.firebaseapp.com",
    projectId: "vue3-firebase-crud",
    storageBucket: "vue3-firebase-crud.appspot.com",
    messagingSenderId: "",
    appId: ""
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
    return usersCollection.add(user)
  }

  export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
  }  

  export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
  }
  
  export const deleteUser = id => {
    return usersCollection.doc(id).delete()
  }  

  export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
  }  
