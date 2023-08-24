import styled from 'styled-components';

export const Button = styled.button<{ $primary?: boolean }>`
    border-radius: 6px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    cursor: pointer;
    transition: border-color 0.25s;
    background-color: ${props => (props.$primary ? 'rgb(245, 230, 50)' : 'rgb(255, 255, 255)')};
    color: ${props => (props.$primary ? 'rgb(255, 30, 90)' : 'rgb(0, 0, 0)')}; 

    &:hover {
      background-color: ${props => (props.$primary ? 'rgba(245, 230, 50, 0.8)' : 'rgba(255, 255, 255, 0.8)')};
      color: ${props => (props.$primary ? 'rgb(255, 30, 90)' : 'rgba(0, 0, 0, 0.8)')};
    }
  `;

export const ButtonChange = styled.button`
    border-radius: 6px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    cursor: pointer;
    transition: border-color 0.25s;
    background-color: rgb(66, 80, 255);

    &:hover {
      background-color: rgba(50, 80, 255, 0.8);
      color: rgb(205, 205, 205);
    }
  `;

export const Article = styled.article`
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `;
