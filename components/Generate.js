"use client"
import React from 'react'
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import {useRouter} from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Generate = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const Handle = searchParams.get("handle")
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [desc, setDesc] = useState()
    const [handle, setHandle] = useState(Handle || "")
    const [pic, setPic] = useState("")

    const submitLinks = async (links, handle, pic) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc":desc
        })

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch(`${NEXT_PUBLIC_HOST}/api/add`, requestOptions)
        const result = await r.json()
        if (result.success) {
            toast(result.message)
            setLinks([{ link: "", linktext: "" }])
            const add=handle;
            setHandle("")
            setPic("")
            setDesc("")
            setTimeout(() => {
                    router.push(`/${handle}`)
            }, 1000)
        }
        else {
            toast.error(result.message)
        }
    }

    return (<>
        <ToastContainer />
        <div className='bg-[rgb(34,90,192)] min-h-screen grid grid-cols-2'>
            <div className="col1 pt-20 flex justify-center items-center flex-col gap-5 ">
                <div className='w-[60%] flex gap-5 flex-col overflow-x-h'>
                    <h1 className='font-bold  w-full text-[#dbf327] text-4xl'>Create your Bit-Tree</h1>
                    <h2 className='font-semibold w-full text-[#ffffff] text-2xl'>Step 1: Claim Your Handle</h2>
                    <div className=" flex gap-2 w-full pl-14">
                        <input type='text' value={handle || ""} className='bg-white w-[50%] p-4 focus:outline-blue-600 rounded-full' onChange={(e) => { setHandle(e.target.value) }} placeholder='Choose a Handle' />
                        <input type='text' value={desc || ""} className='bg-white w-full p-4 focus:outline-blue-600 rounded-full' onChange={(e) => { setDesc(e.target.value) }} placeholder='Describe yourself' />
                    </div>
                    <h2 className='font-semibold w-full text-[#ffffff] text-2xl'>Step 2: Add Links</h2>
                    <div className='flex w-full items-center  flex-col gap-2 '>
                        <div className='flex max-h-[187px] p-1 overflow-y-auto smooth w-full items-center  flex-col gap-2 '>
                            {links && links.map((item, index) => (
                                <div key={index} className='w-full flex gap-3 pl-14'>
                                    <input
                                        type='text'
                                        value={item.linktext || ""}
                                        onChange={(e) => {
                                            const updatedLinks = [...links];
                                            updatedLinks[index].linktext = e.target.value;
                                            setLinks(updatedLinks);
                                        }}
                                        className='bg-white w-[49%] h-[55px] p-4 focus:outline-blue-600 rounded-full'
                                        placeholder='Enter link text'
                                    />
                                    <input
                                        type='text'
                                        value={item.link || ""}
                                        onChange={(e) => {
                                            const updatedLinks = [...links];
                                            updatedLinks[index].link = e.target.value;
                                            setLinks(updatedLinks);
                                        }}
                                        className='bg-white w-[49%] h-[55px] p-4 focus:outline-blue-600 rounded-full'
                                        placeholder='Enter link'
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='flex gap-2 pl-14'>
                            <div onClick={() => { setLinks([...links, { link: "", linktext: "" }]) }} className=' relative flex justify-center items-center bg-[#dbf327] animate h-[50px] w-[110px] rounded-full overflow-hidden'>
                                <button className='text-black font-medium z-1'>Add</button>
                            </div>
                            <div onClick={() => { setLinks(links.slice(0, -1)) }} className=' relative flex justify-center items-center bg-[#dbf327] animate h-[50px] w-[110px] rounded-full overflow-hidden'>
                                <button className='text-black font-medium z-1'>Remove</button>
                            </div>
                        </div>

                    </div>

                    <h2 className='font-semibold w-full text-[#ffffff] text-2xl'>Step 3: Add Picture and Finalize</h2>
                    <div className="flex gap-4  w-full pl-14">
                        <input type='text' value={pic || ""} onChange={(e) => { setPic(e.target.value) }} className='bg-white overflow-y-auto smooth w-[70%] p-4 focus:outline-blue-600 rounded-full' placeholder='Enter Link to your Picture' />
                        <div className=' relative flex justify-center items-center bg-[#dbf327] animate h-full w-[200px] rounded-full overflow-hidden' >
                            <button disabled={pic == "" || handle == "" || links[0].link=="" && links[0].linktext==""} onClick={(e) => { submitLinks(links, handle, pic) }} className='text-black font-medium h-full w-[200px] rounded-full z-1 disabled:bg-slate-200'>Create BitLink</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col2 w-full h-[100vh] flex items-center justify-center  overflow-hidden">
                <img src="/generate.png" alt="" className='object-contain object-center ' />
            </div>
        </div>
    </>)
}

export default Generate
