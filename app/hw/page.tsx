'use client'
import { useEffect, useState } from "react"

type TPost = {
    albumId: number,
    id: number,
    title: string,
}

export default function Fetch2() {

    const [posts, setPosts] = useState<TPost[]>([])

    useEffect(() => {
        const fetch2API = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/photos')
            const posts = await data.json()
            console.log("Posts: ", posts)
            setPosts(posts)
        }
        fetch2API()
    }, [])

  
    if (posts.length === 0) {
        // Check if profile is empty
        return <div>Loading...</div>
    }

    return (<div>
        <h1>Homework</h1>
        <ul>
            {
                posts.map((post: TPost, index: number) => {
                    if (index > 0 ) return ;

                    return (<li 
                        className="border border-gray-300 rounded mt-2 mr-2 p-4"
                        key={index}>
                        {index+1}. Title: {post.title} <br />
                        id: {post.id} <br />
                        albumId: {post.albumId} <br />
                    </li>)
                }
                )
            }


        </ul>

    </div>)
}