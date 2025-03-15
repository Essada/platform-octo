
import { Inter } from 'next/font/google'
/*text-5xl mb-3 font-[500]*/
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default async function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      
      <div className="w-full flex flex-row gap-12">
        
       
       <div className="w-full px-10">
        
        <div className="flex h-box justify-between mb-2"> 

        <p className="text-5xl bg-gradient-to-r from-green-200 to-stone-200 bg-clip-text text-transparent"> 
        Active Contests
        </p>
        <p className="text-5xl bg-gradient-to-r from-green-200 to-stone-200 bg-clip-text text-transparent px-80"> 
        Profile
        </p>
        </div>
        
        {children}
        

       </div>
        </div>
   
    
    );
  }
  