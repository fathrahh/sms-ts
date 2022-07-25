import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  onClick,
  className = "",
  children,
  ...other
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-slate-600 text-white`}
      {...other}
    >
      {children}
    </button>
  );
}
