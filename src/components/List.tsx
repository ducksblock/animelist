import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'

const List = () => {
  const [anime, setAnime] = useState([])

  const url = 'https://api.jikan.moe/v4/anime?q=kimetsu no yaiba=&sfw'

  const fetchAPI = async () => {
    const data = await axios.get(url)
    setAnime(data.data.data)
  }

  useEffect(() => {
    return () => {
      fetchAPI()
    }
  }, [])

  return (
    <div className="cards">
      {anime?.map((e, id) => (
        <Card key={id} anime={e} />
      ))}
    </div>
  )
}

export default List
