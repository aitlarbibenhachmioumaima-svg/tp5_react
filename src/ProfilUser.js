import { useContext } from "react";
import { UserContextPerso } from "./UserContextPerso";

function ProfilUser() {
  const { user, setUser } = useContext(UserContextPerso);

  const logout = () => {
    setUser({ nom: "", isConnected: false });
  };

  return (
    <div>
      {user.isConnected ? (
        <>
          <p>Bonjour {user.nom} 👋</p>
          <button onClick={logout}>Déconnexion</button>
        </>
      ) : (
        <p>Utilisateur non connecté</p>
      )}
    </div>
  );
}

export default ProfilUser;