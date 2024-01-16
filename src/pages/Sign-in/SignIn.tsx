import { Button, Divider } from "antd";
import google from "../../../public/icons/google.svg";
import iphone from "../../../public/icons/iphone.svg";

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
        <div style={{ textAlign: "center" }}>
          <h2
            style={{ color: "#323B4B", fontSize: "26px", fontWeight: "bold" }}
          >
            Sign In
          </h2>
          <p
            style={{
              color: "#8A94A6",
              marginTop: "19px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Welcome back, you’ve been missed!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Button
            type="primary"
            style={{
              backgroundColor: "#F0F5FA",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "11px",
              borderRadius: "16px",
              fontSize: "16px",
              fontWeight: "500",
              width: "255px",
              height: "58px",
              color: "#8A94A6",
            }}
          >
            <img src={google} alt="GoogleIcon" />
            Sing In with Google
          </Button>
          <Button
            type="primary"
            style={{
              backgroundColor: "#F0F5FA",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "11px",
              borderRadius: "16px",
              fontSize: "16px",
              fontWeight: "500",
              width: "255px",
              height: "58px",
              color: "#8A94A6",
            }}
          >
            <img src={iphone} alt="IphoneIcon" /> Sign In with Apple ID
          </Button>
        </div>
        <Divider
          style={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#B0B7C3",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          OR
        </Divider>
      </div>
    </div>
  );
};

export default SignIn;
