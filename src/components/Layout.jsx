import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="page-transition"
          unmountOnExit
        >
          <main>{children}</main>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Layout;