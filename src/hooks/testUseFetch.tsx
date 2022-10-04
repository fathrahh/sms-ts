import useFetch from './useFetch';

interface ResponseProduct {
  id: string;
  name: string;
  price: number;
}

export default function TestUseFetch() {
  const { response } = useFetch<ResponseProduct[]>();

  return <></>;
}
