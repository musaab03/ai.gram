import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import preview from "../assets/preview.png";
import { getRandomPrompt } from "../utils/utils";
import FormField from "../components/FormField";
import Loader from "../components/Loader";

export type PostType = {
  _id: string;
  name: string;
  prompt: string;
  photo: string;
};

export type FormPostType = {
  name: string;
  prompt: string;
  photo: string;
};

const CreatePost: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const [form, setForm] = useState<FormPostType>({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  const generateImage = async () => {
    setDisabled(true);

    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
        setDisabled(false);
      } catch (error) {
        toast.error("Something went wrong", { duration: 3000 });
        setDisabled(false);
      } finally {
        setGeneratingImg(false);
        setDisabled(false);
        toast.success("Image Generated", { duration: 3000 });
      }
    } else {
      setDisabled(false);
      toast.error("Please enter a prompt", { duration: 3000 });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setDisabled(true);
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);

      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        await response.json();
        navigate("/");
      } catch (error) {
        toast.error("Something went wrong", { duration: 3000 });
        setLoading(false);
        setDisabled(false);
      }
    } else {
      toast.error("Please enter a prompt", { duration: 3000 });
      setDisabled(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSupriseMe = () => {
    const randomPrompt: string = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto text-center">
      <div>
        <h1 className="font-extrabold text-[#222328] text-3xl">Create</h1>
        <p className="mt-4 text-[#666e75] text-[16px] max-w-54">
          Create imaginative and visually appealing images through the DALL-E AI
          and share them with everyone else
        </p>
      </div>

      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A chicken crossing a road"
            value={form.prompt}
            handleChange={handleChange}
            isSupriseMe
            handleSupriseMe={handleSupriseMe}
          />

          <div className="mt-5">
            <button
              type="button"
              onClick={generateImage}
              className="text-white bg-green-700 font-medium rounded-md text-md w-full sm:w-1/2 px-5 py-3 text-center"
              disabled={disabled}
            >
              {generatingImg ? "Generating..." : "Generate"}
            </button>
          </div>

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl drop-shadow-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-3 h-96 flex justify-center mx-auto mt-6">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-xl">
                <Loader />
              </div>
            )}
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-auto sm:w-1/2 px-5 py-3 text-center"
              disabled={disabled}
            >
              {isLoading ? "Posting..." : "Post to the community"}
            </button>
          </div>
        </div>
      </form>
      <Toaster />
    </section>
  );
};

export default CreatePost;
