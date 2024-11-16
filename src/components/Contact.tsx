import { FloatingDock } from "@/components/ui/floating-dock";
import { ContactProps, SocialLinkProps } from "@/types";
import { Icon } from "@iconify/react";

export default function Contact({ className }: ContactProps) {
  const links: SocialLinkProps[] = [
    {
      title: "Mail",
      icon: (
        <Icon
          icon="material-symbols:mail"
          className="h-full w-full text-customText"
        />
      ),
      href: "mailto:alkahfii2018@gmail.com",
      target: "_blank",
    },
    {
      title: "Github",
      icon: <Icon icon="mdi:github" className="h-full w-full text-customText" />,
      href: "https://github.com/KahfiSmith",
      target: "_blank",
    },
    {
      title: "LinkedIn",
      icon: (
        <Icon icon="mdi:linkedin" className="h-full w-full text-customText" />
      ),
      href: "https://www.linkedin.com/in/mohamad-al-kahfi-b48107271/",
      target: "_blank",
    },
    {
      title: "Facebook",
      icon: (
        <Icon
          icon="ic:outline-facebook"
          className="h-full w-full text-customText"
        />
      ),
      href: "https://www.facebook.com/groups/270376331661364",
      target: "_blank",
    },
    {
      title: "Instagram",
      icon: (
        <Icon icon="mdi:instagram" className="h-full w-full text-customText" />
      ),
      href: "https://www.instagram.com/alkaahfi__/",
      target: "_blank",
    },
  ];

  return (
    <div
      className={`flex items-center justify-center w-full ${className ?? ""}`}
    >
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
