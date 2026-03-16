// src/Components/FamilyRoles/FamilyRoles.jsx
import "./FamilyRoles.css";

export default function FamilyRoles() {
  return (
    <section className="family">
      <h2 className="family__title">Nuestros Padres</h2>

      {/* Padres */}
      <div className="family__block">
        

        <div className="family__group">
          <p className="role">De ella</p>
          <p>Petra Estrello González</p>
        </div>

        <div className="family__group">
          <p className="role">De él</p>
          <p>Ramón García Mireles</p>
          <p>Rebeca Bernal Flores</p>
        </div>
      </div>

      {/* Padrinos */}
      <div className="family__block">
        <h3>Nuestros Padrinos</h3>

        <div className="family__pair">
          <span>Lazo</span>
          <p>José Manuel Silva & Rebeca García</p>
        </div>

        <div className="family__pair">
          <span>Anillos</span>
          <p>Jorge García & Silvia López</p>
        </div>

        <div className="family__pair">
          <span>Arras</span>
          <p>Maria Fernanda García & William Covarrubias</p>
        </div>

        <div className="family__pair">
          <span>Velación</span>
          <p>Ramón García Mireles & Rebeca Bernal Flores</p>
        </div>

        <div className="family__pair">
          <span>Biblia & Rosario</span>
          <p>Dulce Maria Estrello & Usiel Sánchez</p>
        </div>
      </div>

      {/* Testigos */}
      <div className="family__block">
        <h3>Nuestros Testigos</h3>

        <div className="family__group">
          
          <p>Diego Guerrero</p>
          <p>Karla García</p>
          <p>Juan Manuel García</p>
          <p>Cynthia Constancio</p>
        </div>

    
      </div>
    </section>
  );
}