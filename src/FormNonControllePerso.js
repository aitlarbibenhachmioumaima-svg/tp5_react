import { useRef } from "react";

function FormNonControllePerso() {
  const inputNom = useRef(null);
  const inputEmail = useRef(null);

  const envoyerDonnees = (e) => {
    e.preventDefault();

    const nom = inputNom.current.value;
    const email = inputEmail.current.value;

    alert(`Nom saisi : ${nom} | Email : ${email}`);
  };

  return (
    <form onSubmit={envoyerDonnees}>
      <input type="text" ref={inputNom} placeholder="Nom complet" />
      <input type="email" ref={inputEmail} placeholder="Adresse email" />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormNonControllePerso;