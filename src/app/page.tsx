import { Container } from "@/components/Container";
import { ImageLink } from "@/components/ImageLink";
import Image from "next/image";

const Introduction = () => {
  return (
    <Container>
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
      <div className="space-y-2">
        <p>
          I&apos;m one of two dads to eight rats, have recently taken up
          gardening and can usually be found gaming - I often lose too many
          hours to city builders (Cities: Skylines I and II{" "}
          <span className="text-red-600">&#x2764;</span>).
        </p>
        <p>
          I&apos;m passionate about making sure the end-user is represented
          throughout product delivery and that their experience is prioritised.
          I thoroughly enjoy building and designing UI and tackling problems.
        </p>
        <p>Take care.</p>
      </div>
    </Container>
  );
};

const Technologies = () => {
  return (
    <Container colourdBackground>
      <h2 className="text-2xl">Technologies</h2>
      <p>Here is a collection of technologies I am most comfortable with.</p>
      <div className="grid grid-cols-3 gap-4 place-items-center">
        <ImageLink
          linkHref="https://nextjs.org/"
          imgSrc="/img/next.svg"
          imgAlt="NextJS"
        />
        <ImageLink
          linkHref="https://react.dev/"
          imgSrc="/img/react.svg"
          imgAlt="React"
        />
        <ImageLink
          linkHref="https://www.typescriptlang.org/"
          imgSrc="/img/typescript.svg"
          imgAlt="Typescript"
        />
        <ImageLink
          linkHref="https://nodejs.org/"
          imgSrc="/img/node.svg"
          imgAlt="NodeJS"
        />

        <ImageLink
          linkHref="https://www.javascript.com/"
          imgSrc="/img/javascript.svg"
          imgAlt="JavaScript"
        />
        <ImageLink
          linkHref="https://spec.openapis.org/oas/latest.html"
          imgSrc="/img/openapi.png"
          imgAlt="OpenAPI"
        />
        <ImageLink
          linkHref="https://graphql.org/"
          imgSrc="/img/graphql.svg"
          imgAlt="GraphQL"
        />
        <ImageLink
          linkHref="https://jestjs.io/"
          imgSrc="/img/jest.svg"
          imgAlt="Jest"
        />
        <ImageLink
          linkHref="https://testing-library.com/docs/react-testing-library/intro/"
          imgSrc="/img/testing-library.png"
          imgAlt="Testing Library"
        />
      </div>
    </Container>
  );
};

export default function Home() {
  return (
    <main>
      <div className="space-y-5">
        <Introduction />
        <Technologies />
      </div>
    </main>
  );
}
