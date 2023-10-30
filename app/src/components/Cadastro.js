import { useState } from "react";
import "../styles/Cadastro.css";

function Cadastro() {
  const [formType, setFormType] = useState("");
  const [inputValue, setInputValue] = useState({
    nome: "",
    cpfCnpj: "",
    email: "",
    senha: "",
    cep: "",
    dataNascimento: "",
  });

  const formQuestions = {
    ong: ["Nome", "CPF do Diretor", "Email", "Senha", "CEP"],
    pf: ["Nome", "CPF", "Data de Nascimento", "Email", "Senha", "CEP"],
    pj: ["Nome", "CNPJ", "Email", "Senha", "CEP"],
  };

  const handleInputChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleFormTypeChange = (type, event) => {
    event.preventDefault();
    setFormType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const relevantFields = formQuestions[formType].map(q => q.toLowerCase().replace(" ", ""));
    const dataToStore = Object.keys(inputValue)
      .filter(key => relevantFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = inputValue[key];
        return obj;
      }, {});

    dataToStore.accountType = formType;

    localStorage.setItem(formType, JSON.stringify(dataToStore));
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="login-form-title"> Seja bem vindo ao:</span>
            <br></br>
            <span className="login-form-title">
            <img src="logo.png" alt="Care" />
            </span>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={(e) => handleFormTypeChange("ong", e)}>ONG</button>
              <button className="login-form-btn" onClick={(e) => handleFormTypeChange("pf", e)}>PF</button>
              <button className="login-form-btn" onClick={(e) => handleFormTypeChange("pj", e)}>PJ</button>
            </div>

            {formType && formQuestions[formType].map((question) => (
              <div key={question} className="wrap-input">
                <input
                  className={inputValue[question.toLowerCase().replace(" ", "")] !== "" ? "has-val input" : "input"}
                  type={question === 'Senha' ? 'password' : question === 'Email' ? 'email' : question.includes('CPF') || question === 'CNPJ' || question === 'CEP' ? 'number' : 'text'}
                  name={question.toLowerCase().replace(" ", "")}
                  value={inputValue[question.toLowerCase().replace(" ", "")]}
                  onChange={handleInputChange}
                  required
                />
                <span className="focus-input" data-placeholder={question}></span>
              </div>
            ))}

            <div className="container-login-form-btn">
              <button type="button" className="login-form-btn">Voltar</button>
              <button type="submit" className="login-form-btn">Enviar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;