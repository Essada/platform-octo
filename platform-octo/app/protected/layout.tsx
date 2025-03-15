export default async function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
    
      <div className="w-full flex flex-row gap-12">
       <div className="w-full px-10">
        {children}

       </div>
        </div>
    
    );
  }
  