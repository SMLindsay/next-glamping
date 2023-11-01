import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/treehouse-logo.svg" alt="logo" width={218} height={87} />
      </Link>
    </nav>
  )
}

export default Navbar