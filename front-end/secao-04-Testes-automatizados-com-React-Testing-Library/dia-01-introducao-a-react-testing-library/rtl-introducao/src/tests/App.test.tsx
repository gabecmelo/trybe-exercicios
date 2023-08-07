import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const EMAIL_USER = 'teste@email.com';

it('Verifica se existe o campo email', () => {
  render(<App />);

  const inputEmail = screen.getByLabelText('Email:')

  expect(inputEmail).toBeInTheDocument();
});

it('Verifica se existe os campos de botões', () => {
  render(<App />);

  const buttons = screen.getAllByRole('button');
  const inputSend = screen.getByTestId('id-send');
  const inputGoBack = screen.getByRole('button', {name: 'Voltar'});

  expect(buttons).toHaveLength(2);
  expect(inputSend).toBeInTheDocument();
  expect(inputGoBack).toBeInTheDocument();

});

it('Verifica se o botão "Voltar" funciona corretamente', async () => {
  render(<App />)

  const inputGoBack = screen.getByRole('button', {name: 'Voltar'});
  const inputEmail = screen.getByPlaceholderText('email@example.com');
  const title = screen.getByRole('heading', {name: 'Valor:'})

  await userEvent.type(inputEmail, EMAIL_USER);
  await userEvent.click(inputGoBack)

  expect(inputEmail).toHaveTextContent('');
  expect(title).toHaveTextContent('Valor:');
});
