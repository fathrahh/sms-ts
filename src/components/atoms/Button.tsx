import React, { useRef, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

import ripple from './../../styles/RippleEffect.module.scss';

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
      className={`absolute bg-white h-4 w-4 scale-0 rounded-full bg-white/70 ${ripple.ripple}`}
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

  const buttonRef = useRef<HTMLButtonElement>(null);

  const [rippleEffect, setRippleEffect] = useState<RippleProp[]>([]);
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick();
    const _button = event.currentTarget;
    let { x, y } = _button.getBoundingClientRect();
    let posX = event.clientX - x;
    let posY = event.clientY - y;
    let ripplePos = { posX, posY };
    setRippleEffect([...rippleEffect, ripplePos]);
  };

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     const temporaryRipple = [...rippleEffect];
  //     temporaryRipple.shift();
  //     setRippleEffect([...temporaryRipple]);
  //   }, 2000);
  // }, [rippleEffect]);

  return (
    <button
      ref={buttonRef}
      onClick={handleOnClick}
      disabled={isDisabled}
      style={{ width, ...style }}
      className={`relative bg-orange overflow-hidden uppercase w-full font-bold py-2 px-2 hover:shadow-md transition-colors hover:bg-orange/80
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
