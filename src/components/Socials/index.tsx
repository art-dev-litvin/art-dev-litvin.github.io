import UpworkIcon from "../../assets/icons/upwork.svg?react";
import GithubIcon from "../../assets/icons/github.svg?react";
import WellFoundIcon from "../../assets/icons/wellfound.png";
import GmailIcon from "../../assets/icons/gmail.svg?react";
import { developerInfo } from "../../data/developerInfo";
import type { FC, SVGProps } from "react";
import classNames from "classnames";
import { SocialKey } from "../../types/TSocials";

export interface SocialsProps {
  className?: string;
}

interface IconConfig {
  component: FC<SVGProps<SVGSVGElement>> | string;
  customClass?: string;
}

const iconMap: Record<SocialKey, IconConfig> = {
  github: {
    component: GithubIcon,
    customClass: "dark:[&_path]:fill-white [&_path]:fill-gray-900",
  },
  upwork: {
    component: UpworkIcon,
    customClass: "",
  },
  wellfound: {
    component: WellFoundIcon,
    customClass: "",
  },
  gmail: {
    component: GmailIcon,
    customClass: "grayscale hover:grayscale-0 p-0.5 opacity-100",
  },
};

export default function Socials({ className }: SocialsProps) {
  const socials = developerInfo.socials;

  const baseStyles =
    "opacity-70 hover:opacity-100 transition-all duration-300 ";

  if (!socials) return null;

  return (
    <div className={classNames("flex items-center gap-3", className)}>
      {Object.entries(socials)
        .filter(([, href]) => !!href)
        .map(([key, href]) => {
          const config = iconMap[key as SocialKey];
          if (!config) return null; // skip unknown socials

          const { component: Icon, customClass } = config;
          const isStringIcon = typeof Icon === "string";

          const iconClasses = classNames(
            baseStyles,
            isStringIcon ? "size-8" : "size-8 lg:size-10",
            customClass,
          );

          return (
            <a
              key={key}
              target="_blank"
              rel="noopener noreferrer"
              href={href}
              className="flex items-center justify-center">
              {isStringIcon ? (
                <img src={Icon} alt={`${key} icon`} className={iconClasses} />
              ) : (
                <Icon className={iconClasses} />
              )}
            </a>
          );
        })}
    </div>
  );
}
