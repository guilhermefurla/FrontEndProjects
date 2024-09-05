import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

export default function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Main/>
      {showModal && (
        <SideBar/>
      )}
      <Footer/>
    </>
  )
}
