const Card = ({ anime }: { anime: any }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={anime.images.jpg.image_url} alt="" />
        <h1>{anime.title}</h1>
      </div>
    </div>
  )
}

export default Card
