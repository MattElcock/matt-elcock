import { Container } from "@/components/Container";
import { IconBullet } from "@/components/IconBullet";
import Image from "next/image";
import { MdLocationOn, MdOutlineSchool, MdWorkHistory } from "react-icons/md";

const AboutMe = () => {
  return (
    <Container>
      <div className="flex gap-5 items-center bg-blue-800 rounded-full p-1 mx-[-2px] text-slate-50 animate-post overflow-hidden">
        <Image
          className="rounded-full"
          src="/img/matt-elcock-avatar-96.jpg"
          alt="Matt Elcock"
          width={70}
          height={70}
          style={{ height: "70px" }}
        />
        <h2 className="whitespace-nowrap">
          <span className="block text-lg">Hiya!</span>
          <span className="block text-2xl">I&apos;m Matt.</span>
        </h2>
      </div>
      <div className="space-y-2.5">
        <p>
          I&apos;m one of two dads to eight rats, have recently taken up
          gardening and can usually be found gaming - I often lose too many
          hours to city builders (Cities: Skylines I and II{" "}
          <span className="text-red-600">&#x2764;</span>).
        </p>
        <p className="font-bold">At a glance:</p>
        <ul className="space-y-2">
          <IconBullet icon={<MdLocationOn />} text="Based in Cardiff" />
          <IconBullet
            icon={<MdOutlineSchool />}
            text="Earned a 2:1 bachelors degree in Computer Science from Cardiff Univeristy"
          />
          <IconBullet
            icon={<MdWorkHistory />}
            text="5 years experience in frontend development (4 excluding
                placements during studies)"
          />
        </ul>
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

export { AboutMe };
