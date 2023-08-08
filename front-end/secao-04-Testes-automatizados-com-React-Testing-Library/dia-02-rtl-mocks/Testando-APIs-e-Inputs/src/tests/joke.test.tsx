import { render, screen } from '@testing-library/react';
import {vi} from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando fetch', () => {
  afterEach(() => vi.clearAllMocks());

  it('fetch a joke', async () => {    
    const MOCK_JOKE = {
      id: '7h3oGtrOfxc',
      joke: 'Thanks for explaining the word "many" to me. It means a lot.'
    }
    const MOCK_RESPONSE = {
      json: async () => MOCK_JOKE,
    } as Response;

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    render(<App />)
    const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
    expect(renderedJoke).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
  })

  it('re-fetch a joke', async() => {
    const NEW_MOCK_JOKE = {
      id:'4zwo3wqz6vxa',
      joke: 'Which side of the chicken has more feathers? The outside',
    }

    const NEW_MOCK_RESPONSE = {
      json: async() => NEW_MOCK_JOKE,
    } as Response;

    const newMockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(NEW_MOCK_RESPONSE);

    render(<App />)
    const newJokeButton = screen.getByRole('button', {name: 'New Joke'})
    await userEvent.click(newJokeButton)

    const reRenderedJoke = await screen.findByText('Which side of the chicken has more feathers? The outside');

    expect(reRenderedJoke).toBeInTheDocument()
    expect(newMockFetch).toHaveBeenCalledTimes(2)
    expect(newMockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });    

  })
})
