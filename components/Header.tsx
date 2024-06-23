"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { LoginIcon, OrderBasket, SearchIcon } from "@/assets/icns";
import { Button } from "./Button";
import { Badge, Input, Modal } from "antd";
import axios from "axios";

const Header = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("Login");
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const token = window.localStorage.getItem("token");

  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [RegisterFirstName, setRegisterFirstName] = useState<string>("");
  const [RegisterLastName, setRegisterLastName] = useState<string>("");
  const [RegisterPassword, setRegisterPassword] = useState<string>("");

  const [forgotEmail, setForgotEmail] = useState<string>("");
  const ForgotBtnClick = () => {
    axios
      .post(
        `http://3.70.236.23:7777/v1/forgot`,
        {},
        {
          params: {
            email: forgotEmail,
          },
        }
      )
      .then((res) => {
        setModalContent("ForgotVerify");
      });
  };

  const [forgotOTPcode, setForgotOTPcode] = useState<string>("");
  const forgotOTPBtnClick = () => {
    axios
      .post(
        `http://3.70.236.23:7777/v1/verify`,
        {},
        {
          params: {
            email: forgotEmail,
            otp: forgotOTPcode,
          },
        }
      )
      .then((res) => {
        setLoginEmail(forgotEmail);
        setModalContent("Login");
      });
  };

  const [forgotRegisterOTP, setForgotRegisterOTP] = useState<string>("");
  const registerVerifyClick = () => {
    const data = {
      code: forgotRegisterOTP,
      email: registerEmail,
    };
    try {
      axios.post(`http://3.70.236.23:7777/v1/user/verify`, data).then((res) => {
        setModalContent("Login");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value == "") {
      setTimeout(() => {
        setShowSearchInput(false);
      }, 2000);
    }
  };
  const handleLoginModalOpnen = () => {
    const data = {
      password: loginPassword,
      usernameoremail: loginEmail,
    };
    try {
      axios.post(`http://3.70.236.23:7777/v1/login`, data).then((res) => {
        window.localStorage.setItem("token", res.data.access_token);
        setModalVisible(false);
        setLoginPassword("");
        setLoginEmail("");
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleregisterBtnClick = () => {
    const data = {
      email: registerEmail,
      firstName: RegisterFirstName,
      lastName: RegisterLastName,
      password: RegisterPassword,
    };
    try {
      axios.post(`http://3.70.236.23:7777/v1/register`, data).then((res) => {
        setModalContent("RegisterVerify");
        setRegisterEmail(registerEmail);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [basketList, setBasketList] = useState<any>([]);
  useEffect(() => {
    if (token){
      axios
      .get(`http://3.70.236.23:7777/basket`, {
        params: {
          page: 1,
          limit: 10,
        },
        headers: {
          "Authorization": "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        
        setBasketList(res.data.ProductId);
      });
    }
   
  }, []);

  return (
    <header className="pt-[20px]">
      <div className="container flex items-center justify-between  border-b-[1px] border-[#46A35880] px-[24px]">
        <Link className="pb-[10px]" href={"/"}>
          <Image
            src={"/siteLogo.svg"}
            width={150}
            height={34}
            alt="Site Logo"
            priority={true}
          />
        </Link>
        <Navbar />
        <div className="flex items-center space-x-[30px] pb-[10px]">
          <button
            className="flex items-center"
            onClick={() => setShowSearchInput(true)}
          >
            {!showSearchInput && <SearchIcon />}

            <input
              onChange={handleSearchChangeInput}
              className={`${
                showSearchInput ? " py-[11px] pl-[41px] w-[313px]" : "w-[0px]"
              } search-input duration-500 outline-none focus:shadow font-normal leading-[16px] text-[14px] bg-[#F8F8F8] rounded-[10px]`}
              type="text"
              name="plant-search"
              aria-label="Find your plants"
              autoComplete="off"
              placeholder="Find your plants"
            />
          </button>
          <Badge count={basketList?.length}>
            <Link href={'/shop/order'}>
              <OrderBasket />
            </Link>
          </Badge>
          <Button
            onClick={() => setModalVisible(true)}
            buttonWidth={100}
            title="Login"
            iconPozition="prev"
            icon={<LoginIcon />}
          />
        </div>
      </div>
      <div
        id="modal-wrapper"
        className={`modal fixed z-10 backdrop-blur-md h-[100vh] w-full scale-0 top-0`}
      >
        <div className=" absolute w-[20%] h-[100vh] bg-blue-200 right-[-100%]"></div>
      </div>
      <Modal
        open={modalVisible}
        onOk={handleLoginModalOpnen}
        onCancel={() => setModalVisible(false)}
      >
        <div className="p-5">
          <ul className="flex cursor-pointer items-center space-x-3 text-[15px] font-semibold justify-center">
            <li
              className={`${modalContent == "Login" ? "text-[#46A358]" : ""}`}
              onClick={() => setModalContent("Login")}
            >
              Login
            </li>
            <li className="w-[1px] mx-5 h-[35px] bg-black"></li>
            <li
              className={`${
                modalContent == "Register" ? "text-[#46A358]" : ""
              }`}
              onClick={() => setModalContent("Register")}
            >
              Register
            </li>
          </ul>
        </div>
        {modalContent == "Login" && (
          <div className="flex flex-col items-center space-y-[17px]">
            <input
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              type="email"
              placeholder="almamun_uxui@outlook.com"
              className="modalLoginInp"
            />
            <input
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              type="password"
              placeholder="************"
              className="modalLoginInp"
            />
            <div className="w-[100%] flex justify-end">
              <button
                onClick={() => setModalContent("ForgotEmail")}
                className=" text-[15px] font-normal block text-start text-[#46a358]"
              >
                Forgot password?
              </button>
            </div>
            <Button
              onClick={handleLoginModalOpnen}
              title="Login"
              buttonWidth={320}
            />
          </div>
        )}
        {modalContent == "Register" && (
          <div className="flex flex-col items-center space-y-[17px]">
            <input
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              type="email"
              placeholder="almamun_uxui@outlook.com"
              className="modalLoginInp"
            />
            <input
              value={RegisterFirstName}
              onChange={(e) => setRegisterFirstName(e.target.value)}
              type="text"
              placeholder="first name"
              className="modalLoginInp"
            />
            <input
              value={RegisterLastName}
              onChange={(e) => setRegisterLastName(e.target.value)}
              type="text"
              placeholder="Last name"
              className="modalLoginInp"
            />
            <input
              value={RegisterPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              type="password"
              placeholder="************"
              className="modalLoginInp"
            />

            <Button
              onClick={handleregisterBtnClick}
              title="Register"
              buttonWidth={320}
            />
          </div>
        )}
        {modalContent == "ForgotEmail" && (
          <div className=" flex flex-col space-y-5 items-center">
            <Input
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <Button
              onClick={ForgotBtnClick}
              title="Send code"
              buttonWidth={320}
            />
          </div>
        )}
        {modalContent == "ForgotVerify" && (
          <div className=" flex flex-col space-y-5 items-center">
            <Input.OTP
              length={6}
              value={forgotOTPcode}
              onChange={(e) => setForgotOTPcode(e)}
              size="large"
            />
            <Button
              onClick={forgotOTPBtnClick}
              title="Enter code"
              buttonWidth={320}
            />
          </div>
        )}
        {modalContent == "RegisterVerify" && (
          <div className=" flex flex-col space-y-5 items-center">
            <Input.OTP
              length={6}
              value={forgotRegisterOTP}
              onChange={(e) => setForgotRegisterOTP(e)}
              size="large"
            />
            <Button
              onClick={registerVerifyClick}
              title="Enter code"
              buttonWidth={320}
            />
          </div>
        )}
      </Modal>
    </header>
  );
};

export default Header;
