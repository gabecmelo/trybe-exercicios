import { screen } from "@testing-library/react";
import { renderWithRouter } from "../utils/renderWithRouter";

import App from "../App";

it('Verifica o texto da página inicial', async() => {
  renderWithRouter(<App />)
  const textoInicial = screen.getByText('Você está na página Início');

  expect(textoInicial).toBeInTheDocument();

});

it('Verifica as navegações entre as páginas Sobre e Início', async () => {
  const {user} = renderWithRouter(<App />)
  const aboutLink = screen.getByRole('link', {name: 'Sobre'})
  const homeLink = screen.getByRole('link', {name: 'Início'})
  
  expect(aboutLink).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();

  await user.click(aboutLink);

  const textoSobre = screen.getByText('Você está na página Sobre');
  expect(textoSobre).toBeInTheDocument();

  await user.click(homeLink);
  const textoInicial = screen.getByText('Você está na página Início');
  expect(textoInicial).toBeInTheDocument();

})

it('Navegando do componente Sobre para o componente Início', async() => {
  const { user } = renderWithRouter(<App />, { route: '/about' })
  const homeLink = screen.getByRole('link', {name: 'Início'})

  expect(homeLink).toBeInTheDocument();
  await user.click(homeLink);

  const textoInicial = screen.getByText('Você está na página Início');

  expect(textoInicial).toBeInTheDocument();
})

it('Testando a página NotFound', () => {
  renderWithRouter(<App/>, {route: 'batata'});
  const notFoundWarning = screen.getByText('Página não encontrada');

  expect(notFoundWarning).toBeInTheDocument();
})
