import { ReactNode } from "react";
import { BsFillXCircleFill } from "react-icons/bs";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}

      <BsFillXCircleFill
        type="button"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      />
    </div>
  );
};

export default Alert;
