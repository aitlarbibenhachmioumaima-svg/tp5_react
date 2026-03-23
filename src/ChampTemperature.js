function ChampTemperature({ valeur, onChangeTemp }) {
  return (
    <input
      type="number"
      value={valeur}
      onChange={(e) => onChangeTemp(e.target.value)}
      placeholder="Entrer température"
    />
  );
}

export default ChampTemperature;