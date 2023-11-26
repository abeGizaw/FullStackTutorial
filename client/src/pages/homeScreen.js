import axios from "axios";
import { useEffect, useState } from "react";
import CardPost from "../components/CardPost";

export default function HomeScreen() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []); //[] since there are no dependencies

  return (
    <div>
      {listOfPosts.map((value, index) => {
        return <CardPost />;
      })}
    </div>
  );
}
