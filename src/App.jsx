import { useEffect, useState } from "react"
import Blogs from "./Blogs/Blogs"
import Header from "./Header/Header"
import Bookmarks from "./Bookmarks/Bookmarks"


function App() {
  const [data, setData] = useState([])
  const [bookMark, setBookMark] = useState([])
  const [readTime, setReadTime] = useState(0)
  useEffect(() => {
    fetch('fack_api.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const addBookMark = (title) => {
    const newMark = [...bookMark, title]
    setBookMark(newMark)

  }
  const readTimeSetFunction = (time, id) => {
    const time_num = parseFloat(time)
    setReadTime(readTime + time_num)
    // console.log(bookMark);

    // const removingTime = data.filter(reading => reading.id !== id)
    // console.log(removingTime);
    // setBookMark(removingTime)
  }
  console.log(bookMark);

  return (
    <div className="md:container mx-auto px-4 my-5">
      <Header />
      <main className="flex gap-2">

        <Blogs data={data}
          addBookMark={addBookMark}
          readTimeSetFunction={readTimeSetFunction} />
        <Bookmarks data={data}
          bookMark={bookMark}
          readTime={readTime}
        />
      </main>
    </div>
  )
}

export default App
