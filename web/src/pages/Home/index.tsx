import { useState } from "react";
import { UsersThree, UserCirclePlus } from "phosphor-react";

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
        <UsersThree size={42} />
        <h1>Usuários cadastrados</h1>
        
        <div className="userAdd">
          <button>
            <UserCirclePlus size={32} />
            Adicionar usuário
          </button>
        </div>

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
