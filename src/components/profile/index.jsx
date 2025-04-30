import React from "react";

const box = {
  border: "2px solid #ddd",
  borderRadius: "12px",
  padding: "15px",
  width: "220px",
  textAlign: "center",
  backgroundColor: "#fff0f5",
  margin: "10px",
};

const imgStyle = {
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "10px",
};

const textinho = {
  margin: "6px 0",
};

function Profile({ nome, idade, profissao, foto }) {
  return (
    <>
      <div style={box}>
        <img src={foto} alt={`Foto de ${nome}`} style={imgStyle} />
        <h3 style={textinho}>{nome}</h3>
        <p style={textinho}>Idade: {idade}</p>
        <p style={textinho}>Profissão: {profissao}</p>
      </div>
    </>
  );
}

export default Profile;
