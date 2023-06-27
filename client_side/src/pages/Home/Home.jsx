import { useState } from "react";

import useApi from "../../hooks/useApi";

import MainLayout from "../../layouts/MainLayout";

import Title from "../../components/Title";
import TextArea from "../../components/TextArea";
import DialogModal from "../../components/DialogModal";

import { API_URL } from "../../utils/UtilitiesConts";

const Home = () => {
  const { loading, isError, data, post } = useApi();

  const [postData, setPostData] = useState({ email: "" });
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleSubmit = async () => {
    await post(`${API_URL}/spam-detector/`, postData);
    setOpenModal(true);
  };

  return (
    <MainLayout>
      {openModal && (
        <DialogModal
          handleOpen={handleOpenModal}
          error={isError}
          value={data}
        />
      )}
      <Title title={"Introduce a email for make predictions"} className={"mt-20"} />
      <div className="w-full flex justify-center my-8">
        <TextArea
          value={postData}
          name={"email"}
          setValue={setPostData}
          placeholder={"Email content"}
          handleClick={handleSubmit}
          loading={loading}
        />
      </div>
    </MainLayout>
  );
};

export default Home;
