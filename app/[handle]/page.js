import React from 'react'
import clientPromise from '@/lib/mongodb'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const HandlePage = async ({ params }) => {
  const Handle = (await params).handle
  const client = await clientPromise
  const db = client.db("BitTree")
  const collection = db.collection("links")

  const doc = await collection.findOne({ handle: Handle })

  // If not found, you can optionally return a 404 UI
  if (!doc) {
    return notFound()
  }

  const Pic = doc.pic
  const Links = doc.links
  const Desc = doc.desc

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img
        src={Pic}
        alt="background"
        className="absolute w-full h-full object-cover blur-md"
      />
      <div className="absolute w-full h-full bg-white/70" />

      <div className="relative z-10 container flex flex-col items-center mx-auto text-center p-6 rounded-xl py-20">
        {/* Circular Image */}
        <div className="w-50 h-50 mx-auto mb-4">
          <img
            src={Pic}
            alt="Handle Pic"
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        {/* Handle Name */}
        <h2 className="text-xl font-semibold">@{Handle}</h2>
        <p className=' text-slate-500 mb-2'>{Desc}</p>
        <button className='bg-black text-white py-2 px-4 m-2 rounded-2xl'><Link href={"/"}>Back To Home</Link></button>

        {/* Links List */}
        <div className="flex flex-col mt-8 items-center gap-2 w-[40%]">
          {Links.map((item, index) => (
            <div key={index} className="text-left overflow-x-auto smooth bg-white/80 p-5 flex hover:scale-[1.05] transition-transform duration-300 justify-center w-full rounded-md">
              <span className="font-medium">{item.linktext}: <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline break-words"
              >
                 {item.link}
              </a></span>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HandlePage
