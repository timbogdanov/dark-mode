import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.querySelector('.body');
    darkMode
      ? body.classList.add('dark-mode')
      : body.classList.remove('dark-mode');
  }, [darkMode]);

  return [darkMode, toggleMode];
};
