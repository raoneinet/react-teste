"use client"
import {FormEvent, useState} from "react"

export const ShowLogin = ()=>{

    const handleSendBtn = (e: FormEvent)=>{
        e.preventDefault()
        alert("All Right")
    }

    return (
        <div className="p-3 bg-white rounded-md">
            <form className="p-1 text-gray-500 flex flex-col items-center gap-2">
                <label>
                    <p>email</p>
                    <input type="email" className="p-2 text-lg border border-gray-300 rounded-md"/>
                </label>
                <label>
                    <p>password</p>
                    <input type="password" className="p-2 text-lg border border-gray-300 rounded-md"/>
                </label>
                    <p>If you don't have an account, <a className="text-blue-500" href="#">create account</a></p>
                <input type="submit" onClick={handleSendBtn} value="Login" className="p-2 text-lg text-white border bg-green-600 rounded-md "/>
            </form>
        </div>
    )
}