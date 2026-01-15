//


export const Root = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="https://via.placeholder.com/200"
          alt="immagine card"
          style={styles.image}
        />
        <h2>Il mio nome</h2>
        <p>Questa è la mia prima card in React</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  card: {
    width: "220px",
    border: "2px solid black",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
    fontFamily: "Arial",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "10px",
  },
};