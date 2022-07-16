import React from "react";
import "./AuthForm.css";

const AuthForm = () => {
  return (
    <div className="form_auth_block">
      <div className="form_auth_block_content">
        <p className="form_auth_block_head_text">Authorization</p>
        <form className="form_auth_style" action="#" method="post" />
        <label>Write your email</label>
        <input
          type="email"
          name="auth_email"
          placeholder="Write your email"
          required
        />
        <label>Write your password</label>
        <input
          type="password"
          name="auth_pass"
          placeholder="Write your password"
          required
        />
        <button
          className="form_auth_button"
          type="submit"
          name="form_auth_submit"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
