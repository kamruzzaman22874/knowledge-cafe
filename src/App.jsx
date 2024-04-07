import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookMarks, setBookMarks] = useState([])
  const [readingsTime, setReadingsTime] = useState(0)

  const handleAddBookmark = (blog) => {
    const newItem = bookMarks.find(item => item.id === blog.id)
    if (newItem) {
      alert("Already added this item")
    }
    else {
      const newBookMarks = [...bookMarks, blog];
      setBookMarks(newBookMarks)
    }
  }

  const handleAddReadigTime = (id, time) => {
    const newReadingTime = readingsTime + time;
    setReadingsTime(newReadingTime)
    console.log("Remove Add Marks: ", id)
    const remaining = bookMarks.filter(bookmark => bookmark.id !== id)
    setBookMarks(remaining)
  }
  return (
    <>
      <Header />
      <div className='md:flex justify-between max-w-6xl mx-auto'>
        <Blogs handleAddBookmark={handleAddBookmark} handleAddReadigTime={handleAddReadigTime} bookMarks={bookMarks} />
        <Bookmarks bookMarks={bookMarks} readingsTime={readingsTime} />
      </div>
    </>
  )
}

export default App
