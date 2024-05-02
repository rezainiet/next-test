import React from 'react'
import getPosts from "@/lib/getPosts"
import Link from 'next/link'




export default async function BlogPage() {
    const posts = await getPosts();
    return (
        <main>
            <div>
                <p>This is the page of blogs.</p>
                <div className='mt-6'>
                    <ol>
                        {
                            posts.map(post =>
                                <li key={post.id} className='my-1'>
                                    {post.id}. <span className='text-gray-600'>
                                        <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                                    </span>
                                </li>
                            )
                        }
                    </ol>
                </div>
            </div>
        </main>
    )
}
