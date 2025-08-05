import { Outlet } from 'react-router-dom'
import Header from '@/components/header'
import AuthHandler from '@/handlers/auth-handler'  
import Footer from '@/components/ui/footer'
const PublicLayout = () => {
  return (
    <div className="w-full ">
      {/*handler to store the user data*/}
      <AuthHandler />
      <Header/>
      
        <Outlet/>
  
       <Footer/>

    </div>
  )
}

export { PublicLayout }
export default PublicLayout
