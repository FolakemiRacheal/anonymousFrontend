import React from 'react';

const FeedbackLink = () => {
  const formLink = "https://docs.google.com/forms/d/1E4zh294VmrIYZbRvAUlyZMy5GMGDIPrpmzVmFdOmOz0/edit"; // Replace with your actual Google Form link

  return (
    <a href={formLink} target="_blank" rel="noopener noreferrer">
      Give us your feedback!
    </a>
  );
};

export default FeedbackLink;
