import { Link } from "react-router-dom";

const Button = ({ url, text }) => {
  return (
    <button className="btn relative uppercase tracking-widest pb-1">
      <Link to={url}>{text}</Link>
    </button>
  );
};

export default Button;
