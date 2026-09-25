import {
  Backpack,
  BatteryLow,
  Bike,
  Calendar,
  CheckSquare,
  ClipboardList,
  Dumbbell,
  Flame,
  Laptop,
  Leaf,
  ListChecks,
  Package,
  Sprout,
  Timer,
  UtensilsCrossed,
  Wheat,
  Zap,
} from "lucide-react";

/**
 * Navegación principal de la web informacional. Todas las rutas son anclas
 * dentro de la página de inicio; el CTA de captación vive aparte (ver
 * NAV_CTA) y apunta a la landing de leads /guia.
 */
export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Conoce Cransh", href: "#historia" },
  { label: "Ingredientes", href: "#ingredientes" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Momentos", href: "#momentos" },
  { label: "Recursos", href: "#recursos" },
];

/** CTA destacado del header y del menú móvil — dirige a la landing de captación. */
export const NAV_CTA = { label: "QUIERO LA GUÍA", href: "/guia" };

/**
 * Mensajes que aparecen secuencialmente durante el scroll pinned del Hero,
 * después del headline inicial. Ligados al timeline de ScrollTrigger en
 * HeroSection — no reemplazan "TU DÍA / EXIGE MÁS.", se muestran después.
 */
export const HERO_SCROLL_MESSAGE = "ENERGÍA QUE TE MUEVE.";
export const HERO_SCROLL_TAGS = ["ESTUDIA.", "TRABAJA.", "ENTRENA.", "MUÉVETE."];

/** Ingredientes reales del producto, con su rol — usados en la sección "Ingredientes". */
export const INGREDIENTS = [
  {
    name: "CACAO",
    icon: Flame,
    image: "Ingredients/cacao.png",
    desc: "Fuente natural de antioxidantes y energía.",
  },
  {
    name: "MIEL DE ABEJA",
    icon: Sprout,
    image: "Ingredients/miel-de-abeja.png",
    desc: "Energía natural de liberación progresiva.",
  },
  {
    name: "QUINUA",
    icon: Wheat,
    image: "Ingredients/quinua.png",
    desc: "Aporta proteínas, fibra y nutrientes esenciales.",
  },
  {
    name: "EXTRACTOS DE PLANTAS",
    icon: Leaf,
    image: "Ingredients/extractos-de-plantas.png",
    desc: "Contribuyen al enfoque y bienestar.",
  },
];

/** Atributos del producto mostrados como sellos (sección "Ingredientes"). */
export const PRODUCT_BADGES = [
  "Sin conservantes",
  "Sin colorantes artificiales",
  "Fuente de energía natural",
  "Snack saludable",
];

export type FlavorId = "chocolate" | "vainilla" | "fresa";

export const FLAVORS: {
  id: FlavorId;
  name: string;
  tag: string;
  desc: string;
  accent: string;
  accentSoft: string;
  image: string;
}[] = [
  {
    id: "chocolate",
    name: "CHOCOLATE",
    tag: "Intenso, energizante, clásico",
    desc: "Intenso, energético y delicioso.",
    accent: "#a8ff00",
    accentSoft: "rgba(168,255,0,0.18)",
    image: "images/sabores/cransh-chocolate.png",
  },
  {
    id: "vainilla",
    name: "VAINILLA",
    tag: "Suave, natural, delicioso",
    desc: "Suave, equilibrado y fácil de disfrutar.",
    accent: "#ffe600",
    accentSoft: "rgba(255,230,0,0.18)",
    image: "images/sabores/cransh-vainilla.png",
  },
  {
    id: "fresa",
    name: "FRESA",
    tag: "Fresco, diferente, revitalizante",
    desc: "Fresco, dulce y diferente.",
    accent: "#8b3dff",
    accentSoft: "rgba(139,61,255,0.18)",
    image: "images/sabores/cransh-fresa.png",
  },
];

