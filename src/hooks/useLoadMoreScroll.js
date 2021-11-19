import { useEffect, useState } from "react";

const useLoadMoreScroll = (elementRef, { defaultLimit, items }) => {
  const [itemsLimit, setItemsLimit] = useState(100);

  const scrollHandler = (e) => {
    const element = e.target;
    const targetHeight = element.offsetHeight + element.scrollTop + 100;
    if (targetHeight <= element.scrollHeight) return;
    if (itemsLimit < items.length)
      setItemsLimit((prevState) => prevState + 200);
  };

  useEffect(() => {
    elementRef.current.scrollTop = 0;
    setItemsLimit(defaultLimit);
  }, [items, defaultLimit, elementRef]);

  return { itemsLimit, setItemsLimit, scrollHandler };
};

export default useLoadMoreScroll;
