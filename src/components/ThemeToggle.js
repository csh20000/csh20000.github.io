import { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMonitor, FiChevronDown } from 'react-icons/fi';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      root.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'system');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark-mode');
      } else {
        root.classList.remove('dark-mode');
      }
    }
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    setDropdownOpen(false);
  };

  const getIcon = () => {
    const iconClass = theme === 'dark' ? 'text-white' : 'text-black';
    if (theme === 'dark') return <FiMoon size="24px" className={iconClass} />;
    if (theme === 'light') return <FiSun size="24px" className={iconClass} />;
    return <FiMonitor size="24px" className={iconClass} />;
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setDropdownOpen(!dropdownOpen)} className="p-2 rounded flex items-center justify-center hover:bg-white dark:hover:bg-gray-600">
        {getIcon()}
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-full bg-gray-100 dark:bg-gray-700 rounded-md shadow-lg z-10">
          <button onClick={() => toggleTheme('light')} className="block w-full py-2 flex justify-center hover:bg-white dark:hover:bg-gray-600">
            <FiSun size="24px" className='dark:invert'/>
          </button>
          <button onClick={() => toggleTheme('dark')} className="block w-full py-2 flex justify-center hover:bg-white dark:hover:bg-gray-600">
            <FiMoon size="24px" className='dark:invert'/>
          </button>
          <button onClick={() => toggleTheme('system')} className="block w-full py-2 flex justify-center hover:bg-white dark:hover:bg-gray-600">
            <FiMonitor size="24px" className='dark:invert'/>
          </button>
        </div>
      )}
    </div>

  );
};

export default ThemeToggle;
