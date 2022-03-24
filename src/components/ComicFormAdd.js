import { useState } from 'react'
function ComicFormAdd({ addComic }) {
  const defaultState = {
    image_url: '',
    title: '',
    issue: 0,
  }
  const [formData, setFormData] = useState(defaultState)

  function handleChange (e) {
    const name = e.target.name;
    const value = e.target.value
    setFormData({...formData, [name]:value})
  }
  function handleSubmit (e) {
    e.preventDefault()
    fetch('http://localhost:8004/comics',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(addComic);
    setFormData(defaultState)
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

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicFormAdd
