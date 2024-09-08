import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

export default function App() {

  const [showModal, setShowModal] = useState(false)

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = '' + `?api_key=${NASA_KEY}`

      try {
        const res = await fetch(url)
        const data = await res.json()
        console.log('DATA\N, data')
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      <Main/>
      {showModal && (
        <SideBar handleToggleModal={handleToggleModal}/>
      )}
      <Footer handleToggleModal={handleToggleModal}/>
    </>
  )
}
