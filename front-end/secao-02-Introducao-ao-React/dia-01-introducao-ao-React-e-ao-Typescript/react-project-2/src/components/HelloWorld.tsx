import Title from './Title';
import ModuleDetails from './ModuleDetails';
import { calculateAge } from '../utils/age';

export default function HelloWorld() {
  const name = 'Gabriel Melo';
  const birth = '12/01/2005';
  const age = calculateAge(birth);

  return (
    <div>
      <h1 style={{ color: 'green', textAlign: 'center' }}>{name}</h1>
      <p>{`${age} anos`}</p>
      <Title />
      <ModuleDetails />
    </div>
  );
}
