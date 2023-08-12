import { useTranslation, useRef } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const RegisterPage = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex items-center min-h-screen px-20 bg-[#111]">
      <div className="flex-1 h-full max-w-screen mx-auto bg-[#111]">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2 rounded-3xl py-5 pt-20">
            <img
              className="object-cover w-full h-full rounded-3xl"
              src="/images/form.png"
              alt="img"
            />
          </div>
          <div className="flex  items-center justify-center p-6 sm:p-12 md:w-1/2">
            <form
              className="w-full flex flex-col gap-6 h-full pt-16 justify-between py-10"
              onSubmit={sendEmail}
            >
              <h1 className="mb-4 text-4xl text-red-800 changa font-bold text-center">
                {t("form.register")}
              </h1>
              <div>
                <input
                  type="text"
                  name="user_name"
                  className="w-full bg-transparent px-4 py-2 text-white rounded text-sm border border-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={t("form.your_name")}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full bg-transparent px-4 py-2 text-white rounded text-sm border border-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={t("form.pets_name")}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full bg-transparent px-4 py-2 text-white rounded text-sm border border-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={t("form.pets_type")}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="user_email"
                  className="w-full bg-transparent px-4 py-2 text-white rounded text-sm border border-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={t("form.email_adress")}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full bg-transparent px-4 py-2 text-white rounded text-sm border border-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={t("form.pets_age")}
                />
              </div>
              <div>
                <textarea
                  className="w-full bg-transparent px-4 py-2 text-white rounded text-sm border border-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={t("form.any_notes")}
                  cols={9}
                  rows={9}
                ></textarea>
                <button
                  className="block w-full mt-16 px-4 py-2  text-sm font-medium leading-5 text-center text-gray-800 transition-colors duration-150 bg-gray-50 border border-transparent rounded-lg active:bg-blue-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:shadow-outline-blue"
                  type="submit"
                >
                  {t("form.register")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
