"use client"
import React from "react";
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [text,setText] = useState("bittr.ee/")
  const createTree=()=>{

  }
  return (
    <main>
      <section className="bg-[#254f1a] h-[100vh] min-h-[900px] grid grid-cols-2">
        <div className=" flex pt-30 items-center justify-center flex-col ml-[10vw]">
          <p className='text-[#d2e823] w-[740px] font-bold leading-[5rem] text-[80px]'>Everything you are. In one, simple link in bio.</p>
          <p className='text-white font-medium w-[740px] text-[18px] my-8'>
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, twitter, Youtube and other social media profiles.
          </p>
          <div className="input mt-10 w-full flex gap-5">
            <input type="text" value={text||""} onChange={(e)=>{setText(e.target.value)}} className="bg-white w-[40%] p-5 rounded-md" name="search" placeholder="linktr.ee/" />
            <Link href={`/generate?handle=${text.split("ee/")[1]}`}><button className="rounded-full font-semibold px-10 cursor-pointer p-5 bg-[#e9c0e9]">Claim your Linktree</button></Link>
            <Link href={`${text.split("ee/")[1]}`}><button className="rounded-full cursor-pointer  font-semibold p-5 bg-[#e9c0e9]"><MagnifyingGlassIcon className="w-[24px] h-[24px] text-black" /></button></Link>
            
          </div>
        </div>
        <div className=" flex pt-30 items-center justify-center flex-col mr-[10vw]">
          <img src="./Pic.png" alt="" />
        </div>
      </section>
      <section className="bg-[red] min-h-[100vh]">
        
      </section>
    </main>
  );
}
