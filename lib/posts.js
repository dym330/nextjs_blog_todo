import fetch from "node-fetch";

export async function getAllPostsData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`)
  );
  const posts = await res.json();
  const fillteredPosts = posts.sort(
    (a, b) => new Date(b.create_at) - new Date(a.create_at)
  );
  return fillteredPosts;
}
