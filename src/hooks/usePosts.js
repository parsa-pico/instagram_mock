import { useContext, useEffect, useState } from "react";
import postsContext from "../Context/postsContext";

export default function useUser() {
  const [posts, setPosts] = useContext(postsContext);

  return [posts, setPosts];
}
