"use client"
import {ShowLogin} from "@/components/showLogin"
import {useState} from "react"

const Page = ()=>{

  const [showLogin, setShowLogin] = useState(false)

  const handleShowLoginBtn = ()=>{
    setShowLogin(!showLogin)
  }


  return (
    <div className="flex flex-col text-center justify-center items-center bg-gray-200 w-screen h-screen">
      <h1 className="text-3xl font-bold text-gray-600">Welcome!</h1>
      {showLogin === false  &&
        <p>To login into your account, please use the following Button.</p>
      }
      <div className="flex flex-col gap-2">
        <button onClick={handleShowLoginBtn} className="p-3 text-lg text-white font-bold bg-pink-400 rounded-md">{!showLogin ? 'Show Login Area' : 'Hide Login Area'}</button>
        {showLogin &&
          <ShowLogin/>
        }
      </div>
    </div>
  )
}

export default Page
