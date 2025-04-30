import React from "react"
import Profile from "./components/profile/index.jsx"
const logoUrl = "https://i.pinimg.com/736x/db/bd/b5/dbbdb52017ffdce38af556366ae68793.jpg"

export default function App() {
  return (
    <div>
    <div style={{ padding: "20px", textAlign: "center" }}>

      <header style={{ marginBottom: "30px" }}>
        <img src={logoUrl} alt="Logo da TechVision" style={{ width: "60px" }} />
        <h1 style={{ fontFamily: "Arial", color: "#444" }}>TechVision</h1>
      </header>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" }}>
      <Profile
        nome="Maria José"
        idade={17}
        profissao="Dev iniciante "
        foto="https://pbs.twimg.com/profile_images/1347513889504845824/1NrWF2NF_400x400.jpg"
      />
      <Profile
        nome="Agatha Nunes"
        idade={18}
        profissao="Estudante de TI "
        foto="https://img.quizur.com/f/img6508423556fbe5.02447772.jpg"
      />
      <Profile
        nome="Ygona"
        idade={16}
        profissao="Designer"
        foto="https://www.rbsdirect.com.br/filestore/3/1/1/5_64d3656f78c9035/5113_09f26c2cf88c771.jpg"
      />
    </div>
   </div> 
    </div>
  )
}


