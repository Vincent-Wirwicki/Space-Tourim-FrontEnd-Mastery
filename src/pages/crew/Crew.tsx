import { ReactNode, useMemo, useState } from "react";
import { CrewMemberType } from "../../types/SpaceData";
import styles from "./crew.module.css";
import LeadText from "../../component/text/LeadText";
import SubTitle from "../../component/text/SubTitle";
import Pagination from "../../component/ui/pagination/Pagination";
import MainSection from "../../component/ui/mainSection/MainSection";

const Crew = ({ data }: { data: CrewMemberType[] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const display = useMemo(() => data[activeTab], [activeTab, data]);
  const { role, name, bio, images } = display;
  return (
    <>
      <div className={`img__bg ${styles.url}`} />
      <MainSection>
        <SubTitle num="02" text="MEET YOUR CREW" />
        <div className={styles.content__wrap__side}>
          <Side>
            <Role role={role} />
            <Name name={name} />
            <LeadText text={bio} />
            <div className={styles.content__nav}>
              {data.map(({ role }, i) => (
                <Pagination
                  key={`${role} + ${i}`}
                  size="small"
                  isActive={i === activeTab}
                  onClick={() => setActiveTab(i)}
                />
              ))}
            </div>
          </Side>
          <Side>
            <Img url={images.webp} />
          </Side>
        </div>
      </MainSection>
    </>
  );
};

export default Crew;



const Side = ({ children }: { children: ReactNode }) => (
  <div className={styles.content__side}>{children}</div>
);

const Role = ({ role }: { role: string }) => (
  <h3 className="text-preset-4">{role}</h3>
);

const Name = ({ name }: { name: string }) => (
  <h1 className="text-preset-3" style={{ padding: "var(--spacing-300) 0" }}>
    {name}
  </h1>
);

const Img = ({ url }: { url: string }) => (
  <div className={styles.content__side__wrap__img}>
    <img className={styles.content__side__img} src={url} alt="" />
  </div>
);
