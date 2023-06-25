import React, { useState } from "react";
import "../Contact.css";

function Contact() {
  const password = "test";
  const [authorized, setAuthorized] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    password: ""
  });
  const [submittedData, setSubmittedData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const enteredPassword = formData.password;

    const auth = enteredPassword === password;
    setAuthorized(auth);
    if (auth) {
      setSubmittedData([...submittedData, formData]);
      setFormData({ nombre: "", apellido: "", telefono: "", password: "" });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  let login = (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Apellido"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Teléfono"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );

  let contactInfo = (
    <ul>
      {submittedData.map((data, index) => (
        <li key={index}>
          Nombre: {data.nombre}, Apellido: {data.apellido}, Teléfono: {data.telefono}
        </li>
      ))}
    </ul>
  );

  return (
    <div id="authorization">
      {authorized ? <h1>Contact</h1> : <h1>Enter the Password</h1>}
      {authorized ? contactInfo : login}
    </div>
  );
}

export default Contact;

