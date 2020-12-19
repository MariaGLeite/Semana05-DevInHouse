# Amorinha-APP

O Amorinha-APP é uma aplicação desenvolvida em **REACT**, que busca facilitar no gerenciamento e controle de cadastros dos alunos da escola Amorinha, especificamente da sessão de Educação Infantil.

## Instalação

> ATENÇÃO: A aplicação foi **inteiramente** desenvolvida utilizando o gerenciador de dependências **YARN v1.22.5** e **Node v12.17.0**. O uso de outro gerenciador de dependências, tal como a utilização de uma versão inferior das especificadas, podem acarretar em problemas de instalação.

Em uma pasta da sua escolha, clone este repositório e digite `yarn install` para iniciar a instalação das dependências.

Uma vez que as dependências forem instaladas, inicie aplicação com o comando `yarn start`.

## Contexto

Esta aplicação se trata do projeto proposto da quinta semana do curso **DevInHouse**, ministrado pelo [Senai](http://sc.senai.br/), em parceria com [Softplan](https://www.softplan.com.br/).

### Requisitos

Esta aplicação deve, imprescindivelmente, atender a todos os requisitos especificados.

#### Conteúdo da Aplicação

* Deve conter um formulário para o cadastro dos Alunos contendo os seguintes campos:
  * Nome;
  * Data de Nascimento;
  * Nome do Responsável pela criança;
  * Telefone de Contato do Responsável pela criança;
  * Em caso de emergência avisar: (Pais, Tios, Avós, Padrinhos);
  * Telefone para Emergências;
  * Possui Restrição Alimentar;
  * Descrição das Restrições Alimentares;
  * Autorização de fotos e vídeos da criança para uso escolar;
  * Lista de autorizados a buscar a criança. Ex. Pedro – Padrinho, Maria – Tia;
  * Turma;
  * Observações adicionais.

* Deve existir uma listagem de Alunos que permita editar e excluir alunos e apresente para o usuário os principais campos:
  * Nome
  * Data de Nascimento
  * Turma
  * Telefone para Emergências
  * Em caso de emergência avisar

* Na mesma página da listagem, deve haver um campo de texto acima da listagem que será utilizado para filtrar os alunos pelo nome.

#### Regras funcionais

* Na tela de cadastro o campo “*Descrição das Restrições Alimentares*”  somente ficará visível caso a criança possua restrições alimentares;
* No campo Turma será apresentado para escolha uma lista de turmas disponíveis, você não precisa criar uma tela de cadastro para elas, somente uma consulta das mesmas.
* Os campos “Possui Restrição Alimentar” e Autorização para uso de fotos e vídeos da criança para uso escolar” serão do tipo Checkbox
* A função editar colocará os dados do aluno no formulário de cadastro