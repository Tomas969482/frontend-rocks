import { useState, useEffect } from "react";
import { Link } from "react-router";

export const Root = () => {
  return (
    <div style={styles.card}>
      <h2>Il tuo nome</h2>
    </div>
  );
};

const styles = {
  card: {
    width: "200px",
    padding: "20px",
    border: "2px solid black",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
};
