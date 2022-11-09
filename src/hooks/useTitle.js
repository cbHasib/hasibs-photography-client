import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Hasib's Photography`;
  }, [title]);
};

export default useTitle;
