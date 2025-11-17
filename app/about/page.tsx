import Button from "@/components/button";
import { languages } from "@/lib/languages";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const data = languages;

  return (
    <main className="bg-slate-950 min-h-screen py-12 pt-2">
      <div className="max-w-4xl mx-auto px-0 space-y-0 max-sm:px-2">
        <section className=" border p-0 shadow-lg py-8">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-3">
            Journal Entry :: Story
          </p>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-200 mb-2">
              About Me
            </h1>
            <div
              className="w-full opacity-70"
              style={{
                borderBottom: "4px dotted #3b82f6", // blue-500
                borderImage:
                  "repeating-linear-gradient(90deg, #3b82f6 0 4px, transparent 4px 8px) 10",
              }}
            />
            <div
              className="w-full opacity-70"
              style={{
                borderBottom: "4px dotted #3b82f6",
                borderImage:
                  "repeating-linear-gradient(90deg, #3b82f6 0 4px, transparent 4px 8px) 10",
              }}
            />
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mt-2">
              <span className="uppercase tracking-wide text-slate-500">
                Curiosity Log
              </span>
              <span className="text-slate-600">::</span>
              <span className="text-blue-300 font-semibold">
                Reinhardt Lagat
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-400">#story #craft #curiosity</span>
            </div>
          </div>
          <div className="mt-5 space-y-6">
            <p className="text-gray-300 text-md leading-relaxed">
              My love for tech started long before I wrote my first line of
              code. As a kid, I was the one taking apart TVs, staring at the
              rainbow reflections on compact discs, and wondering how everything
              worked. That curiosity followed me into high school, where I
              finally got my hands on a computer class. It felt like opening a
              door I always knew existed.
            </p>

            <p className="text-gray-300 text-md leading-relaxed">
              From there, I explored everything I could—hardware, networking,
              software, anything that let me understand how systems talk,
              connect, and come alive. But somewhere along the way, I realized I
              was most drawn to building things. Creating something out of
              nothing felt like the closest thing to magic.
            </p>

            <p className="text-gray-300 text-md leading-relaxed">
              So I chose software engineering.
            </p>

            <p className="text-gray-300 text-md leading-relaxed">
              Today, I work across the stack, from crafting smooth, responsive
              interfaces with React and Next.js, to designing reliable backend
              systems with Node.js, Express, FastAPI, SQL, and MongoDB, to
              building mobile apps with React Native. I love blending creativity
              with engineering, making things that look good, work well, and
              feel intuitive.
            </p>

            <p className="text-gray-300 text-md leading-relaxed">
              That same childhood curiosity still drives me, just with slightly
              fewer broken TVs.
            </p>
          </div>
        </section>

        <section className="border p-0 shadow-lg py-8 max-sm:py-0">
          <div className="flex flex-col gap-3 mb-6">
            <div className="flex flex-col items-start gap-1">
              <div>
                <h2 className="text-3xl font-semibold text-blue-200 mb-2">
                  Tech Stack
                </h2>
              </div>

              <div
                className="w-full opacity-70"
                style={{
                  borderBottom: "4px dotted #3b82f6", // blue-500
                  borderImage:
                    "repeating-linear-gradient(90deg, #3b82f6 0 4px, transparent 4px 8px) 10",
                }}
              />
              <div
                className="w-full opacity-70"
                style={{
                  borderBottom: "4px dotted #3b82f6",
                  borderImage:
                    "repeating-linear-gradient(90deg, #3b82f6 0 4px, transparent 4px 8px) 10",
                }}
              />
            </div>
            <p className="text-sm text-slate-400">
              A collection of the languages, frameworks, and tools I reach for
              daily.
            </p>
          </div>

          <div className="flex flex-wrap">
            {data.map((item) => (
              <div key={item.name}>
                <div className=" p-3">
                  <div>
                    <div>
                      <Image
                        alt="language"
                        src={item.photo}
                        width={40}
                        height={40}
                        className="rounded shadow-blue-300 shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-start pb-4">
          <Button link="/experience" text="Check my experience" />
        </div>
      </div>
    </main>
  );
};

export default About;
