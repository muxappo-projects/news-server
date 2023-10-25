import { forwardRef } from "react";

const ScrollButton = forwardRef(({}, ref) => {
  function scrollUp() {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  return <button onClick={scrollUp}>Back to Top</button>;
});

export default ScrollButton;
