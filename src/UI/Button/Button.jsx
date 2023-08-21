import { Link } from "react-router-dom";

const Button = ({ url, text }) => {
  return (
    <Link to={url} className="btn relative uppercase tracking-widest pb-1">
      {text}
    </Link>
  );
};

export default Button;
