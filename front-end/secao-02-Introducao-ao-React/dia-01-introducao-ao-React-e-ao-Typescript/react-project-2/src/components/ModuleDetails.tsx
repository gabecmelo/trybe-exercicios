let Modules: string[] = ['Fundamentos', 'Front-end', 'Back-end', 'Ciência da Computação'];

export default function ModuleDetails() {
  return (
    <ul>
      {
        Modules.map((module) => (
          module === 'Fundamentos' ? <li>Módulo {module} ✅</li>
            : <li>Módulo {module} ⌛</li>
        ))
      }
    </ul>
  );
}
