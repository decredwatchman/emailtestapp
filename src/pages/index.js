import Head from 'next/head'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import emailjs from "@emailjs/browser"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
     const form = useRef();
  async function handleOnSubmit(e) {
     e.preventDefault();

     emailjs.sendForm(
      "service_1n9oscn","template_671jffd",form.current,"_FznmIQ2IcIGPeOms"
     ).then(
      (result)=>{
        console.log(result.text);
      },
      (err)=>{
        console.log(err.text)
      }
      );
    // const formData = {};

    // Array.from(e.currentTarget.elements).forEach(field => {
    //   if ( !field.name ) return;
    //   formData[field.name] = field.value;
    // });

    // await fetch('https://xjobs.netlify.app/client', {
    //   method: 'POST',
    //   body: JSON.stringify(formData)
    // });
   
  }

  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
      <form ref={form}  onSubmit={handleOnSubmit}>

        <input type="text" name='user_name' placeholder='name'  />
        <br />
        <input type="email" name='user_email' placeholder='email' />
        <br />
        
        <button>send message </button>
      </form>
      </div>
    </>
  )
}
