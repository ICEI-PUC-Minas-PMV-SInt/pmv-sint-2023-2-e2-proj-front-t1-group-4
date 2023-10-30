import React, { useState } from 'react';
import '../styles/PostagemCampanha.css'; 

function PostagemCampanha() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [contato, setContato] = useState({
    nome: '',
    email: '',
    telefone: '',
  });

  const handlePostagem = () => {
  };

  return (
    <div className="page-container">
      <div className="content-container"> {}
        <h2 className="postagem-title">Postagem de Campanhas (ONGs)</h2>
        <form>
          <div className="postagem-input">
            <label htmlFor="titulo">Título da Campanha:</label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="postagem-input">
            <label htmlFor="descricao">Descrição da Campanha:</label>
            <textarea
              id="descricao"
              placeholder="Sua mensagem! Detalhe o objetivo da campanha, quem será beneficiado e por que é importante."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              style={{ minHeight: '100px' }}
            />
          </div>
          <div className="postagem-input">
            <label htmlFor="anexos">Anexar Fotos ou Vídeos:</label>
            <input type="file" id="anexos" multiple />
          </div>    
          <div className="postagem-input">
            <label htmlFor="localizacao">Localização:</label>
            <input
              type="text"
              id="localizacao"
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
            />
          </div>
          <div className="postagem-input">
            <h3>Informações de Contato</h3>
            <input
              type="text"
              id="nome"
              placeholder="Nome"
              value={contato.nome}
              onChange={(e) => setContato({ ...contato, nome: e.target.value })}
            />
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              value={contato.email}
              onChange={(e) => setContato({ ...contato, email: e.target.value })}
            />
            <input
              type="tel"
              id="telefone"
              placeholder="Telefone"
              value={contato.telefone}
              onChange={(e) => setContato({ ...contato, telefone: e.target.value })}
            />
          </div>
          <button onClick={handlePostagem} className="postagem-button">
            Publicar Campanha
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostagemCampanha;
