import { Text } from "site/sections/content/Hero.tsx";

export interface Props {
  title?: Text[];
  linkEmbedVideo?: string;
}

export default function ContentIframe({
  title = [
    {
      text: "Sobrevoando ",
      // emphasis: true,
    },
    {
      text: "São Thomé",
      emphasis: true,
    },
  ],
  linkEmbedVideo =
    "https://www.youtube-nocookie.com/embed/s6aTYQl1cfU?si=BK5akPzHvzeq_E3P",
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
        <div>
          <iframe
            class="w-full min-h-96"
            width="560"
            height="500"
            src={linkEmbedVideo}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          >
          </iframe>
        </div>
      </article>
    </section>
  );
}
