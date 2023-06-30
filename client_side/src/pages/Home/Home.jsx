import { useState } from "react";

import useApi from "../../hooks/useApi";

import MainLayout from "../../layouts/MainLayout";

import Title from "../../components/Title";
import FormFields from "../../components/FormFields";
import DialogModal from "../../components/DialogModal";

import { API_URL, ERROR } from "../../utils/UtilitiesConts";

const Home = () => {
  const { loading, isError, data, error, post } = useApi();

  const [textEmail, setTextEmail] = useState({ email_text: "" });
  const [fileEmail, setFileEmail] = useState({ email_file: null });
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("email_file", fileEmail.email_file);
    await post(
      `${API_URL}/spam-detector/`,
      fileEmail.email_file ? formData : textEmail
    );
    setOpenModal(true);
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
        <FormFields
          textName={"email_text"}
          fileName={"email_file"}
          placeholder={"Email content"}
          loading={loading}
          textValue={textEmail}
          setTextValue={setTextEmail}
          setFileValue={setFileEmail}
          handleClick={handleSubmit}
        />
      </div>
    </MainLayout>
  );
};

export default Home;
