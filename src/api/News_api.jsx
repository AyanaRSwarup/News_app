import React from 'react'
import axios from 'axios'


const News_api = async(category) => {

  const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_NEWS_API}`);
  

  return response.data.articles;
};

export default News_api