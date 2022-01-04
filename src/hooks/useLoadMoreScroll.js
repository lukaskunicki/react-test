import { useEffect, useState } from "react";

const minLimit = 50;

const useLoadMoreScroll = (elementRef, { defaultMaxLimit, items }) => {
  // We need to ensure that the limit is not less than 50
  const maxLimit = defaultMaxLimit >= minLimit ? defaultMaxLimit : minLimit;

  const [itemsLimit, setItemsLimit] = useState(maxLimit);

  const scrollHandler = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const scrollPosition = scrollHeight - scrollTop;
    const bottomReached = scrollPosition <= clientHeight;
    if (!bottomReached) return;
    // If scrolled to the bottom, load more items
    setItemsLimit((prevState) => prevState + 200);
  };

  useEffect(() => {
    elementRef.current.scrollTop = 0;
    setItemsLimit(maxLimit);
  }, [items, maxLimit, elementRef]);

  return { itemsLimit, setItemsLimit, scrollHandler };
};

export default useLoadMoreScroll;
