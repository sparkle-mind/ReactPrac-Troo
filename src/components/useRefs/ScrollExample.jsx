import React, { useRef, useState } from 'react';

function ScrollExample() {
  // Create a ref for the scrollable container
  const scrollRef = useRef();

  // State to store scroll position
  const [scrollY, setScrollY] = useState(0);

  // Function to scroll the div to the top
  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0; // Scroll to the top
    }
  };

  // Function to update scroll position in state
  const scrollFromY = () => {
    if (scrollRef.current) {
      setScrollY(scrollRef.current.scrollTop); // Update scrollY state
    }
  };

  return (
    <div>
      <h2>Scroll to Top Example</h2>
      <div
        ref={scrollRef}
        style={{
          width: '100%',
          height: '200px',
          overflowY: 'scroll',
          border: '1px solid black',
          padding:"15px"
          
        }}
        onScroll={scrollFromY} // Trigger scroll position update on scroll
      >
        <div style={{ height: '600px' }}>
          <p>Scroll down to see the effect...</p>
          <p>Content continues here...</p>
          <p>Keep scrolling...</p>
          <p>And more...</p>
          <p>Even more...</p>
        </div>
      </div>
      <button onClick={scrollToTop}>Scroll to Top</button>
      <h4>Current Scroll Position: {scrollY}</h4> {/* Display the scroll position */}
    </div>
  );
}

export default ScrollExample;
    