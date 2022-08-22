interface Props {
  width?: number;
  height?: number;
}

export default function Gap({ width, height }: Props) {
  return <div style={{ width, height }} />;
}
