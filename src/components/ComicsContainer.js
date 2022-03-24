import Comic from "./Comic"
import { useState } from 'react' 

function ComicsContainer( {comicList, delComic, edit }) {

  const renderComics = comicList.map(comic => 
  <Comic delComic={delComic} key={comic.id} edit={edit} comicInfo={comic}/>)

  return (
    <>
      {renderComics}
    </>
  )

}

export default ComicsContainer
