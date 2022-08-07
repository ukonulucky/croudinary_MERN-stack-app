import React, { useState } from 'react'
import axios from "axios"

function Upload() {

  const [imagePreview, setImagePreview] = useState('')
  const handleFileChange = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    previewImage(file)
  }

  const previewImage = (image) => {
    const reader = new FileReader
    const result2 = reader.readAsDataURL(image)
    reader.onload = () => {
        setImagePreview(reader.result)
    }
  }

  const handleSubmit =  (e) => {
    e.preventDefault()
    if (!imagePreview) return

    const uploadImage = async(base64EncodedUrl) => {
      try {
        const res = await axios.post("/api/saveImg",base64EncodedUrl )
        console.log(res)
      } catch (error) {
        console.log(error.message)
      }
    }
    uploadImage(imagePreview)

  }
  return (
    <div className="">
      <form className='row mt-5' onSubmit={handleSubmit}>
        <div className="form-gruop d-flex flex-column col-5 m-auto">
          <input type="file" className="form-control mb-3" name="image" value={ previewImage } onChange={ handleFileChange} />
          <button className="btn btn-primary h2 w-50 m-auto ">
            Submit
          </button>
        </div>
      </form>
      {imagePreview && 
        <div className='mt-5'>
          <h2 className='text-primary h2'>Selected Images</h2>
          <img src={ imagePreview} alt="img"  className='w-50 h-50 image'/>
        </div>}
   </div>
  )
}

export default Upload