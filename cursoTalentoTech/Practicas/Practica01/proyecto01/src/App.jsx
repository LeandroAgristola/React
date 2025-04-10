import React from 'react';
import EquipoTalentoLab from './components/EquipoTalentoLab';
import TarjetaProyecto from './components/TarjetaProyecto';
import GaleriaIntereses from './components/GaleriaIntereses';
import './App.css'; // Importamos el archivo de estilos general de la aplicación

function App() {
  // Datos del equipo (array de objetos)
  const equipoTalento = [
    {
      nombre: 'Ana Pérez',
      rol: 'Líder de Proyecto',
      imagen: '/assets/perfil04.png', // Reemplaza con la URL real de la imagen
    },
    {
      nombre: 'Carlos López',
      rol: 'Desarrollador Front-end',
      imagen: '/assets/perfil02.png', // Reemplaza con la URL real de la imagen
    },
    {
      nombre: 'Sofía Gómez',
      rol: 'Diseñadora UX/UI',
      imagen: '/assets/perfil03.png', // Reemplaza con la URL real de la imagen
    },
    {
      nombre: 'Javier Vargas',
      rol: 'Desarrollador Back-end',
      imagen: '/assets/perfil01.png', // Reemplaza con la URL real de la imagen
    },
  ];

  // Datos de los proyectos (array de objetos, aunque aquí solo usaremos algunos)
  const proyectosDestacados = [
    {
      titulo: 'Plataforma de Aprendizaje Innovadora',
      descripcion: 'Una plataforma online diseñada para facilitar el aprendizaje interactivo y colaborativo.',
      botonTexto: 'Ver más',
    },
    {
      titulo: 'Herramienta de Gestión de Talento',
      descripcion: 'Software para optimizar los procesos de reclutamiento, evaluación y desarrollo del talento humano.',
      botonTexto: 'Descubrir',
    },
  ];

  // Datos de los intereses (array de strings)
  const intereses = ['Tecnología', 'Innovación', 'Desarrollo Profesional', 'Aprendizaje Continuo', 'Colaboración'];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>TalentoLab</h1>
        <p>Impulsando el talento y la innovación.</p>
      </header>

      <section className="equipo-seccion">
        <EquipoTalentoLab equipo={equipoTalento} />
      </section>

      <section className="proyectos-seccion">
        <h2>Proyectos Destacados</h2>
        {proyectosDestacados.map((proyecto, index) => (
          <TarjetaProyecto
            key={index}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            botonTexto={proyecto.botonTexto}
          />
        ))}
      </section>

      <section className="intereses-seccion">
        <GaleriaIntereses temas={intereses} />
      </section>

      <footer className="app-footer">
        <p>&copy; 2023 TalentoLab. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;