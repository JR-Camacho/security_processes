import {
  Button,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";

import { CheckCircle, ExclamationCircle } from "heroicons-react";

const DialogModal = ({ handleOpen, error, value }) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="w-11/12 sm:w-96 rounded-lg bg-white">
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Prediction details
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          {!error ? (
            <CheckCircle className="h-16 w-16 text-green-500" />
          ) : (
            <ExclamationCircle className="h-16 w-16 text-red-500" />
          )}
          <Typography
            color={!error ? "green" : "red"}
            variant="h4"
            className="text-center"
          >
            {!error ? `The email is ${value}` : "Submission Error!"}
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            Continue
          </Button>
        </DialogFooter>
      </div>
    </div>
  );
};

export default DialogModal;
