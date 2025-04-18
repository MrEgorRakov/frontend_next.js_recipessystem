'use client'
import { useEffect, useState } from "react"
// Removed unnecessary imports and app.use(cors()) as it is not applicable in Next.js


type TPost = {
    id: number,
    username: string,
    email: string,
    phone_number: number,
}

export default function Meh() {
    
        const [posts, setPosts] = useState<TPost[]>([])
    
        useEffect(() => {
            const fetch2API = async () => {
                try {
                    const response = await fetch('http://localhost:3001/user')
                    if (!response.ok) throw new Error("Fetch failed")
                    const data = await response.json()
                    console.log("info: ", data)
                    setPosts(data)
                } catch (err) {
                    console.error("Failed to fetch users:", err)
                }
            }
            fetch2API()
        }, [])
      

    
        return (
        <div className="min w-screen  h-screen">
            <h1>List of users</h1>
            <ul>
                {
                    posts.map((post: TPost, index: number) => {
                        
    
                        return (<li 
                            className="border border-gray-300 rounded mt-2 mr-2 p-4"
                            key={index}> 
                            id: {post.id} <br />
                            username: {post.username} <br />
                            email: {post.email} <br />
                            phone_number: {post.phone_number} <br />
                        </li>)
                    }
                    )
                }
    
    
            </ul>
    
        </div>)
}