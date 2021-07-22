import React from "react";
import { useForm } from "react-hook-form";

import Button from "../Button";
import FormInput from "../Form/HookForm/FormInput";

import Modal from "../Modal";

import * as styles from "./ConfirmPasswordModal.module.scss";

interface ConfirmPasswordModal {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

function ConfirmPasswordModal({
  isOpen,
  onClose,
  onSuccess,
}: ConfirmPasswordModal) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    onSuccess();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.Title}>Input your password to continue</p>
        <FormInput
          name="password"
          type="password"
          register={register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            validate: {
              shouldMatch: (value) =>
                value !== "" ? "Incorrect password" : "" || true,
            },
          })}
          label="Password"
          error={errors.password}
        />
        <Button type="submit">Next</Button>
      </form>
    </Modal>
  );
}

export default ConfirmPasswordModal;
