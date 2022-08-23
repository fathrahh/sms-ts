interface Props {
  msg?: string;
}

export default function ErrorMessage({ msg }: Props) {
  return (
    <div className="my-2 w-full py-2 text-center font-medium text-sm text-red-500 rounded-md">
      <span>{msg}</span>
    </div>
  );
}
