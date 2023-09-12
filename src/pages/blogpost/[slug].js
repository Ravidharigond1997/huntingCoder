import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogItem.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.blog}`}>
          <h1>Title of the blog {slug}</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            unde repellat ipsum fugit vitae iste fugiat voluptates optio velit
            sapiente deserunt, inventore dolore quibusdam facilis odit tempore
            beatae, consequatur dignissimos?
          </p>
        </div>
      </div>
    </>
  );
};

export default slug;
