import Link from 'next/link';

interface Props {
  href: string;
  title: string;
}

export default function AuthLink({ href, title }: Props) {
  return (
    <Link href={href} passHref>
      <a className="text-muted hover:text-white">{title}</a>
    </Link>
  );
}
