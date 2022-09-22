import { useState } from "react";

import { Container, Content } from "./styles";

interface UserProps {
  id: string;
  nome: string;
  CPF: string;
  RG: string;
  data_de_nascimento: Date;
  nome_da_mãe: string;
  data_de_cadastro: Date;
}

export function Home() {
  const [userList, setUserList] = useState<UserProps[]>([]);

  return (
    <Container>
      <Content>
        <h1>Usuários cadastrados</h1>
        
        <button>+ Adicionar usuário</button>

        <div className="userInfo">
          <p>Ednardo Gomes</p>
          <button>+ Detalhes</button>
        </div>
        
        <div className="userInfo">
          <p>Ednardo Gomes</p>
          <button>+ Detalhes</button>
        </div>
      </Content>
    </Container>
  );
}
