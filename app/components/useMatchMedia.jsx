import { useCallback, useSyncExternalStore } from 'react';

const useMatchMedia = query => {
  const subscribe = useCallback(
    callback => {
      const media = window.matchMedia(query);
      media.addEventListener('change', callback);

      return () => media.removeEventListener(`change`, callback);
    },
    [query]
  );

  const getSnapshot = useCallback(() => {
    console.log(`현재 ${query}에 대한 반응형 변경 감지됨.`);
    return window.matchMedia(query).matches;
  }, [query]);

  const getServerSnapshot = useCallback(() => {
    return false;
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useMatchMedia;
