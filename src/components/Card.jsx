import React from 'react'

const Card = ({elem}) => {
   

  

  return (
    <div className=' transform transition duration-75 hover:scale-110  hover:shadow-xl mt-6 rounded-3xl '>
        <div className=' h-130 w-100 rounded-3xl  border-2 border-gray-400 flex-col flex gap-4'>
            <div className=' h-45 rounded-t-3xl  bg-cover' style={{backgroundImage:`url(${elem.urlToImage})`}}>
               
            </div>
            <div>
                <button className='bg-black rounded-xl text-white px-4 py-1 ml-2'>{elem.source.name}</button>
            </div>
            <div className=' h-50'>
                <h1 className='font-medium ml-2'>{elem.title}</h1>
                <p className='ml-2 mr-2 h-40 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>{elem.description}{elem.content}</p>
            </div>
            <div className='flex justify-evenly ml-1 mr-1 mb-2 text-gray-500 mt-5 overflow-hidden '>
                <p>{elem.author}</p>
                <p> {elem.publishedAt}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Card