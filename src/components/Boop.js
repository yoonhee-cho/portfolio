import React from 'react'
import { animated, useSpring } from 'react-spring';

const Boop = ({ x=0, y=0, timing = 150, children }) => {

    const [isBooped, setIsBooped] = React.useState(false);

    const style = useSpring({
      display: 'inline-block',
      backfaceVisibility: 'hidden',
      transform: isBooped
        ? `translate(${x}px, ${16}px)`
        : `translate(0px, 0px)`,
        config: {
            tension: 300,
            friction: 10,
        },
    });

    React.useEffect(() => {
      if (!isBooped) {
        return;
      }

      const timeoutId = window.setTimeout(() => {
        setIsBooped(false);
      }, timing);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }, [isBooped, timing]);

    const trigger = () => {
      setIsBooped(true);
    };

    return (
      <animated.span onMouseEnter={trigger} style={style}>
        {children}
      </animated.span>
    );
};

export default Boop