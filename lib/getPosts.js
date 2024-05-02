export default async function Posts() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    return await result.json();
}