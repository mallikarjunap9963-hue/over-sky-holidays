import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'zoom-in';
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds (default: 1300ms for premium slow motion)
  threshold?: number;
  className?: string;
  triggerOnce?: boolean;
  style?: React.CSSProperties;
}

export function ScrollReveal({
  children,
  variant = 'fade-in-up',
  delay = 0,
  duration = 1300,
  threshold = 0.08,
  className = '',
  triggerOnce = true,
  style = {},
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'fade-in':
        return isIntersecting
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0';
      case 'fade-in-up':
        return isIntersecting
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12';
      case 'fade-in-down':
        return isIntersecting
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-12';
      case 'fade-in-left':
        return isIntersecting
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-12';
      case 'fade-in-right':
        return isIntersecting
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-12';
      case 'zoom-in':
        return isIntersecting
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95';
      default:
        return '';
    }
  };

  const combinedStyle = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth easeOutExpo deceleration curve
    ...style,
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${getVariantStyles()} ${className}`}
      style={combinedStyle}
    >
      {children}
    </div>
  );
}
