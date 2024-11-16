import Image from "next/image";
import Link from "next/link";
import React from "react";
import myLogo from "../../public/logo.png";

const Header = () => {
  return (
    <>
      <header className="flex justify-between mx-7 my-4 sm:my-3 sm:mx-4 sm*:text-sm" >
        <div>
          <Link href={"/"}>
        <Image
      src={myLogo}
      width={90}
      height={113}
      alt="Logo of the website"
      className="sm:w-14 md:w-20"
      />
      </Link>
        </div>
        <div className="sm:text-center ">
          <p >Tuition Free Education Program on Latest Technologies</p>
        </div>
        <div>
          <ul className="flex justify-between gap-8 sm:gap-3 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/apply">Apply</Link>
            </li>
            <li>
              <Link href="/jobs">Jobs</Link>
            </li>
            <li>
              <Link href="/result">Result</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
