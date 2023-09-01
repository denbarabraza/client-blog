import React, { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

interface IItemIntersectionObserver {
  item: React.ReactElement;
}

export const ItemIntersectionObserver: React.FC<IItemIntersectionObserver> = ({
  item,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === ref.current) {
            setVisible(isIntersecting);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`${visible ? styles.visibleItem : styles.noVisibleItem}`}>
      {item}
    </div>
  );
};
