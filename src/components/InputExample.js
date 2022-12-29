import {useState} from 'react'

function InputExample() {
  const [form,setForm] = useState({name:"",surname:""});
  const onChangeForm = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <div>
      Name <br />
     <input value={form.name} name="name" onChange={onChangeForm} />
   
     <br /><br />

     Surname <br />
     <input value={form.surname} name="surname" onChange={onChangeForm} />
     <br />
     {form.name} , {form.surname}
    </div>
  )
}

export default InputExample