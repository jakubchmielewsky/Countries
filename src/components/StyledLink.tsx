import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface Props {
  to: string;
  text: string;
  icon?: IconType;
  className?: string;
}

const StyledLink: React.FC<Props> = ({
  to,
  text,
  icon: Icon,
  className = "",
}) => {
  return (
    <Link
      to={to}
      className={`flex items-center shadow-custom-small px-6 py-1.5 w-fit text-base dark:bg-c-dark-blue-elements dark:text-white ${className}`}
    >
      {Icon && <Icon className="mr-3" />}
      {text}
    </Link>
  );
};

export default StyledLink;
