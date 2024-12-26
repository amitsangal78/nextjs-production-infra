import React from 'react';

import { twMerge } from 'tailwind-merge';

interface LabelProps {
  children: React.ReactNode;
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const Label: React.FC<LabelProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  backgroundColor = 'b',
  onClick,
}) => {
  const classes = twMerge(
    'text-sm font-medium',
    variant === 'default' && 'text-gray-600',
    variant === 'primary' && 'text-blue-600',
    variant === 'secondary' && 'text-gray-400',
    variant === 'success' && 'text-green-600',
    variant === 'error' && 'text-red-600',
    variant === 'warning' && 'text-yellow-600',
    size === 'sm' && 'text-xs',
    size === 'md' && 'text-sm',
    size === 'lg' && 'text-base',
    (backgroundColor !== '' && `bg-black`) || '',
    className
  );

  return <label className={classes}>{children}</label>;
};

export default Label;
