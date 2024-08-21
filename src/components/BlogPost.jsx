import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function BlogPost() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const apiKey = "AIzaSyB0oi4HLToMgAXG-xBqTGOy6taTjIMXDgM";
  const blogId = "7575416565313627035";
  const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=3`;

  const fetchBlogPosts = async () => {
    try {
      setIsloading(true);
      const response = await fetch(url);
      const data = await response.json();
      setBlogPosts(data.items);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <section className="pl-10 py-14">
      <h2 className="text-2xl font-bold text-blue-900 py-14">
        Latest Blog Posts
      </h2>
      {isError ? (
        <h4 className="text-red-500">Error Fetching Blog Posts</h4>
      ) : isloading ? (
        <Loader />
      ) : (
        <ul className="list flex flex-col gap-5">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <a href={post.url} target="_blank" rel="noreferrer">
                <h3 className=" text-xl font-semibold">{post.title}</h3>
                <span className="text-blue-900">Read More</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default BlogPost;
