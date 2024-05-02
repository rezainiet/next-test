import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='mx-10 my-12'>
            <ul className='flex gap-5'>
                <Link href='/'><li>Homepage</li></Link>
                <Link href="/blogs"><li>Blogs</li></Link>
                <Link href="about"><li>About</li></Link>
            </ul>
        </div>
    )
}
