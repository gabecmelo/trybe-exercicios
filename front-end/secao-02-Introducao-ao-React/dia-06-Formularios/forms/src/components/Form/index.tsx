import './Form.css'
import Swal from 'sweetalert2';
import { formValuesTypes } from '../../App';
import { useState } from 'react';
import { initialFormValues } from '../../App';

type FormProps = {
  formValues: formValuesTypes,
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
  setFormValues: (value: React.SetStateAction<formValuesTypes>) => void
}

export default function Form(props: FormProps) {

  const { formValues, handleChange, setFormValues } = props
  const { name, email, schooling, resume, acceptedTerms } = formValues;
  const [showCampsMessage, setShowCampsMessage] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name === '' || schooling === '' || resume === '') {
      setShowCampsMessage(true)
    } else if (acceptedTerms === false) {
      Swal.fire(
        'Oops!',
        'Você deve aceitar os termos de condições',
        'error'
      )
      .catch 
      setShowCampsMessage(false)
    } else {
      Swal.fire(
        'Tudo Pronto!',
        `Nome: ${name} <br> Email: ${email} <br> Escolaridade: ${schooling} <br> Experiências: ${resume}`,
        'success'
      )
      setShowCampsMessage(false)
      setFormValues(initialFormValues)
    }
  }

  return (
    <form
      className='form-container'
      onSubmit={(event) => handleSubmit(event)}
    >
      <label>
        Nome:
        <input
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        E-mail:
        <input
          name='email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Escolaridade:
        <select
          name='schooling'
          value={schooling}
          onChange={handleChange}
        >
          <option value="Médio">Médio</option>
          <option value="Superior">Superior</option>
          <option value="Pós-graduação">Pós-graduação</option>
        </select>
      </label>
      <label className='experiences'>
        Resumo das experiências:
        <textarea
          name='resume'
          value={resume}
          onChange={handleChange}
        />
      </label>
      {
        showCampsMessage &&
        <div
          className='camps-message'>
          Todos os campos devem ser obrigatórios. *
        </div>
      }
      <label htmlFor="termo" className='label-termo'>

        <input
          name='acceptedTerms'
          checked={acceptedTerms}
          type="checkbox" id="termo"
          onChange={handleChange}
        />
        Aceito os termos e condições
      </label>

      <button>Enviar</button>
    </form>
  )
}