import Image from "next/image";

const Introduction = () => {
  return (
    <div className="space-y-5">
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
    <div className="space-y-5">
      <h2 className="text-2xl">Technologies</h2>
      <div className="flex flex-wrap gap-5 items-center">
        <a href="https://nextjs.org/">
          <Image
            src="/img/next.svg"
            alt="NextJS"
            width={90}
            height={18.5}
            priority
          />
        </a>
        <a href="https://react.dev/">
          <Image
            src="/img/react.svg"
            alt="React"
            width={50}
            height={50}
            priority
          />
        </a>
        <a href="https://nodejs.org/">
          <Image
            src="/img/node.svg"
            alt="NodeJS"
            width={90}
            height={18.5}
            priority
          />
        </a>
        <a href="https://www.typescriptlang.org/">
          <Image
            src="/img/typescript.svg"
            alt="TypeScript"
            width={50}
            height={50}
            priority
          />
        </a>
        <a href="https://www.javascript.com/">
          <Image
            src="/img/javascript.svg"
            alt="JavaScript"
            width={50}
            height={50}
            priority
          />
        </a>
        <a href="https://spec.openapis.org/oas/latest.html">
          <Image
            src="/img/openapi.svg"
            alt="OpenAPI"
            width={90}
            height={18.5}
            priority
          />
        </a>
        <a href="https://graphql.org/">
          <Image
            src="/img/graphql.svg"
            alt="GraphQL"
            width={50}
            height={50}
            priority
          />
        </a>
        <a href="https://jestjs.io/">
          <Image
            src="/img/jest.svg"
            alt="Jest"
            width={90}
            height={18.5}
            priority
          />
        </a>
        <a href="https://testing-library.com/docs/react-testing-library/intro/">
          <Image
            src="/img/testing-library.png"
            alt="Jest"
            width={50}
            height={50}
            priority
          />
        </a>
      </div>
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
