"use client";

import { Container } from "@/components/Container";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import colors from "tailwindcss/colors";
import { ReactNode } from "react";

type TimelineElementProps = {
  date: string;
  imgSrc: string;
  imgAlt: string;
  jobTitle: string;
  workplace: string;
};

const TimelineElement = ({
  jobTitle,
  workplace,
  date,
  imgSrc,
  imgAlt,
}: TimelineElementProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: colors.violet[700], color: "#fff" }}
      contentArrowStyle={{
        borderRight: `7px solid  ${colors.violet[700]}`,
      }}
      date={date}
      iconStyle={{
        background: "#fff",
        width: "auto",
        height: "auto",
        borderRadius: "0",
      }}
      icon={<Image src={imgSrc} alt={imgAlt} width={50} height={50} priority />}
    >
      <h3>{jobTitle}</h3>
      <p>{workplace}</p>
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
        />
        <TimelineElement
          imgSrc="/img/ons.svg"
          imgAlt="Office For National Statistics Logo"
          date="September 2019 to October 2021 - 2 years 2 months"
          jobTitle="Software Engineer"
          workplace="Office For National Statistics, Newport"
        />
        <TimelineElement
          imgSrc="/img/ons.svg"
          imgAlt="Office For National Statistics Logo"
          date="July 2018 to September 2018 - 3 months"
          jobTitle="Software Engineer, Summer Placement"
          workplace="Office For National Statistics, Newport"
        />
        <TimelineElement
          imgSrc="/img/cardiff-university.svg"
          imgAlt="Cardiff University Logo"
          date="July 2017 to June 2018 - 1 year"
          jobTitle="Software Developer, Placement Year"
          workplace="Cardiff University / Prifysgol Caerdydd, Cardiff"
        />
      </VerticalTimeline>
    </Container>
  );
};

export { Experience };
