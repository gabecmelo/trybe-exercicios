import './App.css';
import { useState } from 'react';
import Form from './components/Form';

export type formValuesTypes = {
  name: string,
  email: string,
  schooling: string,
  resume: string,
  acceptedTerms: boolean
}

export const initialFormValues = {
  name: '',
  email: '',
  schooling: 'Médio',
  resume: '',
  acceptedTerms: false
}

function App() {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, type } = event.target
    const value = type === 'checkbox' ? (event.target as HTMLInputElement).checked : event.target.value;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  const [formValues, setFormValues] = useState<formValuesTypes>(initialFormValues);

  return (
    <>
      <Form setFormValues={setFormValues} formValues={formValues} handleChange={handleChange}  />
    </>
  );
}

export default App;
