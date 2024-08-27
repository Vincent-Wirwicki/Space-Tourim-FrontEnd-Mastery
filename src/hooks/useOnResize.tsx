import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const useOnResize = () => {
  const [widthScreen, setWidthScreen] = useState(0);
  const [width] = useDebounce(widthScreen, 100);

  useEffect(() => {
    const onResize = () => setWidthScreen(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
};

export default useOnResize;
