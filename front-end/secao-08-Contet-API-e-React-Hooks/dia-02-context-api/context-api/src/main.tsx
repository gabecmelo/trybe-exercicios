import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './context/Theme/ThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>  

)
