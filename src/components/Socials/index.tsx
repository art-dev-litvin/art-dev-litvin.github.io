import UpworkIcon from "../../assets/icons/upwork.svg?react";
import GithubIcon from "../../assets/icons/github.svg?react";
import { developerInfo } from "../../data/developerInfo";
import type { FC, SVGProps } from "react";

export interface SocialsProps {
  className?: string;
}

// mapping from social key to icon component
const iconMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  upwork: UpworkIcon,
};

export default function Socials({ className }: SocialsProps) {
  const socials = developerInfo.socials;
  const baseStyles =
    "size-8 lg:size-10 opacity-70 hover:opacity-100 transition-all duration-300 dark:[&_path]:fill-white [&_path]:fill-gray-900";

  if (!socials) return null;

  return (
    <div className={`flex gap-3 ${className}`}>
      {Object.entries(socials)
        .filter(([, href]) => !!href)
        .map(([key, href]) => {
          const Icon = iconMap[key];
          if (!Icon) return null; // skip unknown socials
          return (
            <a key={key} target="_blank" rel="noopener noreferrer" href={href}>
              <Icon className={baseStyles} />
            </a>
          );
        })}
    </div>
  );
}
