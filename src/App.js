import { useState,useEffect } from 'react';
function App() {
  const [number,setNumber] = useState(1);
  const [name,setName] = useState('sinan');
  useEffect(() => {
    console.log("number state güncellendi.");
  },[number]);

  useEffect(() => {
    console.log("name state güncellendi.");
  },[name]);

  useEffect(() => {
    console.log('componeent mount edildi.')
  },[]);
  return (
    <div className="App">
     <h1>{number}</h1>
     <button onClick={() => setNumber(number +1 )}>Click</button>

     <hr />
     <h1>{name}</h1>
     <button onClick={() => setName("Tuğba")}>Click</button>

    </div>
  );
}

export default App;

// using states 
// const [name, setName] = useState("Tuğba");
// const [age, setAge] = useState(26);
// const [friends, setFriends] = useState(["sinan","tuğba"]);
// const [address, setAddress] = useState({title:"İstanbul",zip:34567});


// <h1>Merhaba {name}</h1>
// <h2>{age}</h2> 
// <button onClick={() => setName("sinan")}>change name</button>
// <button onClick={() => setAge(25)}>change age</button>
// <hr />
// <h2>Friends</h2>
// {friends.map((friend,key) => (
//   <div key={key}>{friend}</div>
// ))
// }
// <button onClick={() => setFriends([...friends,"ayşe"])}>add new friend</button>

// <hr />
// <h2>Address</h2>
// <div>
//   {address.title},{address.zip}
// </div>
// <button onClick={() => setAddress({...address,title:"Karabük",zip:232})}>add new address</button>