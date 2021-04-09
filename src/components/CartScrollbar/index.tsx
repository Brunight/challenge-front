import React, { useCallback, useEffect, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const CartScrollbar: React.FC = ({ children }) => {
  const [position, setPosition] = useState(0);

  const handleScroll = useCallback((event: Event) => {
    if (position >= 1) {
      console.log("Reached scroll end!");
      event.stopPropagation();
    }
  }, [position]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Scrollbars
      style={{ flex: 1 }}
      onUpdate={(values) => setPosition(values.top)}
      renderThumbVertical={(style, ...props) => 
        <div 
          {...props} 
          style={{ ...style, backgroundColor: '#707070', width: 10 }}
        />
      }
    >
      {children}
    </Scrollbars>
  );
}

export default CartScrollbar;