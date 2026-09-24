/** Nombre interno de la campaña de captación (uso analítico/interno, no visible al usuario). */
export const CAMPAIGN_ID = "GUIA_CRANSH_DIA_INTENSO";

export interface GuideLeadPayload {
  nombre: string;
  email: string;
  whatsapp: string;
  aceptaPrivacidad: boolean;
  campana: string;
}

/**
 * Envía un lead capturado desde el formulario de /guia (captación a cambio
 * de la Guía Cransh descargable).
 *
 * ------------------------------------------------------------------
 * PUNTO DE INTEGRACIÓN — CRM / EMAIL MARKETING
 * ------------------------------------------------------------------
 * Este proyecto todavía no tiene backend. Cuando se conecte un CRM o
 * herramienta de email marketing (Google Sheets vía Apps Script, Brevo,
 * Mailchimp, HubSpot, una API propia, etc.), la integración real debe
 * reemplazar el cuerpo de esta función y NADA MÁS: el formulario
 * (GuideLeadForm.tsx) ya llama a `submitGuideLead(payload)` y solo
 * necesita que la promesa se resuelva (éxito, y entonces se habilita la
 * descarga del PDF) o se rechace (error) para mostrar el estado correcto.
 *
 * Ejemplo referencial de una futura integración (NO implementado):
 *
 *   const response = await fetch(import.meta.env.VITE_LEADS_API_URL, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!response.ok) throw new Error("No se pudo registrar el lead");
 *
 * IMPORTANTE:
 * - Nunca coloques API keys, tokens ni credenciales privadas aquí (este
 *   archivo se ejecuta en el navegador). Cualquier credencial debe vivir
 *   del lado del servidor (Cloud Function, API, etc.) y exponerse al
 *   frontend, como máximo, mediante una URL pública de endpoint en una
 *   variable de entorno (import.meta.env.VITE_*).
 * - No inventes endpoints, bases de datos ni integraciones que no
 *   existen todavía.
 * ------------------------------------------------------------------
 */
export async function submitGuideLead(payload: GuideLeadPayload): Promise<void> {
  // Simulación temporal mientras no existe backend: no persiste datos
  // reales, solo permite validar el flujo de UX (loading → éxito → descarga).
  await new Promise((resolve) => setTimeout(resolve, 600));
  console.info("[leads] Lead de guía capturado (sin backend conectado todavía):", payload);
}
