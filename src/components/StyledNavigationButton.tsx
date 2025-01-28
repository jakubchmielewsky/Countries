import { useNavigate } from "react-router-dom";
import { IconType } from "react-icons";

interface Props {
  to?: string;
  text: string;
  icon?: IconType;
  className?: string;
}

const StyledNavigationButton: React.FC<Props> = ({
  to,
  text,
  icon: Icon,
  className = "",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center shadow-custom-small px-6 py-1.5 w-fit text-base dark:bg-c-dark-blue-elements dark:text-white ${className}`}
    >
      {Icon && <Icon className="mr-3" />}
      {text}
    </button>
  );
};

export default StyledNavigationButton;
