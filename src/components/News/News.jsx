import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./News.css"

const News = () => {
  const [data, setData] = useState([])
  const getdata = async () => {
    const ress = await axios.get("https://newsapi.org/v2/top-headlines?country=eg&apiKey=810930c84b26472ab86cb93b44af99b4")
    setData(ress.data.articles)  // This is to get the data
  }
  useEffect(() => {

    getdata()
  }, [])
  return (
    <div className="AllNews">
      <h3 className="heading"> هنا سوف تجد وتتعرف علي اخر واحدث الاخبار المحليه والعالميه</h3>
      {data.map((item) => (
        <div className="News" key={item.id}>
          <div className="InfoImg">
            <img src={item.urlToImage} />
          </div>
          <div className="InfoText">
            <h2 className="author">الناشر :  {item.author ? item.author : "غير معروف"}</h2>
            <h3 className="title">العنوان : {item.title}</h3>
            <p className="des">الحدث : {item.description ? item.description : "غير متاح"}</p>
            <a className="link" href={item.url}>المصدر الرئيسي للخبر</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default News