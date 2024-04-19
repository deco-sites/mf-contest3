import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import { Text } from "site/sections/content/Hero.tsx";
import Icon from "site/components/ui/Icon.tsx";

/**@title {{{name}}} */
export interface Card {
  image?: {
    desktop?: ImageWidget;
    mobile?: ImageWidget;
    alt?: string;
  };
  name?: string;
  locationUrl?: string;
}

export interface Props {
  title?: Text[];
  cards?: Card[];
}

function Card({ image, name, locationUrl }: Card) {
  return (
    <div class="flex-none w-2/3 md:w-1/3 pr-5">
      <div class="flex relative rounded-xl overflow-hidden">
        <Picture preload class="w-full">
          <Source
            media="(max-width: 327px)"
            src={image?.mobile ?? ""}
            width={327}
            height={344}
          />
          <Source
            media="(min-width: 688px)"
            src={image?.desktop ?? ""}
            width={327}
            height={327}
          />
          <img
            class="w-full object-cover object-center brightness-75 min-h-96 max-h-96"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image?.mobile ?? ""}
            alt={image?.alt}
          />
        </Picture>
        <article class="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div class="w-full h-full flex items-end">
            <div class="w-full flex items-center backdrop-blur-sm bg-white/30 p-2 gap-2  rounded-xl">
              <a
                class="flex gap-1 text-white text-lg items-center no-underline"
                title={locationUrl}
                href={locationUrl}
                target="_blank"
              >
                <Icon
                  id="Location"
                  width={40}
                  height={40}
                />
                <span class="mb-1">
                  {name}
                </span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function Destinations({
  title = [
    {
      text: "Destinos ",
      emphasis: true,
    },
    {
      text: "que te esperam",
      // emphasis: true,
    },
  ],
  cards = [
    {
      image: {
        mobile:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/2bb6e3b9-90e8-49b0-86ce-465d6856343e",
        desktop:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/89934286-9a29-4ebc-bc90-39117d2e7edb",
        alt: "Image",
      },
      name: "Casa da Pirâmide",
      locationUrl: "#",
    },
    {
      image: {
        mobile:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/2bb6e3b9-90e8-49b0-86ce-465d6856343e",
        desktop:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/89934286-9a29-4ebc-bc90-39117d2e7edb",
        alt: "Image",
      },
      name: "Casa da Pirâmide",
      locationUrl: "#",
    },
    {
      image: {
        mobile:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/2bb6e3b9-90e8-49b0-86ce-465d6856343e",
        desktop:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/89934286-9a29-4ebc-bc90-39117d2e7edb",
        alt: "Image",
      },
      name: "Casa da Pirâmide",
      locationUrl: "#",
    },
  ],
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
        <div class="flex flex-no-wrap overflow-x-auto custom-scrollbar items-stretch pb-5">
          {cards.map((card) => <Card {...card} />)}
        </div>
      </article>
    </section>
  );
}
