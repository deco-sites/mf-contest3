import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Schedule from "site/islands/Schedule.tsx";

export interface Props {
  image?: {
    desktop?: ImageWidget;
    mobile?: ImageWidget;
    alt?: string;
  };
  title?: {
    text: string;
    emphasis?: boolean;
  }[];
  subtitle?: string;
}

export default function Hero({
  image = {
    mobile:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/2bb6e3b9-90e8-49b0-86ce-465d6856343e",
    desktop:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/89934286-9a29-4ebc-bc90-39117d2e7edb",
    alt: "Image",
  },
  title = [
    {
      text: "O lugar onde ",
    },
    {
      text: "a magia acontece. ",
      emphasis: true,
    },
    {
      text: "Descubra",
      emphasis: true,
    },
    {
      text: " os mistérios e lendas",
    },
  ],
  subtitle = "Venha conhecer São Tomé das Letras!",
}: Props) {
  return (
    <section class="container mx-auto py-1">
      <figure class="relative overflow-hidden rounded-xl">
        <Picture preload>
          <Source
            media="(max-width: 327px)"
            src={image.mobile || ""}
            width={327}
            height={344}
          />
          <Source
            media="(min-width: 688px)"
            src={image.desktop || ""}
            width={1280}
            height={500}
          />
          <img
            class="w-full object-cover max-h-[520px] object-top brightness-75"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image.mobile}
            alt={image.alt}
          />
        </Picture>
        <article class="absolute top-0 left-0 w-full h-full">
          <div class="w-full h-full flex p-3 flex-col justify-between">
            <div class="flex flex-col max-w-3xl mx-auto gap-5 my-auto">
              <h1 class="text-white font-semibold text-5xl text-pretty text-center leading-snug">
                {title.map(({ text, emphasis }) => (
                  <span class={`${emphasis ? `font-Kurale italic` : ""}`}>
                    {text}
                  </span>
                ))}
              </h1>
              <h2 class="text-white text-2xl text-pretty text-center">
                {subtitle}
              </h2>
            </div>
            <Schedule />
          </div>
        </article>
      </figure>
    </section>
  );
}
