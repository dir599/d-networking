import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => {
    setHidden(!hidden);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      },
    );
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="p-4">
      <form method="post" onSubmit={(e) => handleLogin(e)}>
        <fieldset>
          <label htmlFor="email">Email: </label>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              className="w-full border rounded p-2 pr-12"
            />
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password: </label>
          <div className="relative">
            <input
              type={hidden ? "password" : "text"}
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              className="w-full border rounded p-2 pr-12"
            />
            <button
              type="button"
              onClick={handleHidden}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {hidden ? "show" : "hide"}
            </button>
          </div>
        </fieldset>
        <button type="submit" className="border p-2 rounded mt-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
