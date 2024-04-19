import { Picture, Source } from "apps/website/components/Picture.tsx";
import { useEffect, useRef } from "preact/hooks";
import { TravelRoute } from "site/sections/content/ContentMap.tsx";
// deno-lint-ignore no-explicit-any
declare const L: any;

// const position = [51.505, -0.09];

// type Location = {
//   name: string;
//   address: string;
//   note: string;
//   lat: string;
//   lng: string;
//   color: string;
// };

// const markerHtmlStyles = (color: string) => `
//   background-color: ${color};
//   width: 2rem;
//   height: 2rem;
//   display: block;
//   left: -1.5rem;
//   top: -1.5rem;
//   position: relative;
//   border-radius: 3rem 3rem 0;
//   transform: rotate(45deg);
//   border: 1px solid #FFFFFF;
//   box-shadow: -1px -1px 8px 0px #fff;
// `;

// const multiPolyline = [
//   [
//     [51.5, -0.1],
//     [51.5, -0.12],
//     [51.52, -0.12],
//   ],
//   [
//     [51.5, -0.05],
//     [51.5, -0.06],
//     [51.52, -0.06],
//   ],
// ]
// const multiPolyline = [
//   { lat: 51.5, long: -0.1, color: undefined },
//   { lat: 51.5, long: -0.12, color: undefined },
//   { lat: 51.52, long: -0.12, color: undefined },
// ];

export interface Props {
  travelRoutes?: TravelRoute[];
}

export default function MapComponent({ travelRoutes = [] }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  // deno-lint-ignore no-explicit-any
  const mapRef = useRef<any>(null);
  // const [sheet] = useState<Location[]>([]);

  useEffect(() => {
    // const points: [string, string][] = [];
    // if (mapRef.current) {
    //   multiPolyline.forEach((row) => {
    //     const icon = L.divIcon({
    //       className: "my-custom-pin",
    //       iconAnchor: [0, 24],
    //       labelAnchor: [-6, 0],
    //       popupAnchor: [0, -36],
    //       html: `<span style="${markerHtmlStyles(row?.color ?? 'grey') ?? `grey`}" />`,
    //     });
    //     L.marker([row.lat, row.long], { icon })
    //       .bindTooltip('teste')
    //       .bindPopup(
    //         ` <p>
    //           <b>${'teste'}</b>
    //           <br />
    //           ${'row.teste'}
    //         </p>`
    //       )
    //       .addTo(mapRef.current);
    //     points.push([`${row.lat}`, `${row.long}`]);
    //   });
    //   mapRef.current.fitBounds(points);
    // }
    if (mapRef.current) {
      console.log(mapRef.current);
      L.marker([-21.7236, -44.9815]).addTo(mapRef.current);
    }
  }, [mapRef]);

  useEffect(() => {
    if (containerRef.current) {
      if (!mapRef.current) {
        mapRef.current = new L.Map(containerRef.current).setView([
          -21.7236,
          -44.9815,
        ], 15);
      }
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }
  }, []);

  return (
    <div class="w-full flex items-stretch rounded-xl overflow-hidden gap-8">
      <div class="w-2/5 flex flex-col overflow-y-auto custom-scrollbar max-h-[500px] gap-6">
        {travelRoutes?.map(({ image, name }) => (
          <div class="flex items-center rounded-lg overflow-hidden gap-5 shadow-sm min-h-[110px] max-h-[110px] pr-6">
            <Picture preload class="w-full max-w-[256px]  rounded-lg">
              <Source
                media="(max-width: 327px)"
                src={image?.mobile ?? ""}
                width={327}
                height={344}
              />
              <Source
                media="(min-width: 688px)"
                src={image?.desktop ?? ""}
                width={120}
                height={120}
              />
              <img
                class="w-full object-cover object-center brightness-75  max-w-[256px] max-h-[195px] rounded-lg"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={image?.mobile ?? ""}
                alt={image?.alt}
              />
            </Picture>
            <div class="flex flex-col gap-3">
              <span class="text-primary text-lg font-semibold">
                {name}
              </span>
              <span class="text-primary text-body">
                Lorem ipsum dolor, sit amet,
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        ref={containerRef}
        className={"h-full w-3/5"}
        style={{ minHeight: 500 }}
      >
      </div>
    </div>
  );
}
