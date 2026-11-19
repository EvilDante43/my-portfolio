import { useEffect } from "react";

function Loader({ onComplete }) {
  useEffect(() => {
    if (onComplete) onComplete();
  }, [onComplete]);

  return null;
}

export default Loader;