export const BENEFITS = [
  {
    icon: Zap,
    title: "ENERGÍA SOSTENIDA",
    desc: "Pensada para acompañarte durante el día.",
    accent: "green" as const,
  },
  {
    icon: Leaf,
    title: "INGREDIENTES NATURALES",
    desc: "Cacao, quinua, miel y extractos vegetales.",
    accent: "purple" as const,
  },
  {
    icon: Backpack,
    title: "PRÁCTICO PARA LLEVAR",
    desc: "Cabe en tu mochila, botella o bolsillo.",
    accent: "yellow" as const,
  },
  {
    icon: Timer,
    title: "PARA UN RITMO ACTIVO",
    desc: "Estudia, trabaja, entrena y muévete.",
    accent: "green" as const,
  },
];

/** Momentos de uso a lo largo del día (sección "Momentos"). */
export const DAILY_USE = [
  {
    id: "estudia",
    icon: Backpack,
    title: "ESTUDIA",
    desc: "Cuando necesitas continuar con tu jornada académica.",
    gradient: "linear-gradient(160deg,#12210a,#050505)",
    image: "moments/estudia.jpg",
    accent: "green" as const,
  },
  {
    id: "trabaja",
    icon: Laptop,
    title: "TRABAJA",
    desc: "Cuando tu día no se detiene entre reuniones y tareas.",
    gradient: "linear-gradient(160deg,#1c1608,#050505)",
    image: "moments/trabaja.jpg",
    accent: "yellow" as const,
  },
  {
    id: "entrena",
    icon: Dumbbell,
    title: "ENTRENA",
    desc: "Un snack práctico para acompañar tu movimiento.",
    gradient: "linear-gradient(160deg,#190c2b,#050505)",
    image: "moments/entrena.jpg",
    accent: "purple" as const,
  },
  {
    id: "muevete",
    icon: Bike,
    title: "MUÉVETE",
    desc: "Cuando necesitas una opción práctica para continuar tu rutina.",
    gradient: "linear-gradient(160deg,#08151f,#050505)",
    image: "moments/muevete.jpg",
    accent: "blue" as const,
  },
];

/** Ruta pública del PDF descargable — único recurso oficial de la marca. */
export const GUIDE_PDF_URL = `${import.meta.env.BASE_URL}guia-cransh-energia-dia-intenso.pdf`;
export const GUIDE_PDF_FILENAME = "guia-cransh-energia-dia-intenso.pdf";

/** Foto del empaque principal, producto protagonista del Hero. */
export const HERO_PRODUCT_IMAGE = `${import.meta.env.BASE_URL}images/hero/cransh-empaque.png`;

/**
 * Contenido real de la Guía Cransh, capítulo por capítulo — usado tanto en
 * la sección "Recursos" de la web principal como en la landing /guia. No
 * agregar capítulos que no existan en el PDF fuente.
 */
export const GUIDE_CHAPTERS = [
  { icon: ClipboardList, title: "Detecta tu patrón", desc: "Identifica qué situaciones se repiten en tu día." },
  { icon: BatteryLow, title: "5 errores que drenan tu energía", desc: "Ajustes pequeños, grandes cambios." },
  { icon: Calendar, title: "Construye tu día", desc: "Una rutina que se adapta a tu realidad." },
  { icon: Package, title: "El kit para un día intenso", desc: "La clave no es llevar más cosas, es salir preparado." },
  { icon: CheckSquare, title: "Checklist antes de salir", desc: "Pequeños hábitos que hacen una gran diferencia." },
  { icon: ListChecks, title: "Tracker de 7 días", desc: "Pequeños avances, grandes resultados." },
  { icon: UtensilsCrossed, title: "El papel de un snack práctico", desc: "Pequeños momentos, grandes impulsos." },
  { icon: Leaf, title: "Conoce Cransh", desc: "Ingredientes naturales, energía real en cada bocado." },
] as const;

/** Opciones de actividad (referencia interna, no se usa en el formulario de /guia). */
export const ACTIVITIES = [
  { value: "estudio", label: "Estudio" },
  { value: "trabajo", label: "Trabajo" },
  { value: "entrenamiento", label: "Entrenamiento" },
  { value: "estudio_trabajo", label: "Estudio y trabajo" },
  { value: "todas", label: "Todas las anteriores" },
] as const;

export type ActivityId = (typeof ACTIVITIES)[number]["value"];
