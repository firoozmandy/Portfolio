import { Link } from "react-router-dom";

const FooterSocial = ({ Http, icons }) => {
  return (
    <li className="inline">
      <Link to={Http} target="_blank">
        {icons}
      </Link>
    </li>
  );
};

export default FooterSocial;
