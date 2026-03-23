import { useState } from "react";
import FormControllePerso from "./FormControllePerso";
import FormNonControllePerso from "./FormNonControllePerso";
import ConvertisseurTemp from "./ConvertisseurTemp";
import ProfilUser from "./ProfilUser";
import { UserContextPerso } from "./UserContextPerso";

function App() {
  const [user, setUser] = useState({
    nom: "Oumaima",
    isConnected: true,
  });

  return (
    <UserContextPerso.Provider value={{ user, setUser }}>
      <div>
        <h1>TP React - Version Personnalisée</h1>

        <h2>Formulaire contrôlé</h2>
        <FormControllePerso />

        <h2>Formulaire non contrôlé</h2>
        <FormNonControllePerso />

        <h2>Gestion de température</h2>
        <ConvertisseurTemp />

        <h2>Espace utilisateur</h2>
        <ProfilUser />
      </div>
    </UserContextPerso.Provider>
  );
}

export default App;