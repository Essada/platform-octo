

import { Avatar } from "flowbite-react";
import Badge from '@mui/joy/Badge';


const Profiles = () => {
   




    return (
    
    <div className="flex box-content h-box w-1/5 h-20 ml-5 gap-3">
        <Avatar rounded />
        <div className="flex flex-col v-box items-center justify-center">
        <p className="text-base text-black"> 
        Adess
        </p>
        
        <p className="text-xs bg-gradient-to-r from-orange-400 to-gray-500 bg-clip-text text-transparent"> 
        Developer
        </p>
        
        </div>
    </div> 



    )
}
export default Profiles