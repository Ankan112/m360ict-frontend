import AuthTitle from "../../components/shared/AuthTitle";
import SignInForm from "../../components/shared/SignInForm";
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
      <div style={{ width: "540px" }}>
        {/* Auth title component */}
        <AuthTitle
          title="Sign In"
          message="Welcome back, you’ve been missed!"
        />
        {/* social buttons component */}
        <SocialButtons />
        {/* SignIn form */}
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
