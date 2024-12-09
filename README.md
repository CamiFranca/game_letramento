# game_letramento

# Área de Jogo - Organizador de Ícones 🕹️

Um jogo interativo onde o objetivo é organizar ícones de arquivos, pastas e programas em cestas correspondentes dentro de um tempo limite. Desenvolvido com React.

## 🎮 Funcionalidades

- **Organize ícones:** Arraste e solte os ícones na cesta correta.
- **Controle de tempo:** Inicie o jogo apenas quando estiver pronto.
- **Verificação de resultados:** Descubra se os ícones estão organizados corretamente.
- **Interface Responsiva:** Suporte para telas grandes e pequenas (incluindo smartphones).
- **Modal de feedback:** Receba uma mensagem com o resultado do jogo.


## 🚀 Tecnologias Utilizadas

- **React:** Biblioteca principal para construção da interface.
- **HTML/CSS:** Para estruturação e estilização da página.
- **JavaScript (ES6):** Lógica e manipulação de eventos.
- **CSS Responsivo:** Suporte a múltiplos dispositivos.


## 📁 Estrutura do Projeto

├── public/ ├── src/ │ ├── assets/ # Imagens e ícones usados no projeto │ ├── common/ # Recursos compartilhados (ex.: EnumType) │ ├── components/ │ │ ├── AreaGame/ # Lógica principal do jogo │ │ ├── Modal/ # Componente Modal para exibir feedback │ ├── App.js # Componente raiz │ ├── index.js # Ponto de entrada do React ├── README.md ├── package.json └── .gitignore


## 🎯 Como Jogar?

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/area-game.git

2. instale as dependências:
    ```npm install

3. Inicie o servidor de desenvolvimento:    
    ```npm run dev

4. Acesse o jogo do navegador:
    ```http://localhost:5173/

5. Pressione Iniciar para começar e organize os ícones nas cestas correspondentes.

📱 **Responsividade**
Este projeto foi projetado para funcionar bem em diversos dispositivos, incluindo:

**Desktop:** Layout horizontal com elementos bem distribuídos.
**Smartphones:** Layout vertical com elementos organizados para facilitar a interação.

🛠️ **Melhorias Implementadas**
**Semântica HTML:** Uso correto de tags como <button> e <div> para melhor acessibilidade.
**Organização do CSS:** Estilo modularizado com boas práticas para responsividade.
**Lógica Ajustada:**
O tempo só começa quando o jogador clica no botão "Iniciar".
Resultado lógico ao verificar as cestas vazias.
Performance: Timer pausado ao carregar a página e otimização na manipulação de estados.

🌟 **Contribuições**
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

📄 **Licença**
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

📧 **Contato**
Para dúvidas ou sugestões, entre em contato:

- **Email**: camillaartc@gmail.com
- **GitHub**: CamiFranca


Divirta-se jogando! 🚀