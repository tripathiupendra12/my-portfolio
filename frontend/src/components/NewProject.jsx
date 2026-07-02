import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    demoUrl: "",
    gitHubUrl: "",
  });

  const [errors, setErrors] = useState({});
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.image) newErrors.image = "Image is required";
    if (!formData.demoUrl.trim())
      newErrors.demoUrl = "demoUrl is required";
    if (!formData.gitHubUrl.trim())
      newErrors.gitHubUrl = "gitHubUrl is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const data = new FormData();

      data.append("image", formData.image);
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("demoUrl", formData.demoUrl);
      data.append("gitHubUrl", formData.gitHubUrl);

      await axios.post("http://localhost:8080/newProject", data);

      // ✅ reset form after success
      setFormData({
        title: "",
        description: "",
        image: null,
        demoUrl: "",
        gitHubUrl: "",
      });

      setErrors({});
      setErr(null);

      navigate("/");
    } catch (error) {
      setErr(error.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex justify-center mb-16 px-8 py-6 ">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl">
        <h3 className="text-3xl font-medium text-gray-700 py-4">
          Create a New Project :
        </h3>

        <form onSubmit={handleSubmit} noValidate>
          
          {/* Title */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">
              Title
            </label>
            <input
              name="title"
              type="text"
              className="w-full px-4 py-3 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formData.title}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              className="w-full px-4 py-3 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formData.description}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          {/* Image */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">
              Image
            </label>
            <input
              name="image"
              type="file"
              accept="image/*"
              className="w-full px-4 py-3 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
          </div>

          {/* Demo URL */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">
              demoUrl
            </label>
            <input
              name="demoUrl"
              type="text"
              className="w-full px-4 py-3 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formData.demoUrl}
            />
            {errors.demoUrl && (
              <p className="text-red-500 text-sm">{errors.demoUrl}</p>
            )}
          </div>

          {/* GitHub URL */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">
              gitHubUrl
            </label>
            <input
              name="gitHubUrl"
              type="text"
              className="w-full px-4 py-3 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formData.gitHubUrl}
            />
            {errors.gitHubUrl && (
              <p className="text-red-500 text-sm">{errors.gitHubUrl}</p>
            )}
          </div>

          {/* Error */}
          {err && (
            <p className="text-red-600 mb-4">{err}</p>
          )}

          <button
            type="submit"
            className="px-4 py-2 rounded-2xl text-gray-200 bg-blue-700 hover:bg-gray-800 cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProject;