import React, { useEffect, useState } from 'react';

export const useCustomInfiniteScroll = (components: React.JSX.Element[]) => {
  const [componentsInPage, setComponentsInPage] = useState(components.slice(0, 1));

  const handleScroll = () => {
    const footerHeight = document.getElementById('footer')?.clientHeight!;

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - footerHeight
    ) {
      const nextComponent = components[componentsInPage.length];

      setComponentsInPage(prev => [...prev, nextComponent]);
    }
  };

  useEffect(() => {
    if (componentsInPage.length !== components.length) {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }

    return () => {};
  }, [componentsInPage]);

  return componentsInPage;
};
