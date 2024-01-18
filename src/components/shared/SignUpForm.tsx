import {
  Button,
  Checkbox,
  CheckboxProps,
  Form,
  Input,
  message,
  Space,
} from "antd";
import at from "../../assets/icons/at.svg";
import lock from "../../assets/icons/lock.svg";
import smile from "../../assets/icons/smile.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

type SingUpType = {
  email: string;
  password: string;
  name: string;
};

const SignUpForm: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (value: SingUpType) => {
    // api here
    const data = { ...value, checked };
    console.log(value, "data", data);
    message.success("Sign Up Successful!");
    form.resetFields();
  };

  const onFinishFailed = () => {
    message.error("Fill the form!");
  };
  const onChange: CheckboxProps["onChange"] = (e) => {
    setChecked(e.target.checked);
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
          prefix={<img style={{ marginRight: "12px" }} src={at} alt="at" />}
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
        name="name"
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
                "Please enter you name."
              </p>
            ),
          },
          { type: "string", warningOnly: true },
        ]}
      >
        <Input
          prefix={<img style={{ marginRight: "12px" }} src={smile} alt="at" />}
          style={{
            height: "58px",
            fontWeight: 500,
            fontSize: "16px",
            borderRadius: "16px",
            boxShadow: "0px 6px 8px 0px rgba(255, 86, 48, 0.10)",
            paddingLeft: "18px",
          }}
          placeholder="Your name"
          type="string"
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
                  marginBottom: "15px",
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
          prefix={<img style={{ marginRight: "12px" }} src={lock} alt="at" />}
          style={{
            height: "58px",
            fontWeight: 500,
            fontSize: "16px",
            borderRadius: "16px",
            boxShadow: "0px 6px 8px 0px rgba(255, 86, 48, 0.10)",
            paddingLeft: "18px",
            paddingRight: "18px",
          }}
          placeholder="Your password"
          type="password"
        />
      </Form.Item>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "30px",
        }}
      >
        <p
          style={{
            width: "68px",
            height: "4px",
            borderRadius: "2px",
            background: "#38CB89",
          }}
        ></p>
        <p
          style={{
            width: "68px",
            height: "4px",
            borderRadius: "2px",
            background: "#38CB89",
          }}
        ></p>
        <p
          style={{
            width: "68px",
            height: "4px",
            borderRadius: "2px",
            background: "#38CB89",
          }}
        ></p>
        <p
          style={{
            width: "68px",
            height: "4px",
            borderRadius: "2px",
            background: "#38CB89",
          }}
        ></p>
        <p
          style={{
            width: "68px",
            height: "4px",
            borderRadius: "2px",
            background: "#38CB89",
          }}
        ></p>
        <p
          style={{
            width: "68px",
            height: "4px",
            borderRadius: "2px",
            background: "#F3F3F3",
          }}
        ></p>
      </div>
      <Checkbox
        style={{
          fontSize: "16px",
          fontWeight: 500,
          color: "#B0B7C3",
        }}
        onChange={onChange}
      >
        I agree to the Terms & Conditions
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
            Sign Up
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
        Already have an account?{" "}
        <Link to={"/sign-in"} style={{ color: "#377DFF" }}>
          Sign In
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
