import Lottie from "lottie-react";
import cat from "./cat-404.json";

const NotFound = () => (
  <div>
    <Lottie
      animationData={cat}
      loop={true}
      style={{ height: "50%", width: "50%", margin: "auto" }}
    />
  </div>
);

export default NotFound;
