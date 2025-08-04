import { Outlet } from 'react-router-dom'
import Header from '@/components/header'
import AuthHandler from '@/handlers/auth-handler'  
const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/*handler to store the user data*/}
      <AuthHandler />
      <Header/>
      <main>
        <Outlet/>
      </main>
      {/* <Footer/> */}

    </div>
  )
}

export { PublicLayout }
export default PublicLayout
