import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <style jsx>
        {`
          h2 {
            font-size: 38px;
            margin-bottom: 20px;
          }
          h3 {
            font-size: 28px;
          }
        `}
      </style>
      <div className={`${styles.container}`}>
        <h2>Popular Blogs</h2>
        <div className={`${styles.blogItem}`}>
          <Link href={`/blogpost/learn-javascript`}>
            <h3>How to learn Javascript in 2023?</h3>
          </Link>
          <p>Javascript is the language used to design logic website</p>
        </div>
        <div className={`${styles.blogItem}`}>
          <Link href={`/blogpost/learn-javascript`}>
            <h3>How to learn Javascript in 2023?</h3>
          </Link>
          <p>Javascript is the language used to design logic website</p>
        </div>
        <div className={`${styles.blogItem}`}>
          <Link href={`/blogpost/learn-javascript`}>
            <h3>How to learn Javascript in 2023?</h3>
          </Link>
          <p>Javascript is the language used to design logic website</p>
        </div>
      </div>
    </>
  );
};

export default Blog;
