import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NFT Project Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen space-y-10 justify-center items-center">
        <h1 className="text-white text-2xl">Click Below To Continue</h1>
        <Link href="/nft/ape">
          <button className="p-2 rounded-full border border-rose-500 w-30 lg:w-40 text-rose-500 text-xl font-extrabold tracking-wider">Enter</button>
        </Link>
      </div>
      
      

      
    </div>
  )
}

export default Home
