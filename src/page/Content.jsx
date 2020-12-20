import React, { useCallback, useState } from 'react';
import ContentView from './ContentView';

const Content = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenuOpen = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen]);

  return (
    <ContentView {...{toggleMenuOpen, isMenuOpen}} />
  );
}

export default Content;