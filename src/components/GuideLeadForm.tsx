import { ArrowRight, CheckCircle2, Download, Loader2 } from "lucide-react";
import { type FormEvent, useState } from "react";
import { GUIDE_PDF_FILENAME, GUIDE_PDF_URL } from "../lib/data";
import { submitGuideLead } from "../lib/leads";
import { Reveal } from "./Reveal";

interface FormState {
  nombre: string;
  email: string;
  whatsapp: string;
  aceptaPrivacidad: boolean;
}

const INITIAL_STATE: FormState = {
  nombre: "",
  email: "",
  whatsapp: "",
  aceptaPrivacidad: false,
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d][\d\s()-]{6,14}\d$/;

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.nombre.trim()) errors.nombre = "Ingresa tu nombre.";

  if (!form.email.trim()) {
    errors.email = "Ingresa tu correo electrónico.";
  } else if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = "Ingresa un correo electrónico válido.";
  }

  if (!form.whatsapp.trim()) {
    errors.whatsapp = "Ingresa tu WhatsApp.";
  } else if (!PHONE_RE.test(form.whatsapp.trim())) {
    errors.whatsapp = "Ingresa un número válido.";
  }

  if (!form.aceptaPrivacidad) {
    errors.aceptaPrivacidad = "Debes aceptar el tratamiento de tus datos para continuar.";
  }

  return errors;
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-ink/50 px-4 py-3.5 text-base text-cransh-off placeholder:text-cransh-off/30 outline-none transition duration-200 hover:border-white/20 focus:border-cransh-green/70 focus:ring-2 focus:ring-cransh-green/10";

const errorClass = "mt-1.5 text-xs font-medium text-red-400";

/**
 * Formulario de captación de leads de /guia. Único objetivo: obtener los
 * datos del usuario para entregarle la Guía Cransh en PDF.
 */
export function GuideLeadForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitGuideLead({
        nombre: form.nombre.trim(),
        email: form.email.trim(),
        whatsapp: form.whatsapp.trim(),
        aceptaPrivacidad: form.aceptaPrivacidad,
        campana: "GUIA_CRANSH_DIA_INTENSO",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Reveal>
        <div
          id="formulario-guia"
          className="rounded-3xl border border-cransh-green/25 bg-white/[0.03] p-8 text-center sm:p-12"
        >
          <CheckCircle2 size={48} strokeWidth={1.5} className="mx-auto text-cransh-green" />
          <h2 className="mt-6 font-display text-4xl tracking-tight text-cransh-off sm:text-5xl">
            ¡LISTO! TU GUÍA ESTÁ AQUÍ.
          </h2>
          <p className="mt-4 text-base text-cransh-off/75 sm:text-lg">
            Ya puedes acceder a la Guía Cransh.
          </p>
          <a
            href={GUIDE_PDF_URL}
            download={GUIDE_PDF_FILENAME}
            className="btn-magnetic mt-8 inline-flex items-center gap-2 rounded-full bg-cransh-green px-8 py-4 text-sm font-bold tracking-wide text-ink shadow-[0_0_50px_rgba(168,255,0,0.35)]"
          >
            <Download size={18} strokeWidth={2.5} />
            DESCARGAR GUÍA →
          </a>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <form
        id="formulario-guia"
        noValidate
        onSubmit={handleSubmit}
        className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d09] p-6 shadow-[0_24px_100px_rgba(0,0,0,0.45)] sm:p-9"
      >
        <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-64 w-64 rounded-full bg-cransh-green/[0.08] blur-[80px]" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cransh-off/40">
            Formulario de acceso
          </span>
          <span className="rounded-full border border-cransh-green/20 bg-cransh-green/[0.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cransh-green">
            Gratis · PDF
          </span>
        </div>
        <h2 className="mt-5 font-display text-3xl leading-[0.95] tracking-tight text-cransh-off sm:text-4xl">
          RECIBE TU GUÍA
          <br />
          <span className="text-cransh-green">CRANSH GRATIS</span>
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-cransh-off/55 sm:text-base">
          Completa tus datos y te damos acceso a las 12 páginas para organizar tus días.
        </p>

        <div className="mt-8">
          <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-cransh-off/80">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            autoComplete="given-name"
            required
            className={inputClass}
            value={form.nombre}
            onChange={(e) => update("nombre", e.target.value)}
            placeholder="Tu nombre"
            aria-invalid={!!errors.nombre}
            aria-describedby={errors.nombre ? "nombre-error" : undefined}
          />
          {errors.nombre && (
            <p id="nombre-error" className={errorClass}>
              {errors.nombre}
            </p>
          )}
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-cransh-off/80">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="tucorreo@ejemplo.com"
          />
          {errors.email && (
            <p id="email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>

        <div className="mt-5">
          <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-cransh-off/80">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className={inputClass}
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            aria-invalid={!!errors.whatsapp}
            aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
            placeholder="+51 999 999 999"
          />
          {errors.whatsapp && (
            <p id="whatsapp-error" className={errorClass}>
              {errors.whatsapp}
            </p>
          )}
        </div>

        <div className="mt-6">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-cransh-off/70">
            <input
              type="checkbox"
              required
              checked={form.aceptaPrivacidad}
              onChange={(e) => update("aceptaPrivacidad", e.target.checked)}
              className="mt-0.5 h-5 w-5 shrink-0 rounded border-white/20 bg-white/[0.04] accent-cransh-green"
              aria-invalid={!!errors.aceptaPrivacidad}
              aria-describedby={errors.aceptaPrivacidad ? "privacidad-error" : undefined}
            />
            Acepto el tratamiento de mis datos personales y la política de privacidad.
          </label>
          {errors.aceptaPrivacidad && (
            <p id="privacidad-error" className={errorClass}>
              {errors.aceptaPrivacidad}
            </p>
          )}
        </div>

        {status === "error" && (
          <p className="mt-5 text-sm font-medium text-red-400">
            No pudimos registrar tus datos. Inténtalo nuevamente.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-magnetic mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cransh-green px-8 py-4 text-sm font-bold tracking-wide text-ink shadow-[0_0_50px_rgba(168,255,0,0.25)] transition-shadow hover:shadow-[0_0_60px_rgba(168,255,0,0.4)] disabled:cursor-wait disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={18} strokeWidth={2.5} className="animate-spin" />
              ENVIANDO...
            </>
          ) : (
            <>
              QUIERO MI GUÍA
              <ArrowRight size={18} strokeWidth={2.5} />
            </>
          )}
        </button>

        <p className="mt-5 text-center text-[11px] leading-relaxed text-cransh-off/35">
          Tus datos se usan únicamente para enviarte la guía y contenido de valor de Cransh
          Energy. Puedes darte de baja cuando quieras.
        </p>
      </form>
    </Reveal>
  );
}
