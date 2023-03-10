import Head from 'next/head'
import Image from 'next/image'
import Home from './home'
export default function Index() {
  return (
    <div className='w-full'>
      <Head>
        <title>こんにちは</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ico.png" />
      </Head>
      <Home />
    </div>
  )
}
