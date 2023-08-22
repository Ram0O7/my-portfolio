import { Link } from "react-router-dom";

const Button = ({ url, text, onClick }) => {
  return (
    <Link
      to={url}
      className="btn relative uppercase tracking-widest pb-1"
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default Button;
