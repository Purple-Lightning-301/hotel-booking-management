import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import * as ApiCaller from "./../../helpers/index";
import axios from "axios";
import * as Setting from "./../../components/constants/Setting";
import { useCookies } from "react-cookie";

Register.propTypes = {
    
};

function Register(props) {
  let history = useHistory();

  const [email, setEmail] = useState("philong3@gmail.com");
  const [password, setPassword] = useState("123456");
  const [confirmPassword, setConfirmPassword] = useState("123456");
  const [name, setName] = useState("philong");

  const [userInfo, setUserInfo] = useCookies([""]);
  const [nameUser, setNameUser] = useCookies('');
  const [cookies, setCookie] = useCookies([""]);

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
    {/* name, email, password, confirmPassword là các trường của API signup quy định */}
    const config = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    let url = (await Setting.URL) + "api/auth/signup";

    try {
      return axios(url, {
        method: "POST",
        data: data,
        config,
      })
        .then((res) => {
          console.log(res.status);
          if (res.status == 201) {
          
            {/*
            setCookie("access_token", res.data.access_token, { path: "/login" });
            setUserInfo("user_info", res.data.user, { path: "/login" });
            setNameUser("name_user", res.data.user.name)
            console.log(nameUser.name_user) */}
            history.push("/login");
          } else {
            alert("kiểm tra lại thông tin đăng kí");
          }
        })
        .catch((err) => {
          alert("kiểm tra lại thông tin đăng kí");
          console.log(err);
        });
    } catch (err) {
      alert("kiểm tra lại thông tin đăng kí");
      console.log(err);
    }
  }

    return (
        <div class="c-app flex-row align-items-center">
            <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mx-4">
              <div className="card-body p-4">
                <h1>Register</h1>
                {/*start form*/}
                <form onSubmit={handleRegister}>
                <p className="text-muted">Create your account</p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><span className="input-group-text">
                      <svg className="c-icon">
                        <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-user" />
                      </svg></span></div>
                  <input className="form-control" type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><span className="input-group-text">
                      <svg className="c-icon">
                        <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open" />
                      </svg></span></div>
                  <input className="form-control" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><span className="input-group-text">
                      <svg className="c-icon">
                        <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                      </svg></span></div>
                  <input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend"><span className="input-group-text">
                      <svg className="c-icon">
                        <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                      </svg></span></div>
                  <input className="form-control" type="password" placeholder="Repeat password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button className="btn btn-block btn-success" type="submit">Create Account</button>
                {/*end form*/}
                </form>
              </div>
              <div className="card-footer p-4">
                <div className="row">
                  <div className="col-6">
                    <button className="btn btn-block btn-facebook" type="button"><span>facebook</span></button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-block btn-twitter" type="button"><span>twitter</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Register;