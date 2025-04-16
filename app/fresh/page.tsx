type TPost = {
    title: string
    author: string
}

export default async function Fetch2() {
    let posts = []

    try {
        const data = await fetch('https://api.vercel.app/blog')
        posts = await data.json()
        console.log("Posts: ", posts)
    
    } catch (error: unknown)  {
        console.log("Error: ", error) 
    }
  
    if (posts.length === 0) {
        // Check if profile is empty
        return <div>Loading...</div>
    }

    return (<div>
        <h1>Fetch2</h1>
        <ul>
            {
                posts.map((post: TPost, index: number) => {
                    if (index > 5 ) return ;

                    return (<li 
                        className="border border-gray-300 rounded mt-2 mr-2 p-4"
                        key={index}>
                        {index+1}. Title: {post.title} <br />
                        Name: {post.author} <br />
                    </li>)
                }
                )
            }


        </ul>

    </div>)
}