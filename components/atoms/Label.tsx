import React from 'react';

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

export default function Label({
  style,
  className = '',
  children,
  ...other
}: Props) {
  return (
    <label
      style={{
        ...style,
      }}
      className={`font-semibold text-lg text-black uppercase cursor-pointer ${className}`}
      {...other}
    >
      {children}
    </label>
  );
}
