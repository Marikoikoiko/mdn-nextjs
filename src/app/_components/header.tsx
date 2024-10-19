import Link from "next/link";
import { BLOG_TITLE } from "@/lib/constants";

const Header = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
        <Link href="/" className="font-alice hover:underline">
        {BLOG_TITLE} 
        </Link>
      </h2>
    </>
  );
};

export default Header;
