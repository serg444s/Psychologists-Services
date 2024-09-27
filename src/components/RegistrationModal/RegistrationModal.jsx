import Modal from "react-modal";
import { useForm } from "react-hook-form";
import IconSvg from "../IconSvg/IconSvg";
import css from "./RegistrationModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "40px",
    width: "565px",
    height: "509px",
    borderRadius: "30px",
    position: "relative",
  },
};

Modal.setAppElement("#root");

const RegistrationModal = ({ modalIsOpen, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={css.container}>
        <h2 className={css.name}>Registration</h2>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>

        <button onClick={closeModal} className={css.btnclose}>
          <IconSvg iconName={"close"} width={26} height={26} />
        </button>
      </div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("Name")} />
        <input {...register("Email", { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}
        <input {...register("Password", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
        <input type="submit" />
      </form>
    </Modal>
  );
};

export default RegistrationModal;
