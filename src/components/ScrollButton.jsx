import { forwardRef } from "react";

const ScrollButton = forwardRef(({}, ref) => {
  function scrollUp() {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  return <button onClick={scrollUp}>Scroll To Top</button>;
});

export default ScrollButton;
