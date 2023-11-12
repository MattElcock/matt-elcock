import { Container } from "@/components/Container";
import { ImageLink } from "@/components/ImageLink";

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
          imgHeight={53}
          imgWidth={53}
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

export { Technologies };
