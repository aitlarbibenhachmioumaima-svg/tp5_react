import { useState } from "react";

function FormControllePerso() {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Utilisateur : ${username} | Email : ${userEmail}`);
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Votre nom"
      />

      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Votre email"
      />

      <button type="submit">Valider</button>
    </form>
  );
}

export default FormControllePerso;