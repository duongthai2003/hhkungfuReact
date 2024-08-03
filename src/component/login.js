import { Button, Checkbox, Form, Input, Modal } from "antd";
import { useContext, useEffect, useState } from "react";
import HTTP from "../HTTP";
import { config, setconfig } from "../showMovie/showMovie";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { ComponentContext } from "../hook/ComponentContext";

function Login({ isOpen, setIsOpen }) {
  const { setLoginSuccess } = useContext(ComponentContext);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleCancel = () => {
    setIsOpen(false);
    setIsRegister(false);
  };

  const onFinish = async (values) => {
    try {
      const response = await HTTP.post("auth/login", {
        ...values,
        rememberLogin: true,
      });

      localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.data.accessToken)
      );
      toast.success("Đăng nhập thành công", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setLoginSuccess(response.data.data.accessToken);
      setIsOpen(false);
    } catch (err) {
      console.log(err);
      toast.error("Đăng nhập thất bại", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const onFinishRegister = async (values) => {
    console.log("Success:", values);
    try {
      const response = await HTTP.post("auth/register", {
        ...values,
      });

      toast.success("Đăng ký thành công", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setIsRegister(false);
    } catch (err) {
      console.log(err);
      toast.error("Đăng Ký thất bại", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
      <Modal
        title="Đăng Nhập"
        open={open || isOpen}
        // onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={false}
      >
        {!isRegister ? (
          <Form
            name="basic"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={
              {
                // remember: true,
                // email: "thiaq9577@gmail.com",
                // password: "12345678",
              }
            }
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật Khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <div>
              Bạn chua có tài khoản?{" "}
              <span
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsRegister(true);
                }}
              >
                Đăng kí
              </span>
            </div>
            <br />
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <Form
            name="basic"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={
              {
                // remember: true,
                // firstName: "Duong",
                // lastName: "Thai",
                // username: "DuongThai",
                // email: "thiaq9577@gmail.com",
                // password: "12345678",
              }
            }
            onFinish={onFinishRegister}
            onFinishFailed={onFinishFailed}
            // autoComplete="off"
            labelAlign={"start"}
          >
            <Form.Item
              label="Họ"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your firstName!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Tên"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your lastName!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật Khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <div>
              Bạn đã có tài khoản?{" "}
              <span
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsRegister(false);
                }}
              >
                Đăng nhập
              </span>
            </div>
            <br />
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Đăng Ký
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
}
export default Login;
