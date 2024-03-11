import Link from "next/link";

import {
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

export const socialData = [

  {
    name: "LinkedIn",
    link: "https://LinkedIn.com",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/Nicko57",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className=" items-center gap-x-5 text-lg xl:flex xl:max-w-none pointer-events-none select-none hidden">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
