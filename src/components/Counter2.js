import { useState,useEffect } from 'react';

function Counter2() {
    const [number,setNumber] = useState(1);
    const [name,setName] = useState('sinan');
    useEffect(() => {
      console.log("number state güncellendi.");
    },[number]);
  
    // useEffect(() => {
    //   console.log("name state güncellendi.");
    // },[name]);
  
    useEffect(() => {
      console.log('componeent mount edildi.');
      const interval = setInterval(() => {
        setNumber((n) => n+1);
      }, 1000);

    return () => clearInterval(interval); 
    }, []);
  return (
    <div>
     <h1>{number}</h1>
     <button onClick={() => setNumber(number +1 )}>Click</button>

     {/* <hr />
     <h1>{name}</h1>
     <button onClick={() => setName("Tuğba")}>Click</button> */}
    </div>
  )
}

export default Counter2