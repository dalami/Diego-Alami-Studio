import Link from "next/link";
import { juegos } from "../data/games";

const ANCHOS_TORRE = [70, 84, 62, 92, 74, 100];

function estadoTexto(estado: string) {
  if (estado === "disponible") return "Disponible";
  if (estado === "en_desarrollo") return "En desarrollo";
  return "Próximamente";
}

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="site-header__brand">
          <span className="site-header__mark" />
          Diego Alami Studio
        </div>
      </header>

      <section className="hero">
        <div>
          <h1 className="hero__headline">
            Construimos <em>un juego a la vez.</em>
          </h1>
          <p className="hero__sub">
            Cada título nuevo es un bloque más en la torre. Acá abajo está el
            catálogo tal como va quedando armado — algunos bloques ya tienen
            nombre, otros todavía son un hueco por llenar.
          </p>
        </div>
        <div className="stack" aria-hidden="true">
          {ANCHOS_TORRE.map((ancho, i) => (
            <div
              key={i}
              className={`stack__block ${
                i === 0 ? "stack__block--filled" : ""
              }`}
              style={{ width: `${ancho}%` }}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <p className="section__eyebrow">El catálogo</p>
        <h2 className="section__title">Lo que se está apilando</h2>

        <div className="catalog">
          {juegos.map((juego, i) => {
            const esFantasma = juego.estado === "proximamente";
            return (
              <div
                key={i}
                className={`game-card ${
                  esFantasma ? "game-card--ghost" : ""
                }`}
              >
                <div>
                  <p className="game-card__name">
                    {esFantasma ? "Próximo bloque" : juego.nombre}
                  </p>
                  <p className="game-card__tagline">
                    {esFantasma
                      ? "Todavía no tiene nombre."
                      : juego.tagline}
                  </p>
                </div>
                <span className="game-card__status">
                  {estadoTexto(juego.estado)}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Diego Alami Studio</span>
        <div className="site-footer__links">
          <Link href="/privacidad">Política de Privacidad</Link>
          <a href="mailto:diegoalami@gmail.com">Contacto</a>
        </div>
      </footer>
    </div>
  );
}
