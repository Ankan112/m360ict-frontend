import AuthTitle from "../../components/shared/AuthTitle";
import SocialButtons from "../../components/shared/SocialButtons";

const SignIn = () => {
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
        {/* Auth title component */}
        <AuthTitle
          title="Sign In"
          message="Welcome back, you’ve been missed!"
        />
        {/* social buttons component */}
        <SocialButtons />
      </div>
    </div>
  );
};

export default SignIn;
