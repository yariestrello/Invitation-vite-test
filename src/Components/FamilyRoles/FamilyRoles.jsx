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
          <p>Petra Estrello</p>
        </div>

        <div className="family__group">
          <p className="role">De él</p>
          <p>Ramón García</p>
          <p>Rebeca Bernal</p>
        </div>
      </div>

      {/* Padrinos */}
      <div className="family__block">
        <h3>Nuestros Padrinos</h3>

        <div className="family__pair">
          <span>Lazo</span>
          <p>Jose Manuel Silva & Rebeca Garcia</p>
        </div>

        <div className="family__pair">
          <span>Anillos</span>
          <p>Jorge Garcia & Silvia Lopez</p>
        </div>

        <div className="family__pair">
          <span>Arras</span>
          <p>Maria Fernanda Garcia & William Covarrubias</p>
        </div>

        <div className="family__pair">
          <span>Velación</span>
          <p>Ramón García & Rebeca Bernal</p>
        </div>

        <div className="family__pair">
          <span>Biblia & Rosario</span>
          <p>Dulce Maria Estrello & Usiel Sanchez</p>
        </div>
      </div>

      {/* Testigos */}
      <div className="family__block">
        <h3>Nuestros Testigos</h3>

        <div className="family__group">
          <p className="role">De ella</p>
          <p>Diego Guerrero</p>
          <p>Karla Garcia</p>
        </div>

        <div className="family__group">
          <p className="role">De él</p>
          <p>Juan Manuel Garcia</p>
          <p>Cynthia Constancio</p>
        </div>
      </div>
    </section>
  );
}