"use client";

import { Container } from "@/components/Container";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./css.css";
import colors from "tailwindcss/colors";

type Tag = {
  label: string;
  href: string;
};

type TimelineElementProps = {
  date: string;
  imgSrc: string;
  imgAlt: string;
  jobTitle: string;
  workplace: string;
  tags: Tag[];
};

const TimelineElement = ({
  jobTitle,
  workplace,
  date,
  imgSrc,
  imgAlt,
  tags,
}: TimelineElementProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: colors.violet[700], color: "#fff" }}
      contentArrowStyle={{
        borderRight: `7px solid  ${colors.violet[700]}`,
      }}
      iconStyle={{
        background: "#fff",
        width: "auto",
        height: "auto",
        borderRadius: "0",
      }}
      icon={<Image src={imgSrc} alt={imgAlt} width={50} height={50} priority />}
    >
      <div className="space-y-3">
        <div className="vertical-timeline-element-content-header">
          <h3>{jobTitle}</h3>
          <p>{workplace}</p>
          <p>{date}</p>
        </div>

        <div className="vertical-timeline-element-content-footer flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <a
              key={`tag-${tag.label}`}
              href={tag.href}
              className="rounded-lg border border-violet-500 w-[fit-content] py-1 px-2 text-xs"
            >
              {tag.label}
            </a>
          ))}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <Container>
      <h2 className="text-2xl">Experience</h2>
      <VerticalTimeline animate={false} lineColor={colors.blue[800]}>
        <TimelineElement
          imgSrc="/img/ldms.webp"
          imgAlt="LDMS Logo"
          date="November 2021 to October 2023 - 2 years"
          jobTitle="Software Engineer"
          workplace="LDMS, Cardiff"
          tags={[
            { label: "React", href: "https://react.dev/" },
            { label: "NextJS", href: "https://react.dev/" },
            { label: "Typescript", href: "https://www.typescriptlang.org/" },
            { label: "NodeJS", href: "https://nodejs.org/" },
            { label: "Material UI", href: "https://mui.com/" },
            { label: "Testing Library", href: "https://testing-library.com/" },
            {
              label: "Jest",
              href: "https://jestjs.io/",
            },
            {
              label: "RESTfull API",
              href: "https://blog.postman.com/rest-api-examples/",
            },
            { label: "Webdriver", href: "https://webdriver.io/" },
            {
              label: "OpenAPI",
              href: "https://www.openapis.org/",
            },
            { label: "Jenkins", href: "https://www.jenkins.io/" },
            { label: "Java", href: "https://www.java.com/" },
          ]}
        />
        <TimelineElement
          imgSrc="/img/ons.svg"
          imgAlt="Office For National Statistics Logo"
          date="September 2019 to October 2021 - 2 years 2 months"
          jobTitle="Software Engineer"
          workplace="Office For National Statistics, Newport"
          tags={[
            { label: "React", href: "https://react.dev/" },
            {
              label: "Styled Components",
              href: "https://styled-components.com/",
            },
            { label: "GraphQL API", href: "https://graphql.org/" },
            { label: "NodeJS", href: "https://nodejs.org/" },
            { label: "Testing Library", href: "https://testing-library.com/" },
            {
              label: "Jest",
              href: "https://jestjs.io/",
            },
            {
              label: "Express",
              href: "https://expressjs.com/",
            },
            {
              label: "Document Database",
              href: "https://en.wikipedia.org/wiki/Document-oriented_database",
            },
          ]}
        />
        <TimelineElement
          imgSrc="/img/ons.svg"
          imgAlt="Office For National Statistics Logo"
          date="July 2018 to September 2018 - 3 months"
          jobTitle="Software Engineer, Summer Placement"
          workplace="Office For National Statistics, Newport"
          tags={[
            { label: "React", href: "https://react.dev/" },
            {
              label: "Styled Components",
              href: "https://styled-components.com/",
            },
            {
              label: "RESTfull API",
              href: "https://blog.postman.com/rest-api-examples/",
            },
            { label: "NodeJS", href: "https://nodejs.org/" },
            { label: "Testing Library", href: "https://testing-library.com/" },
            { label: "Enzyme", href: "https://www.npmjs.com/package/enzyme" },
            {
              label: "Jest",
              href: "https://jestjs.io/",
            },
            {
              label: "Express",
              href: "https://expressjs.com/",
            },

            { label: "SQL", href: "https://en.wikipedia.org/wiki/SQL" },
          ]}
        />
        <TimelineElement
          imgSrc="/img/cardiff-university.svg"
          imgAlt="Cardiff University Logo"
          date="July 2017 to June 2018 - 1 year"
          jobTitle="Software Developer, Placement Year"
          workplace="Cardiff University / Prifysgol Caerdydd, Cardiff"
          tags={[
            { label: "HTML", href: "https://en.wikipedia.org/wiki/HTML" },
            { label: "CSS", href: "https://en.wikipedia.org/wiki/CSS" },
            { label: "jQuery", href: "https://jquery.com/" },
            { label: "Squiz", href: "https://www.squiz.net/" },
          ]}
        />
      </VerticalTimeline>
    </Container>
  );
};

export { Experience };
