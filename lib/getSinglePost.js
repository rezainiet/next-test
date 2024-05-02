export default async function getSinglePost(id) {
    console.log(id)
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return result.json();
}
