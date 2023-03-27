import { useEffect, useState } from "react";

export default function Register() {
  const URL = "http://localhost:8080/admin/role/list";

  const REGISTER_URL = "http://localhost:8080/admin/register";

  const initialFormData = Object.freeze({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    userrole: 0,
    address: "",
  });

  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    fetchRoles();
  }, [formData]);

  const fetchRoles = async () => {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
  };

  const handleChange = async (e) => {
    console.log(e.target.id);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const FETCHED_DATA = await fetch(REGISTER_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  };
  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="firstname">
          FirstName:
          <input onChange={handleChange} type="text" name="firstname" />
        </label>
        <label htmlFor="lastname">
          LastName:
          <input onChange={handleChange} type="text" name="lastname" />
        </label>
        <label htmlFor="email">
          Email:
          <input onChange={handleChange} type="email" name="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input onChange={handleChange} type="password" name="password" />
        </label>
        <label htmlFor="phone">
          PhoneNumber:
          <input onChange={handleChange} type="number" name="phone" />
        </label>
        <label htmlFor="roles">
          Roles:
          <select onChange={handleChange} name="userrole">
            {roles &&
              roles.map((role, index) => (
                <option key={index} value={role._id}>
                  {role.name}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="address">
          Address:
          <textarea
            onChange={handleChange}
            name="address"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <button type="submit">Submit Register</button>
      </form>
    </div>
  );
}
