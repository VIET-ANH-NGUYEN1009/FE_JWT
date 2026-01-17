import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fectHello = async () => {
      const res = await axios.get(`/v1/api/`);
      console.log("check", res);
    };
    fectHello();
  });

  return <>hello world</>;
}

export default App;
