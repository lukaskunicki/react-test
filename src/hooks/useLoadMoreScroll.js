import { useEffect, useState } from "react";

const useLoadMoreScroll = (elementRef, { defaultLimit, items }) => {
  const [itemsLimit, setItemsLimit] = useState(defaultLimit);

  const scrollHandler = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const scrollPosition = scrollHeight - scrollTop;
    const bottomReached = scrollPosition <= clientHeight;
    if (!bottomReached) return;
    setItemsLimit((prevState) => prevState + 200);
  };

  useEffect(() => {
    elementRef.current.scrollTop = 0;
    setItemsLimit(defaultLimit);
  }, [items, defaultLimit, elementRef]);

  return { itemsLimit, setItemsLimit, scrollHandler };
};

export default useLoadMoreScroll;
