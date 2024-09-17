import { useContext, useEffect, useState } from "react";
import WelcomeMsg from "./WelcomeMsg";
import Post from "./Post";
import LodingSppiner from "./LodingSppiner";
import { PostListData } from "../Store/Post-List-Store";

const PostList = () => {
  const { postList, addMultiplePosts } = useContext(PostListData);

  // const [dataFetched, setDataFetched] = useState(false);

  // if (!dataFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addMultiplePosts(data.posts);
  //     });
  //   setDataFetched(true);
  // }

  const [fectching, setFectching] = useState(false);

  useEffect(() => {
    setFectching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addMultiplePosts(data.posts);
        setFectching(false);
      });

    return () => {
      console.log("Cleaning up");
      controller.abort();
    }
  }, []);

  // const handleOnFetch = () => {
  //   alert("30 New Posts Updated Succesfully!");
  // };

  return (
    <>
      {fectching && <LodingSppiner />}
      {!fectching && postList.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {!fectching &&
        postList.map((post) => <Post key={post.id} postData={post} />)}
    </>
  );
};

export default PostList;
