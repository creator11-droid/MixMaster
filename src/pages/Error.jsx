import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/undraw_page_not_found_re_e9o6.svg";
const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt="Not Found" />
        <h3>ooh!</h3>
        <p>We cannot seem to find the page you are looking for</p>
        <Link to="/">Back Home</Link>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>oops! something went wrong</h3>
    </Wrapper>
  );
};
export default Error;
