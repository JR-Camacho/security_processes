import { useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import Title from "../../components/Title";
import TextArea from "../../components/TextArea";

const Home = () => {
  const [value, setValue] = useState("");

  return (
    <MainLayout>
      <Title title={"Spam detector"} className={"mt-20"} />
      <div className="w-full flex justify-center my-8">
        <TextArea value={value} setValue={setValue} placeholder={'Email content'}/>
      </div>
    </MainLayout>
  );
};

export default Home;
