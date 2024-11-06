import { Outlet, useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import Footer from "../components/Footer"
import Header from "../components/Header"
import { Toaster } from "react-hot-toast"
import DynamicTitleMaker from "../components/DynamicTitleMaker"

function AppLayout() {
  const obj = useLocation()
  const { category } = useParams()
  const [home, setHome] = useState(false)

  useEffect(() => {
    if (obj.pathname === `/gadget/${category}` || obj.pathname === "/") {
      setHome(true)
    } else {
      setHome(false)
    }
  }, [obj.pathname, category])

  return (
    <div>
      <DynamicTitleMaker />
      <div className="sora-font">
        <div
          className={`w-[95%]  mx-auto ${
            home ? "bg-custom rounded-t-xl text-white" : "bg-white"
          } `}
        >
          <Header />
        </div>
        <div className="min-h-[75vh]">
          <Outlet />
        </div>

        <Footer />

        <Toaster />
      </div>
    </div>
  )
}

export default AppLayout
