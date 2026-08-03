export type GameStatus = "en_desarrollo" | "disponible" | "proximamente";

export interface Game {
  nombre: string;
  tagline: string;
  estado: GameStatus;
  url?: string;
}

// Para agregar un juego nuevo, sumá un objeto acá.
// estado "disponible" -> necesita "url" con el link a la tienda.
// estado "en_desarrollo" -> se muestra con tagline real; el link es opcional
//   (si ya hay prueba cerrada o beta pública, poné la url y aparece el botón).
// estado "proximamente" -> bloque fantasma, sin nombre visible.
export const juegos: Game[] = [
  {
    nombre: "Stack Tower",
    tagline: "Apilá bloques, esquivá pájaros, no dejes que el viento tire la torre.",
    estado: "en_desarrollo",
    // url: "https://play.google.com/store/apps/details?id=ar.com.stacktower",
  },
  {
    nombre: "Elite Shooter",
    tagline: "Tensá el arco, leé el viento, clavá el centro de la diana.",
    estado: "en_desarrollo",
    // url: "https://play.google.com/store/apps/details?id=ar.com.eliteshooter",
  },
  { nombre: "", tagline: "", estado: "proximamente" },
  { nombre: "", tagline: "", estado: "proximamente" },
];