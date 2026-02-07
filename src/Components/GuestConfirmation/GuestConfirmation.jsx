import "./GuestConfirmation.css";
import { useState } from "react";
import { supabase } from "../../supabaseClient";


export default function GuestConfirmation() {
  const [code, setCode] = useState("");
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

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

    if (data.confirmado) {
      setGuest(data);
      setConfirmed(true);
      return;
    }

    setGuest(data);
  };

  const confirmAttendance = async () => {
    setLoading(true);

    const { error } = await supabase
      .from("invitados")
      .update({
        confirmado: true,
        confirmados: guest.pases,
        fecha_confirmacion: new Date(),
      })
      .eq("id", guest.id);

    setLoading(false);

    if (!error) {
      setConfirmed(true);
    }
  };

  return (
    <section className="confirm">
      <div className="confirm__content">
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

        {guest && !confirmed && (
          <>
            <h2>¡Hola {guest.nombre}!</h2>
            <p>
              Tienes <strong>{guest.pases}</strong> pases reservados.
              <br />
              ¿Confirmas tu asistencia?
            </p>

            <button
              className="confirm__button"
              onClick={confirmAttendance}
              disabled={loading}
            >
              {loading ? "Confirmando..." : "Confirmar asistencia"}
            </button>
          </>
        )}

        {confirmed && (
          <>
            <h2>¡Gracias! 💖</h2>
            <p>
              Tu asistencia ha sido confirmada.
              <br />
              ¡Nos vemos muy pronto!
            </p>
          </>
        )}
      </div>
    </section>
  );
}
