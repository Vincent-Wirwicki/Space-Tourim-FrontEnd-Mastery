import { useMemo, useState } from "react";
import { TechnologyType } from "../../types/SpaceData";
import styles from "./technology.module.css";

import SubTitle from "../../component/text/SubTitle";
import MainSection from "../../component/ui/mainSection/MainSection";
import LeadText from "../../component/text/LeadText";
import Pagination from "../../component/ui/pagination/Pagination";
import useOnResize from "../../hooks/useOnResize";

const Technology = ({ data }: { data: TechnologyType[] }) => {
  const width = useOnResize();

  const [activeTab, setActiveTab] = useState(0);
  const display = useMemo(() => data[activeTab], [activeTab, data]);
  const { name, description, images } = display;

  return (
    <>
      <div className={`${styles.url} img__bg`} />
      <MainSection>
        <SubTitle num="03" text="SPACE LAUNCH 101" />
        <div className={styles.content__wrap__side}>
          <div className={styles.content_side}>
            <div className={styles.content__side__nav}>
              {data.map(({ name }, i) => (
                <Pagination
                  key={`${name}-${i}`}
                  size="large"
                  num={i + 1}
                  isActive={activeTab === i}
                  onClick={() => setActiveTab(i)}
                />
              ))}
            </div>
            <div className={styles.content__side__text}>
              <Text name={name} desc={description} />
            </div>
          </div>
          <div className={styles.content__side__wrap__img}>
            <Img url={width > 768 ? images.portrait : images.landscape} />
          </div>
        </div>
      </MainSection>
    </>
  );
};

export default Technology;

const Img = ({ url }: { url: string }) => (
  <img
    className={styles.content__side__img}
    src={url}
    alt="image of space ships"
  />
);

const Text = ({ name, desc }: { name: string; desc: string }) => (
  <>
    <h3 className="text-preset-4">TERMINOLOGY...</h3>
    <h1 className={` ${styles.content__side__text__title} text-preset-3`}>
      {name}
    </h1>
    <LeadText text={desc} />
  </>
);
