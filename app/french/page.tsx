'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function FetchAPI() {
    const [name, setName] = useState('wwarodom')
    const [profile, setProfile] = useState({})

    const fetchAPI = async () => {
        const data = await fetch(`https://api.github.com/users/${name}`)
        const profile = await data.json()
        setProfile(profile)
    }

    useEffect( () => {
        const myFetch = async () => {
            await fetchAPI()
        }
        myFetch()
    }, [])

    if ( Object.keys(profile).length === 0) {
        // Check if profile is empty
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Fetch API</h2>
            <div>{
                JSON.stringify(profile)}</div>
            <hr /><br />
            <div className='flex items-center gap-4 m-4 border border-gray-300 p-4 rounded-lg'>
                <div>
                    <Image
                        className="rounded-full"
                        src={profile.avatar_url}
                        alt="Avatar"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <div>
                        Login: {profile.login}
                    </div>
                    <div>
                        id: {profile.id}
                    </div>
                    <div>
                        <input
                            className='border border-gray-300 rounded mt-2 mr-2'
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button
                            onClick={fetchAPI}
                            className='border px-2'
                        >Update</button>
                    </div>
                </div>



            </div>
        </div>)
}