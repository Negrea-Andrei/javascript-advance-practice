import { Link } from "react-router-dom";

const DefaultProfile = () => {
  return (
    <>
      <p>Oh, nothing to see here!</p>
      <Link to="/profile">Click here to go back</Link>;
    </>
  );
};

export default DefaultProfile;
