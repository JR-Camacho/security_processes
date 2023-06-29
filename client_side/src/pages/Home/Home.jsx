import { useState } from "react";

import useApi from "../../hooks/useApi";

import MainLayout from "../../layouts/MainLayout";

import Title from "../../components/Title";
import TextArea from "../../components/TextArea";
import DialogModal from "../../components/DialogModal";

import { API_URL, ERROR } from "../../utils/UtilitiesConts";

const Home = () => {
  const { loading, isError, data, error, post } = useApi();

  const [postData, setPostData] = useState({ email: "" });
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleSubmit = async () => {
    await post(`${API_URL}/spam-detector/`, postData);
    setOpenModal(true);
    console.log(postData)
  };

  return (
    <MainLayout>
      {openModal && (
        <DialogModal
          handleOpen={handleOpenModal}
          isError={isError}
          error={
            error && error.error == ERROR
              ? "Incomplete Email"
              : "Submission Error!"
          }
          response={data && data.prediction}
        />
      )}
      <Title
        title={"Introduce a email for make predictions"}
        className={"mt-20"}
      />
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
