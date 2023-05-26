import React, { useEffect, useState } from 'react'
import searchimg from '../assets/search.png'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const DallE = () => {
  const [Img, setImg] = useState(false)
  const [Quer, setQuer] = useState("")
  const [copyImg , setcopyImg] = useState("")
  const [ImgUrl, setImgUrl] = useState("")

  const copyclipboardhandler = () => {
    navigator.clipboard.writeText(copyImg)
    toast.success('Copied to clipboard')
  }
  const genrateHandler = () => {
    setImg(false)
    axios.post('http://localhost:3001/dalle', {
      text: Quer
      })
      .then(function (response) {
        setImgUrl(response.data)
        setcopyImg(response.data)
        setImg(true)
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
      <input type="text" onChange={(e)=>{setQuer(e.target.value)}} name="search" placeholder="Search..." className="input" />
      <button className='btn-search' onClick={genrateHandler}><img src={searchimg} alt="" /></button>
      
    </div>
    <div className="genimg" onClick={copyclipboardhandler}>
      {Img ? 
      <img  src={ImgUrl} alt="" /> : <div className="defimg"></div>}
    </div>
   
    </>
  )
}

export default DallE