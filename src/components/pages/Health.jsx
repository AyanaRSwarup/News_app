import React, { useEffect, useState } from 'react'
import News_api from '../../api/News_api'
import Card from '../Card'

const Health = () => {
  const [articles, setArticles] = useState([])
  useEffect(()=>{
    const getData = async()=>{
         const data = await News_api("health");
         setArticles(data);
    };
    getData();
  })
  return (
    <div className='flex flex-wrap overflow-auto gap-8 items-center justify-center'>
      {articles.map((elem, index)=>(
      <Card key={index} elem={elem}/>
    ))}</div>
  )
}

export default Health