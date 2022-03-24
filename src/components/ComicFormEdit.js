import { useState } from 'react'
function ComicFormEdit({ editComic, submitEditComic }) {
  const [formData, setFormData] = useState(editComic)

  function handleChange (e) {
    const name = e.target.name;
    const value = e.target.value
    setFormData({...formData, [name]:value})
  }
  function handleSubmit (e) {
    e.preventDefault()
    fetch(`http://localhost:8004/comics/${editComic.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(submitEditComic)
  }
  return (

    <form onSubmit={handleSubmit} className="comic-form">

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input onChange={handleChange} value={formData["image_url"]} name="image_url" />

      <label htmlFor="title">Title: </label>
      <input onChange={handleChange} value={formData.title} name="title" />

      <label htmlFor="issue">Issue Number: </label>
      <input onChange={handleChange} value={formData.issue} name="issue" type="number" />

      <input type="submit" value="Edit Issue!" />

    </form>

  )
}

export default ComicFormEdit
