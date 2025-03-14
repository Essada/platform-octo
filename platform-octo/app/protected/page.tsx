import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Opencontests from '/Users/adamessawi/platform-octo/platform-octo/app/mainfeed/open-contests.jsx';
import Profiles from '/Users/adamessawi/platform-octo/platform-octo/app/mainfeed/profile.jsx'
import Attributes from '/Users/adamessawi/platform-octo/platform-octo/app/mainfeed/attributes.jsx'


export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
   /*
    <div className="flex-1 w-full flex flex-col gap-12">
   <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          This is a protected page that you can only see as an authenticated
          user
        </div>
          <div className="flex flex-row gap-12"> 
            <div className="w-3/5" >
              <Opencontests />
            </div>
          <div className="w-2/5 bg-white"> 
            <Profiles />
          </div>
           
            
            


          </div>
       
      
      </div>
    </div>
    */
    
    
   
   
 
   <div className="flex-1 w-full h-[600px] flex h-box gap-7"> 
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none"></div>
      <div className="flex w-3/5 h-full bg-black"> 
        <Opencontests />
      
      </div>

      <div className="flex w-2/5 h-full bg-white bg-opacity-80"> 
        <div className="bg-gradient-to-t from-stone-50 to-green-300 bg-opacity-100 w-full h-1/2"> 
          <Profiles />
          <Attributes />
        </div>
      
      </div>
  </div>
  
  );
}
