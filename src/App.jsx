import axios from "./util/axios.custiomzie";

// import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fectHello = async () => {
      const res = await axios.get("/v1/api/");
      console.log("check", res); // "hello world"
    };
    fectHello();
  }, []);

  return <>hello world</>;
}

export default App;
