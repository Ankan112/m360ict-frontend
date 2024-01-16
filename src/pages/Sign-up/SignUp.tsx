import AuthTitle from "../../components/shared/AuthTitle";
import SocialButtons from "../../components/shared/SocialButtons";

const SignUp = () => {
  return (
    <div
      className="main-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <AuthTitle
          title="Getting Started"
          message="Create an account to continue!"
        />
        <SocialButtons />
      </div>
    </div>
  );
};

export default SignUp;
