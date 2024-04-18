import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

/**
 * @title {{{text}}}
 */
export interface MenuItem {
  text?: string;
  url?: string;
}

export interface Props {
  logo?: {
    icon: AvailableIcons;
    text: string;
  };
  menu?: MenuItem[];
}

const NavItem = ({
  text = "Link",
  url = "#",
}: MenuItem) => {
  return (
    <a class="text-lg text-primary" href={url} title={text}>
      {text}
    </a>
  );
};

export default function Header({
  logo = {
    icon: "Logo",
    text: "Viage",
  },
  menu = [
    {
      text: "Link",
      url: "#",
    },
    {
      text: "Link",
      url: "#",
    },
    {
      text: "Link",
      url: "#",
    },
    {
      text: "Link",
      url: "#",
    },
  ],
}: Props) {
  return (
    <section class="mx-auto container py-1">
      <article class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <Icon
            id={logo.icon}
            width={80}
            height={80}
          />
          <span class="text-lg text-primary">
            {logo.text}
          </span>
        </div>
        <nav class="flex items-center gap-12">
          {menu.map((menuItem) => <NavItem {...menuItem} />)}
        </nav>
      </article>
    </section>
  );
}
