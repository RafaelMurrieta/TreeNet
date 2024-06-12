import React from 'react'
import { useState } from 'react'
const createPost = () => {
  const [isOption, setIsOption] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState(null)
  const toggleOption = () => {
    setIsOption(!isOption)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Título:", title)
    console.log("Contenido:", content)
    console.log("Imagen:", image)
  }
  return (
    <div>
        {
        isOption ? (
            <button variant="outline" className="px-4 py-2 rounded-md button-fixed" onClick={toggleOption}>
              Cancelar
            </button>
          ) : (
            <button variant="outline" className="px-4 py-2 rounded-md button-fixed" onClick={toggleOption}>
              Crear una publicación
            </button>
          )}

      {/* <main className="py-8 px-4 md:px-8 ">
        <div className="w-full max-w-md mx-auto">
          <div>
            <div>Create Post</div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div htmlFor="title">Title</div>
              <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Write a title" />
            </div>
            <div className="space-y-2">
              <div htmlFor="content">Content</div>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post"
                className="min-h-[150px]"
              />
            </div>
            <div className="space-y-2">
              <div htmlFor="image">Image</div>
              <input id="image" type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>
          </div>
          <div>
            <button  onClick={handleSubmit} className="w-full ">
              Publish
            </button>
          </div>
        </div>
      </main> */}
    </div>
  )
}

export default createPost

