import {Outlet} from "react-router-dom";

export const Generate = () => {
  return (
    <div className="flex flex-col w-full h-full md:px-12 px-4 py-6">
      <Outlet/>
    </div>
  )
}

export default Generate;
