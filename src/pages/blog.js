import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// step1: collect all the files from blogdata directory
// step2: Iterate through then and dispaly them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  useEffect(() => {}, []);
  return (
    <>
      <style jsx>
        {`
          h2 {
            font-size: 38px;
            margin-bottom: 20px;
          }
        `}
      </style>
      <div className={`${styles.container}`}>
        {blogs.map((blogItem) => {
          return (
            <div className={`${styles.blogItem}`} key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogItem.title}</h3>
              </Link>
              <p className={styles.blogItemp}>
                {blogItem.content.substr(0, 200)}....
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  // Pass data to the page via props
  return { props: { allBlogs } };
}

export default Blog;
