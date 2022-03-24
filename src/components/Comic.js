import {useState} from 'react'
function Comic({ comicInfo, delComic,edit }) {
  const { title, issue, image_url } = comicInfo;
  const [toggle, setToggle] = useState(true)
  const [favToggle, setFavToggle] = useState(false)

  function handleDelete () {
    fetch(`http://localhost:8004/comics/${comicInfo.id}`,{method: 'DELETE'})
    .then(res => res.ok ? delComic(comicInfo.id) : alert("Delete failed..."))
  }

  function favorite () {
    setFavToggle(prev => !prev)
  }

  function handleEdit () {
    edit(comicInfo)
  }

  return (
    <div className="comic-item">

      {toggle ? <img onClick={()=> setToggle(prev => !prev)}src={image_url} alt={issue} /> : null}
      {!toggle ? <h3 onClick={()=> setToggle(prev => !prev)}>{title}</h3> : null}
      {!toggle ? <h4>{issue}</h4> : null}
      <button onClick={handleDelete}>Remove</button>
      <button onClick={favorite}>{favToggle ? "Favorite!": "Like?"}</button>
      <button onClick={handleEdit} style={{background: 'red'}} onClick={handleEdit}>Edit</button>

    </div>
  )

}

export default Comic
