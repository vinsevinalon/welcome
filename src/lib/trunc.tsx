import React, { useState } from 'react';

const SeeMore = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { text: string, limit: number }
>(({ text, limit, ...props }, ref) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  const renderText = () => {
    if (!text) {
      return ""; // return empty string if text is null
    }
    if (text.length <= limit) {
      return text; // return the text as is if it's short enough
    }
    if (isTruncated) {
      return (
        <>
          {text.substring(0, limit)}
          <span onClick={toggleTruncated} style={{color: 'blue', cursor: 'pointer'}}> See More</span>
        </>
      );
    } else {
      return (
        <>
          {text}
          <span onClick={toggleTruncated} style={{color: 'blue', cursor: 'pointer'}}> See Less</span>
        </>
      );
    }
  };

  return (
    <span ref={ref} {...props}>
      {renderText()}
    </span>
  );
});

SeeMore.displayName = "SeeMore";

export default SeeMore;