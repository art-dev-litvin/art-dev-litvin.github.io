import UpworkIcon from "../../assets/icons/upwork.svg?react";
import GithubIcon from "../../assets/icons/github.svg?react";
import WellFoundIcon from "../../assets/icons/wellfound.png";
import { developerInfo } from "../../data/developerInfo";
import type { FC, SVGProps } from "react";
import classNames from "classnames";

export interface SocialsProps {
  className?: string;
}

// mapping from social key to icon component
const iconMap: Record<string, FC<SVGProps<SVGSVGElement>> | string> = {
  github: GithubIcon,
  upwork: UpworkIcon,
  wellfound: WellFoundIcon,
};

export default function Socials({ className }: SocialsProps) {
  const socials = developerInfo.socials;
  const baseStyles =
    "opacity-70 hover:opacity-100 transition-all duration-300 dark:[&_path]:fill-white [&_path]:fill-gray-900";

  if (!socials) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Object.entries(socials)
        .filter(([, href]) => !!href)
        .map(([key, href]) => {
          const Icon = iconMap[key];
          if (!Icon) return null; // skip unknown socials

          if (typeof Icon === "string") {
            return (
              <a
                key={key}
                target="_blank"
                rel="noopener noreferrer"
                href={href}>
                <img
                  src={Icon}
                  alt=""
                  className={classNames(baseStyles, "size-8")}
                />
              </a>
            );
          }
          return (
            <a key={key} target="_blank" rel="noopener noreferrer" href={href}>
              <Icon className={classNames(baseStyles, "size-8 lg:size-10")} />
            </a>
          );
        })}
    </div>
  );
}
