<h1 align="center">Welcome to game-list 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-(1.0.0)-blue.svg?cacheSeconds=2592000" />
  <a href="Os efeitos colaterais (side effects) dessa página são tratados pelos hooks useEffect. O primeiro useEffect é utilizado para chamar a função fetchData assim que o componente é montado. O segundo useEffect é responsável por limitar a lista de jogos exibidos inicialmente, de acordo com o estado visibleGames. Esse efeito é disparado sempre que os estados games ou visibleGames são alterados." target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: joao mendes" src="https://img.shields.io/badge/License-joao mendes-yellow.svg" />
  </a>
</p>    

### 🏠  <p> Nesse projeto, eu desenvolvi um site chamado &#34;Game List&#34; utilizando a biblioteca React. O objetivo desse site é exibir uma lista de jogos, permitindo aos usuários filtrar os jogos por gênero e realizar buscas por título.</p> <p>  Defini algumas constantes e estados usando o hook useState do React. A constante API_BASE_URL armazena a URL base da API que será utilizada para obter os dados dos jogos.  A constante headers contém um objeto com o cabeçalho da requisição HTTP, contendo meu e-mail de desenvolvedor.</p> <p>Além disso, a página possui três funções principais: handleGenreSelect, handleSearch e handleLoadMore. A função handleGenreSelect é chamada quando um gênero é selecionado no componente GenreFilter e filtra os jogos de acordo com o gênero selecionado, atualizando o estado filteredGames.</p> <p> A função handleSearch é chamada quando um texto é digitado no componente SearchInput e filtra os jogos de acordo com o texto digitado, atualizando o estado filteredGames. A função handleLoadMore é chamada quando o botão &#34;Carregar mais&#34; é clicado e incrementa o valor de visibleGames, fazendo com que mais jogos sejam exibidos. A renderização do conteúdo da página é condicional, dependendo dos estados de loading e errorMessage.</p> <p> Se o estado loading for verdadeiro, exibo o componente Loader para indicar que os dados estão sendo carregados. Se o estado errorMessage tiver uma mensagem de erro, essa mensagem é exibida usando o componente ErrorMessage, caso contrário, exibo a lista de jogos no componente GameList.</p>








* Github: [@]https://github.com/joaosmendess 
* LinkedIn: [@joaosmendess](https://linkedin.com/in/joaosmendess)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://game-list-tau.vercel.app/). 

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/João Mendes">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

