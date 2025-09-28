import { useState, FormEvent, ChangeEvent } from "react";

interface Errors {
  title?: string;
  description?: string;
}

function Bugs() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccessMessage("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSuccessMessage("Bug submitted successfully!");
    setTitle("");
    setDescription("");
  };

  return (
    <div className="w-[90%] h-full flex justify-center py-10">
      <div className="w-[70%] bg-slate-100 flex flex-col gap-10 p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center text-blue-600 bg-blue-100 p-4 rounded-md shadow-md max-w-xl mx-auto">
          If you find a bug, you can submit it here. We have a bug bounty program!
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-[70%] mx-auto">
          <label className="flex flex-col">
            <span className="mb-2 font-medium text-gray-700">Bug Title</span>
            <input
              type="text"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.title ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
              }`}
              placeholder="Enter bug title"
            />
            {errors.title && <p className="text-red-500 mt-1 text-sm">{errors.title}</p>}
          </label>

          <label className="flex flex-col">
            <span className="mb-2 font-medium text-gray-700">Description</span>
            <textarea
              value={description}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
              rows={5}
              className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.description ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
              }`}
              placeholder="Describe the bug in detail"
            />
            {errors.description && <p className="text-red-500 mt-1 text-sm">{errors.description}</p>}
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`py-3 rounded-md font-semibold text-white transition ${
              isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Get 1M of $"}
          </button>

          {successMessage && (
            <p className="text-green-600 font-medium text-center mt-4">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Bugs;
