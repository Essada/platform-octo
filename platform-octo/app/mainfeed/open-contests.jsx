


"use client";
import { Table } from "flowbite-react";
import {useEffect, useState } from 'react'
import {createClient} from "@/utils/supabase/client";


const Opencontests = () => {
    const [Feed, setFeed] = useState([])

    useEffect(() => {
        const supabase = createClient();

        const fetchContests = async () => {
            const { data, error } = await supabase
            .from("main_feed")
            .select("id, company, start, end, theme, status")
            
            if (error) {
                
                console.log(error.message)
            }
            else {
                console.log(data)
            setFeed(data)
            }
        }
        
        fetchContests();
    }, []) 




return (
<div className="overflow-x-auto">
<Table>
        <Table.Head>
          <Table.HeadCell>Company</Table.HeadCell>
          <Table.HeadCell>Start</Table.HeadCell>
          <Table.HeadCell>End </Table.HeadCell>
          <Table.HeadCell>Theme</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>


        <Table.Body className="divide-y">
            {
                Feed.map(({company, start, end, theme, status, id}) =>  (
                    
                    <Table.Row key={id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {company}
                    </Table.Cell>
                    <Table.Cell>{new Date(start).toLocaleDateString("en-US")}</Table.Cell>
                    <Table.Cell>{new Date(start).toLocaleDateString("en-US")}</Table.Cell>
                    <Table.Cell>{theme}</Table.Cell>
                    <Table.Cell>{status}</Table.Cell>
                    <Table.Cell>
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                    </a>
                    </Table.Cell>
                    </Table.Row>
                    ))}
        </Table.Body>
        </Table>
    </div>

)
                }


export default Opencontests;