import React from 'react'

const NFTDropPage = () => {
  return (
    <div className="flex flex-col h-screen lg:grid lg:grid-cols-10">
     {/* Left  */}
    
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img className="w-44 rounded-xl object-cover lg:h-96 lg:w-72" src="https://links.papareact.com/8sg" alt="" />
          </div>
          <div className="p-5 text-center space-y-2">
            <h1 className="text-white font-bold text-4xl">
              NOTMYART Apes
            </h1>
            <h2 className="text-xl text-gray-200">A collection of NOTMYART Apes that were definitely not drawn by me!</h2>
          </div>
        </div>
      </div>

      
    

     {/* Right Side */}

     <div>
       {/* Header */}

       {/* Content */}

       {/* Mint Button */}
     </div>

    </div>
  )
}

export default NFTDropPage