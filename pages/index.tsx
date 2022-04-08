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
    <div className="max-w-7xl mx-auto flex min-h-screen flex-col py-20 px-10 2xl:px-0">
      <Head>
        <title>NFT Project Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="mb-10   text-4xl text-white font-extralight ">The <span className='font-extrabold  underline decoration-pink-600/50'>NOTMYART</span> NFT Market Place</h1>
      
      <main className='bg-[#222222] p-10  shadow-xl shadow-rose-400/20 rounded-3xl '>
      <div className='grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 '>
      {collections.map((collection)=>(
        <Link href={`/nft/${collection.slug.current}`}>
        <div className='flex cursor-pointer flex-col items-center hover:scale-105 transition-all duration-200 space-y-4' >
          <img className='h-96 w-60 rounded-2xl object-cover' src={urlFor(collection.mainImage).url()} alt="" />
          <div className='p-5'>
            <h2 className='text-3xl text-white'>{collection.title}</h2>
            <p className='mt-2 text-sm text-gray-300'>{collection.description}</p>
          </div>
        </div>
      </Link>
      ))}
      </div>
      </main>
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