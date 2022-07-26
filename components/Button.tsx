import React from 'react';

type SizeProps = 'small' | 'medium' | 'large' | 'full';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  size?: SizeProps;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function matchSize(size: SizeProps): string {
  switch (size) {
    case 'small':
      return '140px';
    case 'medium':
      return '170px';
    case 'large':
      return '240px';
    default:
      return '100%';
  }
}

export default function Button({
  onClick,
  className = '',
  children,
  size = 'full',
  style,
  ...other
}: Props) {
  let width = matchSize(size);

  return (
    <button
      onClick={onClick}
      style={{ width, ...style }}
      className={`${className} bg-slate-600 text-white`}
      {...other}
    >
      {children}
    </button>
  );
}
