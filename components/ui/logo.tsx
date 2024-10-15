import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="univerHub">
      <Image
        src="/images/logohub.png" // Path relative to the 'public' directory
        alt="univerHub Logo"
        width={38} // Adjust width as needed
        height={38} // Adjust height as needed
      />
    </Link>
  );
}
