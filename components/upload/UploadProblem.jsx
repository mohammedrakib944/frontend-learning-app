import Link from "next/link";
import React from "react";
import { useState } from "react";

const UploadProblem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    let errors = {};
    if (!title) {
      errors.title = "Title is required";
    }
    if (!description) {
      errors.description = "Description is required";
    }
    if (!category) {
      errors.category = "Category is required";
    }
    if (!budget) {
      errors.budget = "Budget is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-b py-6 px-5 rounded-lg mt-2"
    >
      <h1 className="secondary_title uppercase">Add Problem Title</h1>
      <br />
      <textarea
        id="title"
        rows="2"
        className="textarea textarea-bordered w-full"
        placeholder="Need help to host my website ..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <span className="text-red-500">{errors.title}</span>}
      <br />
      <br />
      <p className="mb-3">
        The more context you provide, the better our experts can help you.
      </p>
      <textarea
        id="description"
        rows="4"
        className="textarea textarea-bordered w-full"
        placeholder="Provide more context here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.description && (
        <span className="text-red-500">{errors.description}</span>
      )}
      <br /> <br />
      <div className="flex flex-col md:flex-row justify-between mt-4">
        <select
          id="category"
          className="select select-bordered"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Choose a category</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Math">Math</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Website Hosting">Website Hosting</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Others">Others</option>
        </select>
        {errors.category && (
          <span className="text-red-500">{errors.category}</span>
        )}
        <input
          type="number"
          id="budget"
          className="input input-bordered"
          placeholder="Enter budget (Taka)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        {errors.budget && <span className="text-red-500">{errors.budget}</span>}
      </div>
      <div className="mt-6 flex justify-end">
        <button type="reset" className="btn_secondary mr-4 ">
          Cancel
        </button>
        <button type="submit" className="btn btn-sar px-5 py-2 rounded-full">
          Post your problem
        </button>
      </div>
    </form>
  );
};

export default UploadProblem;
