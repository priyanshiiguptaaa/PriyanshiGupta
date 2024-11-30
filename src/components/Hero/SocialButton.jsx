import React from 'react';

const SocialButton = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
    >
      {React.cloneElement(icon, {
        className: "w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
      })}
    </a>
  );
};

export default SocialButton;
