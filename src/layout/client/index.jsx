import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom"

const ClientLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default ClientLayout