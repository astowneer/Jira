import { useEffect, useRef } from 'react';

function useOutsideClick<T extends HTMLElement>(handler: (event: MouseEvent) => void): React.RefObject<T | null> {
  const ref = useRef<T | null>(null); // Allow null for the initial state

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click was outside the ref element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event); // Call the handler if the click was outside
      }
    };

    // Attach event listener for mouse click outside
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup on unmount or when ref changes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler]);

  return ref; // Return the ref as RefObject<T | null>
}

export default useOutsideClick;
