import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogItem.module.css";

const slug = (props) => {
  const router = useRouter();

  const [blog, setBlog] = useState(props.myBlog);

  useEffect(() => {}, [router.isReady]);
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.blog}`}>
          <h1>{blog && blog.title}</h1>
          <hr />
          <p>{blog && blog.content}</p>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();
  // Pass data to the page via props
  return { props: { myBlog } };
}

export default slug;
