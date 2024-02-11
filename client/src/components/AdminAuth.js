import React from "react";
import $ from "jquery";

const AdminAuth = () => {
  let date = new Date();
  let a = date.getDate();
  let b = date.getMonth() + 1;
  let c = date.getFullYear();
  let d = date.getHours();
  let password = "" + a + b + c + d;
  console.log(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredKey = e.target.form.key.value;
    if (enteredKey === password) {
      window.alert("logged in successfully!");
      $(".mainContactForm").hide(1000);
      $(".forHeight").css("min-height", "0");
      $(".onlyForAdmin").fadeIn(2000);
    } else if (enteredKey !== password) {
      window.alert("password is not correct");
    } else if (enteredKey === "") {
      window.alert("check password again");
    } else {
      window.alert("seems you are'nt admin");
    }
  };

  return (
    <div className="forHeight">
      <div className="mainContactForm flex">
        <div className="security h-[90vh] w-[40vw]"></div>
        <form className="flex flex-col justify-center text-center align-center bg-sky-400 p-8 h-[90vh] w-[60vw] dark:bg-sky-900">
          <center>
            <label className="text-[2rem]">
              <b>Enter Password 🔑</b>
            </label>
            <br />
            <input
              type="password"
              name="key"
              placeholder="******"
              required
              size="10"
              className="rounded-lg text-[1.5rem] m-4 text-center dark:text-black mt-20 border-2 border-sky-900 w-[15vw]"
              autoFocus
            />
            <br />
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white mt-20 text-[1.5rem] border-2 border-sky-900 p-4 rounded-lg hover:bg-sky-900 transition transition-all ease-linear w-[15vw] dark:hover:bg-sky-500 dark:border-2 dark:border-sky-500"
            >
              {" "}
              Log In 🚪{" "}
            </button>
          </center>
        </form>
        <br />
      </div>
    </div>
  );
};

export default AdminAuth;
