import { ImageWidget } from "apps/admin/widgets.ts";
import { Text } from "site/sections/content/Hero.tsx";
import Map from "site/islands/Map.tsx";

/**@title {{{name}}} */
export interface TravelRoute {
  name?: string;
  coords?: {
    lat?: string;
    long?: string;
  };
  image?: {
    desktop?: ImageWidget;
    mobile?: ImageWidget;
    alt?: string;
  };
}

export interface Props {
  title?: Text[];
  travelRoutes?: TravelRoute[];
}

export default function ContentMap({
  title = [{
    text: "Conheça ",
  }, {
    text: "as rotas",
    emphasis: true,
  }],
  travelRoutes = [],
}: Props) {
  return (
    <section class="container mx-auto py-1">
      <article class="flex flex-col gap-9">
        <h3 class="text-primary font-semibold text-5xl text-pretty text-left">
          {title.map(({ text, emphasis }) => (
            <span class={`${emphasis ? `font-Kurale italic` : ""}`}>
              {text}
            </span>
          ))}
        </h3>
        <Map travelRoutes={travelRoutes} />
      </article>
    </section>
  );
}
