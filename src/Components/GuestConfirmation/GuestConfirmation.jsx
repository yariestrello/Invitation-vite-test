import "./GuestConfirmation.css";
import { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function GuestConfirmation() {
  const [code, setCode] = useState("");
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [selectedAttendees, setSelectedAttendees] = useState(0);

  // Validar código de invitación
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      alert("Por favor ingresa tu código de invitación");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("invitados")
      .select("*")
      .eq("codigo", code.trim().toUpperCase())
      .single();

    setLoading(false);

    if (error || !data) {
      alert("Código no válido");
      return;
    }

    // Si ya confirmaron antes, siempre mostrar confirmación (aunque la fecha ya haya pasado)
    if (data.confirmado) {
      setGuest(data);
      setSelectedAttendees(data.confirmados || 0);
      setConfirmed(true);
      return;
    }

    setGuest(data);
  };

  // Confirmar asistencia
  const confirmAttendance = async () => {
    if (selectedAttendees === 0) return;

    // Protección extra por si alguien intenta confirmar fuera de fecha
    if (isClosed) {
      alert("La fecha de confirmación ya ha concluido.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("invitados")
      .update({
        confirmado: true,
        confirmados: selectedAttendees,
        fecha_confirmacion: new Date(),
      })
      .eq("id", guest.id);

    setLoading(false);

    if (!error) {
      setConfirmed(true);
    }
  };

  // 🔥 Validación correcta de fecha (CIERRA AL FINAL DEL DÍA)
  const isClosed = (() => {
    if (!guest || guest.confirmado) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0); // quitar hora actual

    const closingDate = new Date(guest.Fecha_Cierre);
    closingDate.setHours(23, 59, 59, 999); // permitir TODO el día de cierre

    return today > closingDate;
  })();

  return (
    <section className="confirm">
      <div className="confirm__content">
        {/* Pantalla inicial: ingresar código */}
        {!guest && (
          <>
            <h2>Confirmación de Asistencia</h2>
            <p>
              Para nosotros es muy importante saber si podrás acompañarnos en este día tan especial.
              Por favor ingresa el código que se te envió con tu invitación.
            </p>

            <form onSubmit={handleSubmit} className="confirm__form">
              <input
                type="text"
                placeholder="Código de invitación"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="confirm__input"
              />
              <button type="submit" className="confirm__button">
                {loading ? "Validando..." : "Confirmar asistencia"}
              </button>
            </form>
          </>
        )}

        {/* Fecha de cierre pasada */}
        {isClosed && (
          <>
            <h2>¡Gracias! 💖</h2>
            <p>
              Hemos cerrado la fecha de confirmación de registros.  
              Como no recibimos respuesta, asumimos que no podrás acompañarnos.  
              <br />
              ¡Gracias por tu comprensión!  
              <br />
              <strong>Con cariño, Yaritza & Gael</strong>
            </p>
          </>
        )}

        {/* Selección de asistentes */}
        {guest && !confirmed && !isClosed && (
          <>
            <h2>¡Hola {guest.nombre}!</h2>
            <p>
              Hemos reservado <strong>{guest.pases}</strong> lugares para ustedes con todo nuestro cariño.
              <br />
              ¿Nos podrían indicar cuántos asistirán para celebrar este día tan especial?
            </p>

            <div className="confirm__selector-container">
              <select
                value={selectedAttendees}
                onChange={(e) => setSelectedAttendees(Number(e.target.value))}
                className="confirm__select"
              >
                <option value={0}>Selecciona la cantidad</option>
                {Array.from({ length: guest.pases }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>

              <button
                className="confirm__button"
                onClick={confirmAttendance}
                disabled={loading || selectedAttendees === 0}
              >
                {loading ? "Confirmando..." : "Confirmar asistencia"}
              </button>
            </div>
          </>
        )}

        {/* Confirmación final (persistente aunque recarguen) */}
        {(confirmed || guest?.confirmado) && (
          <>
            <h2>¡Gracias! 💖</h2>
            <p>
              El día de nuestra boda será una noche mágica y especial, y que nos acompañes
              {selectedAttendees === 1 ? "" : " junto a tu familia"} la hace aún más especial.  
              Hemos reservado un lugar para <strong>{selectedAttendees}</strong>{" "}
              {selectedAttendees === 1 ? "persona" : "personas"}.
              <br />
              <strong>El tiempo de registro de asistencia ha concluido.</strong>
              <br />
              ¡Los esperamos con mucha ilusión!
            </p>
          </>
        )}
      </div>
    </section>
  );
}
