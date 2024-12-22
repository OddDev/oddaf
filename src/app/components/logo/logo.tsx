import Image from 'next/image';
import OddLogo from '../../../../public/odd_logo.webp';

export default function Logo() {
  return (
  <Image
      src={OddLogo}
      alt="A minimal logo showing three interconnected circles. The last circle is filled, as opposed to the others."
      width={32}
      height={32}
      />
  );
}
