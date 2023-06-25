import MainLayout from "../../layouts/MainLayout";

import Title from "../../components/Title";

import { EmojiDizzy } from "react-bootstrap-icons";

const PageNotFound = () => {
  return (
    <MainLayout>
      <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center">
        <EmojiDizzy height={200} width={200} className="m-4" />
        <Title title={"Page Not Found"} />
      </div>
    </MainLayout>
  );
};

export default PageNotFound;
