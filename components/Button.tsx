import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function Button({
  onClick,
  className = '',
  children,
  style,
  ...other
}: Props) {
  return (
    <button
      onClick={onClick}
      style={{ ...style }}
      className={`${className} bg-slate-600 text-white`}
      {...other}
    >
      {children}
    </button>
  );
}
