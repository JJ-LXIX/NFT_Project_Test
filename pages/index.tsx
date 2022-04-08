import type { NextPage ,GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {sanityClient , urlFor } from '../sanity';
import { Collection } from '../typings';


interface Props{
  collections : Collection[]
}

const Home = ({collections} : Props) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "collection"]{
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage{
        asset
    },
    previewImage{
        asset
    },
    slug{
        current
    },
    creator-> {
        _id,
        name,
        address,
        slug {
            current
        },
    },
} `

const collections = await sanityClient.fetch(query)
console.log(collections);

return {
  props:{
    collections
  }
}
}