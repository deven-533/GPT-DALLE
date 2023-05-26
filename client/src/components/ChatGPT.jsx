import React, { useState } from 'react'
import searchimg from '../assets/search.png'
import axios from 'axios'
import { toast } from 'react-hot-toast';

const ChatGPT = () => {
  const [Ques, setQues] = useState("");
  const [Ans, setAns] = useState("");

  const copyclipboardhandler = () => {
    navigator.clipboard.writeText(Ans)
    toast.success('Copied to clipboard')
  }

  const SearchHandler = () => {
    
      axios.post('http://localhost:3001/chatgpt', {
        question: Ques
        })
        .then(function (response) {
          setAns(response.data)
        }
        )
        .catch(function (error) {
          console.log(error);
        }
        );

  }

  return (
    <>
    <div className="container">
      <input onChange={(e)=>{
        setQues(e.target.value)
      }} type="text" name="search" placeholder="Search..." className="input" />
      <button className='btn-search'><img src={searchimg} alt="" onClick={SearchHandler}/></button>
      
    </div>
    <div onClick={copyclipboardhandler}>

    <textarea  value={Ans} name="" className='ans' id="" cols="30" rows="10" disabled></textarea>
    </div>
    </>
  )
}

export default ChatGPT