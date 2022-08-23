import React, { useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

type SizeProps = 'small' | 'medium' | 'large' | 'full';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  size?: SizeProps;
  isDisabled?: boolean;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

function matchSize(size: SizeProps): string {
  switch (size) {
    case 'small':
      return '120px';
    case 'medium':
      return '170px';
    case 'large':
      return '240px';
    default:
      return '100%';
  }
}

type RippleProp = {
  posX: number | string;
  posY: number | string;
};
function Ripple({ posX, posY }: RippleProp) {
  return (
    <span
      className="absolute bg-white h-4 w-4"
      style={{
        left: posX,
        top: posY,
      }}
    />
  );
}

export default function Button({
  onClick = () => {},
  className = '',
  children,
  size = 'full',
  variant = 'primary',
  style,
  isDisabled = false,
  isLoading = false,
  ...other
}: Props) {
  let width = matchSize(size);

  const [rippleEffect, setRippleEffect] = useState<RippleProp[]>([]);
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick();
    const _button = event.currentTarget;
    let posX = event.clientX - _button.offsetLeft;
    let posY = event.clientY - _button.offsetTop;
    let ripplePos = { posX, posY };
    setRippleEffect([...rippleEffect, ripplePos]);
    setTimeout(() => {
      const temporaryRipple = [...rippleEffect];
      temporaryRipple.shift();
      setRippleEffect([...temporaryRipple]);
    }, 2000);
  };

  console.log(rippleEffect);

  return (
    <button
      onClick={handleOnClick}
      disabled={isDisabled}
      style={{ width, ...style }}
      className={`bg-orange uppercase w-full font-bold py-2 px-2 hover:shadow-md hover:brightness-90
      ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...other}
    >
      {isLoading ? (
        <BiLoaderAlt className="animate-spin" size={24} />
      ) : (
        children
      )}
      {rippleEffect &&
        rippleEffect.map(({ posX, posY }, idx) => (
          <Ripple key={idx} posX={posX} posY={posY} />
        ))}
    </button>
  );
}
