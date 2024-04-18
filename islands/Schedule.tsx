import { useState } from "preact/hooks";

export default function Schedule() {
  const [countPeople, setCountPeople] = useState(0);
  return (
    <section class="flex w-full">
      <form
        class="flex w-full justify-stretch items-center rounded-xl backdrop-blur-sm bg-white/30 py-6 px-10  gap-24"
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <div class="grid grid-cols-3 grid-rows-1 gap-12 flex-1">
          <div class="flex flex-col items-start ">
            <span class="text-white text-lg">
              Check-in
            </span>
            <input
              type="date"
              max="3000-10-10"
              class="appearance-none border-b py-3 border-white w-full text-lg bg-transparent text-white 
                focus:outline-white"
            />
          </div>
          <div class="flex flex-col items-start ">
            <span class="text-white text-lg">
              Check-out
            </span>
            <input
              type="date"
              max="3000-10-10"
              class="appearance-none border-b py-3 border-white w-full text-lg bg-transparent text-white
                focus:outline-white"
            />
          </div>
          <div class="flex flex-col items-start">
            <span class="text-white text-lg">
              Pessoas
            </span>
            <div class="appearance-none border-b py-3 border-white w-full text-lg bg-transparent text-white
              flex relative
              ">
              {countPeople}
              <div class="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2 ml-4">
                <button
                  class="appearance-none flex items-center justify-center bg-white rounded-full p-2 text-primary aspect-square w-8 h-8 text-xl"
                  onClick={() => setCountPeople((prev) => prev - 1)}
                >
                  -
                </button>
                <button
                  class="appearance-none flex items-center justify-center bg-white rounded-full p-2 text-primary aspect-square w-8 h-8 text-xl"
                  onClick={() => setCountPeople((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg lg:min-w-36 rounded-xl">
          Reservar
        </button>
      </form>
    </section>
  );
}
