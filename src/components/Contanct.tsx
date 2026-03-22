"use client";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import SeparatorLine from "../utils/UI/SeparatorLine";
import PlanetEarth from "../utils/3DModels/PlanetEarth";
import { useLang } from "../context/LangProvider";
import { contactInfo } from "../constants/contactsConstant";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  const {lang} = useLang()
  
  if (lang !== "es" &&  lang !== "en" && lang !== "zh") {
    throw new Error("Language Problem")
  }

  const language = contactInfo[lang]

  const divRef = useRef<HTMLDivElement>(null!);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const apiKey = process.env.NEXT_PUBLIC_ACCESS_KEY

  console.log(apiKey)



  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey!,
    settings: {
      from_name: "Acme Inc",
      subject: "New Email From Your Portfolio",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <section
      className="wrapper flex-center-all flex-col mb-6 relative h-screen overflow-hidden z-500 bg-background"
      id="contact"
      ref={divRef}
    >
      <SeparatorLine sectionName={lang === 'zh' ? '联系我' : lang === 'es' ? 'Contacto' : 'Contact'} activeId="contact" />
      <div className="flex-center-all w-full h-full rounded-4xl relative">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-center-all flex-col z-10 relative sm:p-10 p-5"
        >
          <h3
            className="flex contact-field mb-4 border-x-2 px-1 py-2 bg-transparent"
          >
            {language.subtitle}
          </h3>
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          ></input>

          <div className="flex gap-2">
            <div className="">
              <input
                type="text"
                placeholder={language.formName}
                autoComplete="false"
                id="name"
                className={`w-full px-4 py-3 border-2 contact-field ${
                  errors.name ? "errorMessage" : "messageAccepted"
                }`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80,
                })}
              />
              {errors.name?.message && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message as string}</small>
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                {language.formEmail}
              </label>
              <input
                id="email_address"
                type="email"
                placeholder={language.formEmail}
                {...register("email")}
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 contact-field ${
                  errors.email ? "errorMessage" : "messageAccepted"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email?.message && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message as string}</small>
                </div>
              )}
            </div>
          </div>

          <div className="mb-3 w-full">
            <textarea
              {...register("message")}
              id="message"
              placeholder={language.formMessage}
              className={`w-full px-4 py-3 border-2 contact-field ${
                errors.message ? "errorMessage" : "messageAccepted"
              }`}
              {...register("message", {
                required: "Enter your Message",
              })}
            />
            {errors.message?.message && (
              <div className="mt-1 text-red-600">
                {" "}
                <small>{errors.message.message as string}</small>
              </div>
            )}
          </div>

          <button
            type="submit"
            id="send_email"
            className="flex sm:py-4 sm:px-7 py-2 px-4"
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              language.buttonText
            )}
          </button>

          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-sm text-center text-green-500">
              {message || "Success. Message sent successfully"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-sm text-center text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </form>
        <div className="w-full absolute inset-1 flex justify-center items-center">
          <PlanetEarth />
        </div>
      </div>

      <footer className="mt-16 text-sm ">
        © {new Date().getFullYear()} Alberto A. Silochi reserved.
      </footer>
    </section>
  );
};

export default Contact;
