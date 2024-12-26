import React from 'react';

import { twMerge } from 'tailwind-merge';

enum Variant {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

interface LabelProps {
  children: React.ReactNode;
  variant?: Variant;
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
