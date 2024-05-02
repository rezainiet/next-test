// Import necessary functions
import getSinglePost from '@/lib/getSinglePost';
import getPosts from "@/lib/getPosts";
import React from 'react'

// Define the generateStaticParams function


// Define the component for the dynamic route
export default async function SingleBlog({ params }) {
    // Destructure the ID from params
    const { id } = params;

    // Fetch the single post using the ID
    const singlePost = await getSinglePost(id);

    // Return the JSX for displaying the single post
    return (
        <div>
            This is the blog number: {id}
            <p>{singlePost.title}</p>
        </div>
    );
}

export async function generateStaticParams() {
    // Fetch posts from your data source
    const posts = await getPosts();

    // Map posts to generate static parameters
    return posts.map((post) => ({
        id: post.id.toString()
    }));
}