import React, { useState, useEffect, useRef  } from 'react';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDWr_tC-x_mneBnBVI23w2vrMbOBwPY780",
  authDomain: "superchat-c05fc.firebaseapp.com",
  projectId: "superchat-c05fc",
  storageBucket: "superchat-c05fc.appspot.com",
  messagingSenderId: "100497759511",
  appId: "1:100497759511:web:df0c3f6ef7c3e70f7a6b52",
  measurementId: "G-09892PKRCD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SocioGram</h1>
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
  return auth.currentUser && <button onClick={() => signOut(auth)}>Sign Out</button>;
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(firestore, "Messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');

    dummy.current.scrollIntoView({behaviour : 'smooth'});
  };

  return (
    <>
      <main>
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit">^</button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      {photoURL && <img src={photoURL} alt="User Avatar" />}
      <p>{text}</p>
    </div>
  );
}

export default App;
