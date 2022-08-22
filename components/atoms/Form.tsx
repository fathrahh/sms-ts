import React from 'react';

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string;
  children: React.ReactNode;
}

export default function Form({
  title,
  children,
  style,
  onSubmit,
  autoComplete = 'off',
}: Props) {
  return (
    <form
      style={{
        ...style,
      }}
      className="w-full bg-gay text-black p-8 rounded-lg"
      onSubmit={onSubmit}
      autoComplete={autoComplete}
    >
      <h3 className="text-center text-xl font-bold mb-4">{title}</h3>
      {children}
    </form>
  );
}
