import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad — Diego Alami Studio",
};

export default function PrivacidadPage() {
  return (
    <div className="page-shell">
      <div className="legal">
        <Link href="/" className="legal__back">
          ← Volver
        </Link>
        <h1>Política de Privacidad</h1>
        <p className="legal__updated">
          Última actualización: {new Date().toLocaleDateString("es-AR")}
        </p>

        <p>
          Esta política de privacidad aplica a todas las apps y juegos
          publicados por Diego Alami Studio en Google Play y otras tiendas de
          aplicaciones. Si tenés dudas sobre una app en particular, escribinos
          a{" "}
          <a href="mailto:diegoalami@gmail.com">diegoalami@gmail.com</a>.
        </p>

        <h2>Qué datos recopilamos</h2>
        <p>
          La mayoría de nuestras apps no requieren crear una cuenta ni piden
          datos personales para jugar. Cuando una app sí incluye inicio de
          sesión (por ejemplo, para guardar tu progreso en la nube), esa app
          específica lo indica en su propia ficha de Google Play, en la
          sección de Seguridad de los Datos.
        </p>

        <h2>Anuncios</h2>
        <p>
          Algunas de nuestras apps muestran anuncios a través de Google AdMob.
          Para esto, AdMob y sus socios de mediación pueden acceder al
          identificador de publicidad de tu dispositivo con el fin de mostrar
          anuncios relevantes y medir su rendimiento. No vinculamos esta
          información con tu identidad personal.
        </p>
        <p>
          Podés conocer más sobre cómo Google maneja estos datos en la{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidad de Google
          </a>
          , y ajustar tus preferencias de anuncios personalizados desde la
          configuración de tu dispositivo Android.
        </p>

        <h2>Apps dirigidas a un público infantil</h2>
        <p>
          Algunas apps de este estudio están pensadas para niños y niñas. En
          esos casos, configuramos los anuncios en modo apto para familias y
          no solicitamos datos personales a menores de edad. Si sos madre,
          padre o tutor y creés que se recopiló información de un menor de
          forma indebida, contactanos y la eliminaremos.
        </p>

        <h2>Tus opciones</h2>
        <ul>
          <li>
            Podés desinstalar la app en cualquier momento para dejar de
            compartir cualquier dato asociado a su uso.
          </li>
          <li>
            Podés restablecer o limitar tu identificador de publicidad desde
            los ajustes de privacidad de tu dispositivo.
          </li>
        </ul>

        <h2>Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política ocasionalmente para reflejar
          cambios en nuestras apps o en la normativa aplicable. La fecha de la
          última actualización figura arriba.
        </p>

        <h2>Contacto</h2>
        <p>
          Ante cualquier consulta sobre privacidad, escribinos a{" "}
          <a href="mailto:diegoalami@gmail.com">diegoalami@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
