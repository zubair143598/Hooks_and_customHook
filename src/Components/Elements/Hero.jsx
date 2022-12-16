import { useState } from "react";
import useCountTitle from "./useCountTitle";

const Hero = () => {
  const [count, setCount] = useState(0);
  useCountTitle(count);
  console.log("the hook is working");
  const Incriment = () => {
    setCount(count + 1);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center mt-5">
          <h1>{count}</h1>
          <button className="btn btn-primary" onClick={Incriment}>
            click to count
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
