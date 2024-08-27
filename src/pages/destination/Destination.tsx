import { ReactNode, useMemo, useState } from "react";
import { DestinationType } from "../../types/SpaceData";
import styles from "./destination.module.css";
import LeadText from "../../component/text/LeadText";
import SubTitle from "../../component/text/SubTitle";
import MainSection from "../../component/ui/mainSection/MainSection";
import TabLink from "../../component/ui/tabLink/TabLink";

const Destination = ({ data }: { data: DestinationType[] }) => {
  const [activeTab, setActiveTab] = useState("Moon");
  const display = useMemo(
    () =>
      data.filter(({ name }) => name.toLowerCase() === activeTab.toLowerCase()),
    [activeTab, data]
  );

  return (
    <>
      <div className={`img__bg ${styles.url}`} />
      <MainSection>
        <SubTitle num="01" text="pick your destination" />
        <div className={styles.content__wrap}>
          <Side>
            <Img url={data[0].images.webp} />
          </Side>
          <Side>
            <div className={`${styles.content__tab} text-preset-8`}>
              {data.map(({ name }, i) => (
                <div key={`${name} ${i}`} onClick={() => setActiveTab(name)}>
                  <TabLink
                    key={`${name}--${i}`}
                    isActive={name === display[0].name}
                    name={name}
                  />
                </div>
              ))}
            </div>
            <Name name={display[0].name} />
            <LeadText text={display[0].description} />
            <Line />
            <div className={styles.content__data__wrap}>
              <DataDisplay title="AVG. DISTANCE" data={display[0].distance} />
              <DataDisplay title="Est. travel time" data={display[0].travel} />
            </div>
          </Side>
        </div>
      </MainSection>
    </>
  );
};

export default Destination;

const Img = ({ url }: { url: string }) => (
  <div>
    <img
      src={url}
      alt={`img of destination`}
      className={styles.content__side__img}
    />
  </div>
);

const Name = ({ name }: { name: string }) => (
  <h3 className="text-preset-2">{name}</h3>
);

const Line = () => <div className={styles.content__line}></div>;

const DataDisplay = ({ title, data }: { title: string; data: string }) => (
  <div className={styles.content__data}>
    <h3 className={`${styles.content__data__title} "text-preset-7"`}>
      {title}
    </h3>
    <h3 className="text-preset-6">{data}</h3>
  </div>
);

const Side = ({ children }: { children: ReactNode }) => (
  <div className={styles.content__side}>{children}</div>
);
