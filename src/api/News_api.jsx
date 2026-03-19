import React from 'react'
import axios from 'axios'

const api_key = "45a58146f2ce4f8eb9ae9325090dd517"
const News_api = async(category) => {

  const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${api_key}`);
  

  return response.data.articles;
};

export default News_api