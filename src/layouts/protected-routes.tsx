import React, { Children } from 'react'
import { replace } from 'react-router-dom'

const ProtectedRoutes = ({children} :{children: React.ReactNode}) => {
   const {isLoaded,isSignedIn}=useAuth()
    if(!isLoaded){
        return <LoaderPage />
    }
  
    if(!isSignedIn){
        return <Navigate to="/signin"} replace />
    }
    return Children;
}

export default protected-routes
