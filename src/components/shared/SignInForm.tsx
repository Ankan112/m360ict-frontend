import {
  Button,
  Checkbox,
  CheckboxProps,
  Form,
  Input,
  message,
  Space,
} from "antd";
import at from "../../../public/icons/at.svg";
import lock from "../../../public/icons/lock.svg";
import { Link } from "react-router-dom";

const SignInForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: (
              <p
                style={{
                  marginTop: "16px",
                  marginBottom: "15px",
                  color: "#FF5630",
                }}
              >
                "Please enter a valid email address."
              </p>
            ),
          },
          { type: "email", warningOnly: true },
        ]}
      >
        <Input
          prefix={<img src={at} alt="at" />}
          style={{
            height: "58px",
            fontWeight: 500,
            fontSize: "16px",
            borderRadius: "16px",
            boxShadow: "0px 6px 8px 0px rgba(255, 86, 48, 0.10)",
            paddingLeft: "18px",
          }}
          placeholder="Your Email"
          type="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: (
              <p
                style={{
                  marginTop: "16px",
                  //   marginBottom: "15px",
                  color: "#FF5630",
                }}
              >
                "Please enter a valid password."
              </p>
            ),
          },
          { type: "string", warningOnly: true },
          { min: 6 },
        ]}
      >
        <Input.Password
          prefix={<img src={lock} alt="at" />}
          style={{
            height: "58px",
            fontWeight: 500,
            fontSize: "16px",
            borderRadius: "16px",
            // marginTop: "48px",
            boxShadow: "0px 6px 8px 0px rgba(255, 86, 48, 0.10)",
            paddingLeft: "18px",
            paddingRight: "18px",
          }}
          placeholder="Your password"
          type="password"
        />
      </Form.Item>
      <Checkbox
        style={{
          fontSize: "16px",
          fontWeight: 500,
          color: "#B0B7C3",
          //   height: "28px",
          //   width: "28px",
        }}
        onChange={onChange}
      >
        Remember Me
      </Checkbox>
      <Form.Item>
        <Space>
          <Button
            style={{
              width: "540px",
              marginTop: "31px",
              height: "58px",
              borderRadius: "16px",
              backgroundClip: "#377DFF",
              border: " 1px solid #377DFF",
              fontSize: "16px",
              fontWeight: 500,
              color: "white",
            }}
            type="primary"
            htmlType="submit"
          >
            Sign In
          </Button>
        </Space>
      </Form.Item>
      <p
        style={{
          marginTop: "35px",
          fontSize: "16px",
          fontWeight: 500,
          color: "#B0B7C3",
          textAlign: "center",
        }}
      >
        Don’t have an account yet?{" "}
        <Link to={"/sign-up"} style={{ color: "#377DFF" }}>
          Sign Up
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
