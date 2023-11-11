import Image from "next/image";

const Introduction = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 items-center">
        <Image
          className="rounded-full"
          src="/img/matt-elcock-avatar-96.jpg"
          alt="Matt Elcock"
          width={96}
          height={96}
        />
        <h2>
          <span className="block text-lg">Hiya!</span>
          <span className="block text-2xl">I&apos;m Matt.</span>
        </h2>
      </div>
      <div className="space-y-3">
        <p>
          I&apos;m one of two dads to eight rats, have recently taken up
          gardening and can usually be found gaming - I often lose too many
          hours to city builders (City Skylines 1 and 2 &#129505;).
        </p>
        <p>
          I&apos;m passionate about making sure the end-user is represented
          throughout product delivery and that their experience is prioritised.
          I thoroughly enjoy building and designing UI and tackling problems.
        </p>
      </div>
    </div>
  );
};

const Technologies = () => {
  return (
    <div>
      <h2 className="text-2xl">Technologies</h2>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <div className="space-y-10">
        <Introduction />
        <Technologies />
      </div>
    </main>
  );
}
