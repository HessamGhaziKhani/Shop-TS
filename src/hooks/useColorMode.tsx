import { useEffect } from 'react';
import {useLocalStorage} from './useLocalStorage';

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');

  useEffect(() => {
    const className = 'dark';
    const htmlClass = window.document.documentElement.classList;

    colorMode === 'dark'
      ? htmlClass.add(className)
      : htmlClass.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode] as const;
};

export default useColorMode;