import ComicsContainer from "./ComicsContainer"
import ComicFormAdd from "./ComicFormAdd"
import ComicFormEdit from "./ComicFormEdit"
import { useState, useEffect } from 'react'

function App() {
  const [comicList, setComics] = useState([])
  const [editComic, setEdit] = useState(false)
  useEffect(() => {
    fetch('http://localhost:8004/comics')
    .then(res => res.json())
    .then(setComics)
  }, [])

  function addComic (newComic) {
    setComics([...comicList, newComic])
  }

  function delComic (id) {
    setComics(comicList.filter(comic => comic.id !== id))
  }

  function edit (comic) {
    setEdit(comic)
  }

  function submitEditComic (editComic) {
    setComics(comicList.map(comic => comic.id !== editComic.id ? comic : editComic))
    setEdit(false)
  }

  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer edit={edit} comicList={comicList} delComic={delComic}/>
        </div>

        <div className="sidebar">
          <ComicFormAdd key="add" addComic={addComic}/>
          {editComic ? <ComicFormEdit submitEditComic={submitEditComic} key="edit" editComic={editComic} /> : null}
        </div>

      </div>


    </div>
  );
}

export default App;
