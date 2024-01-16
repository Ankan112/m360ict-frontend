import AuthTitle from "../../components/shared/AuthTitle";
import SignUpForm from "../../components/shared/SignUpForm";
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
        {/* auth title component */}
        <AuthTitle
          title="Getting Started"
          message="Create an account to continue!"
        />
        {/* social login buttons */}
        <SocialButtons />
        {/* Sign up form */}
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
