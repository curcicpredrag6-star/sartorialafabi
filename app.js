const CONFIG = {
  // Pega aquí la URL de la aplicación web de Google Apps Script después de configurarla.
  // Mientras esté vacío, el formulario NO simula un pedido enviado: permite probar la web localmente.
  APPS_SCRIPT_URL: ""
};

const translations = {
  es: {eyebrow:"CONFECCIÓN BAJO DEMANDA",heroTitle:'Diseñado para <em>cómo eres.</em>',heroText:"Las tallas estándar no te conocen. Creamos una camisa pensada para tu cuerpo, con medidas precisas o una talla preestablecida.",fixedPrice:"PRECIO DE LANZAMIENTO",cta:'CONFIGURAR MI CAMISA <span>↗</span>',heroFoot:"Algodón premium · Personalización · Hecha bajo pedido",manifestoTitle:"La buena sastrería empieza por escucharte.",manifestoText:"Una prenda no debería pedirte que encajes en ella. Diseñamos cada camisa alrededor de quien la lleva: sus proporciones, sus preferencias y su manera de moverse.",materialsEyebrow:"SELECCIÓN DE TEJIDOS",materialsTitle:"La materia importa.",processEyebrow:"HECHO PARA TI",processTitle:"Tres pasos. Una camisa propia.",step1Title:"Define tu ajuste",step1Text:"Elige una talla estándar o introduce tus medidas en centímetros.",step2Title:"Personaliza",step2Text:"Selecciona el tejido y añade tus iniciales si lo deseas.",step3Title:"La confeccionamos",step3Text:"Revisamos tu pedido y preparamos tu camisa bajo demanda.",orderEyebrow:"TU CAMISA, A TU MANERA",orderTitle:"Configura tu Sartorial.",orderText:"Completa tus preferencias. Revisaremos los datos antes de confirmar la producción.",formProduct:"La prenda",fabricLabel:"Tejido",initialsLabel:"Iniciales bordadas (opcional, máximo 3)",fitMethod:"¿Cómo quieres definir el ajuste?",customMode:"Mis medidas",standardMode:"Talla estándar",measureGuide:"GUÍA PARA TOMAR LAS MEDIDAS + VÍDEO",guideIntro:"Usa una cinta métrica flexible. Mide sobre una camisa que te siente bien o pide ayuda a otra persona. Anota las medidas en centímetros.",measurementsTitle:"Tus medidas (cm)",standardTitle:"Talla estándar",patternLabel:"Patrón",sizeLabel:"Talla",heightLabel:"Altura (cm)",weightLabel:"Peso (kg)",contactTitle:"Tus datos",nameLabel:"Nombre completo",emailLabel:"Email",phoneLabel:"Teléfono (opcional)",notesLabel:"Notas adicionales (opcional)",privacyText:"He leído y acepto la política de privacidad y el tratamiento de mis medidas para gestionar este pedido.",submit:"ENVIAR SOLICITUD — 50 €",paymentNote:"Enviar la solicitud no implica un cobro. Os contactaremos para confirmar disponibilidad, envío y pago.",promiseTitle:"La precisión está en los detalles.",promiseText:"Cada pedido se revisa antes de pasar a confección. Si tienes dudas con tus medidas, escríbenos antes de enviar el formulario."},
  en: {eyebrow:"MADE TO ORDER",heroTitle:'Designed around <em>you.</em>',heroText:"Standard sizes don't know you. We create a shirt around your body, using precise measurements or a standard size.",fixedPrice:"INTRODUCTORY PRICE",cta:'CONFIGURE YOUR SHIRT <span>↗</span>',heroFoot:"Premium cotton · Personalisation · Made to order",manifestoTitle:"Good tailoring starts by listening.",manifestoText:"A garment should not ask you to fit into it. We design each shirt around the person wearing it: their proportions, preferences and movement.",materialsEyebrow:"FABRIC SELECTION",materialsTitle:"Material matters.",processEyebrow:"MADE FOR YOU",processTitle:"Three steps. Your own shirt.",step1Title:"Choose your fit",step1Text:"Choose a standard size or enter your measurements in centimetres.",step2Title:"Personalise",step2Text:"Select your fabric and add your initials if you wish.",step3Title:"We make it",step3Text:"We review your order and prepare your shirt to order.",orderEyebrow:"YOUR SHIRT, YOUR WAY",orderTitle:"Configure your Sartorial.",orderText:"Complete your preferences. We will review the details before confirming production.",formProduct:"The shirt",fabricLabel:"Fabric",initialsLabel:"Embroidered initials (optional, max 3)",fitMethod:"How would you like to define the fit?",customMode:"My measurements",standardMode:"Standard size",measureGuide:"MEASUREMENT GUIDE + VIDEO",guideIntro:"Use a flexible tape measure. Measure a well-fitting shirt or ask someone to help. Enter all measurements in centimetres.",measurementsTitle:"Your measurements (cm)",standardTitle:"Standard size",patternLabel:"Fit",sizeLabel:"Size",heightLabel:"Height (cm)",weightLabel:"Weight (kg)",contactTitle:"Your details",nameLabel:"Full name",emailLabel:"Email",phoneLabel:"Phone (optional)",notesLabel:"Additional notes (optional)",privacyText:"I have read and accept the privacy policy and the processing of my measurements for this order.",submit:"SEND REQUEST — €50",paymentNote:"Submitting this request does not charge you. We will contact you to confirm availability, shipping and payment.",promiseTitle:"Precision lives in the details.",promiseText:"Every order is reviewed before production. If you need help with measurements, contact us before submitting."},
  it: {eyebrow:"PRODUZIONE SU ORDINAZIONE",heroTitle:'Disegnata intorno <em>a te.</em>',heroText:"Le taglie standard non ti conoscono. Realizziamo una camicia pensata per il tuo corpo, con misure precise o una taglia standard.",fixedPrice:"PREZZO DI LANCIO",cta:'CONFIGURA LA TUA CAMICIA <span>↗</span>',heroFoot:"Cotone premium · Personalizzazione · Su ordinazione",manifestoTitle:"La buona sartoria comincia dall'ascolto.",manifestoText:"Un capo non dovrebbe chiederti di adattarti. Disegniamo ogni camicia intorno a chi la indossa: proporzioni, preferenze e movimento.",materialsEyebrow:"SELEZIONE DEI TESSUTI",materialsTitle:"La materia conta.",processEyebrow:"FATTA PER TE",processTitle:"Tre passi. La tua camicia.",step1Title:"Definisci la vestibilità",step1Text:"Scegli una taglia standard o inserisci le misure in centimetri.",step2Title:"Personalizza",step2Text:"Seleziona il tessuto e aggiungi le iniziali, se lo desideri.",step3Title:"La realizziamo",step3Text:"Controlliamo l'ordine e prepariamo la camicia su richiesta.",orderEyebrow:"LA TUA CAMICIA, A MODO TUO",orderTitle:"Configura Sartorial.",orderText:"Completa le tue preferenze. Controlleremo i dati prima di confermare la produzione.",formProduct:"Il capo",fabricLabel:"Tessuto",initialsLabel:"Iniziali ricamate (facoltative, max 3)",fitMethod:"Come vuoi definire la vestibilità?",customMode:"Le mie misure",standardMode:"Taglia standard",measureGuide:"GUIDA ALLE MISURE + VIDEO",guideIntro:"Usa un metro flessibile. Misura una camicia che veste bene o chiedi aiuto. Inserisci le misure in centimetri.",measurementsTitle:"Le tue misure (cm)",standardTitle:"Taglia standard",patternLabel:"Vestibilità",sizeLabel:"Taglia",heightLabel:"Altezza (cm)",weightLabel:"Peso (kg)",contactTitle:"I tuoi dati",nameLabel:"Nome completo",emailLabel:"Email",phoneLabel:"Telefono (facoltativo)",notesLabel:"Note aggiuntive (facoltative)",privacyText:"Ho letto e accetto l'informativa sulla privacy e il trattamento delle mie misure per gestire questo ordine.",submit:"INVIA RICHIESTA — 50 €",paymentNote:"L'invio della richiesta non comporta un addebito. Ti contatteremo per confermare disponibilità, spedizione e pagamento.",promiseTitle:"La precisione è nei dettagli.",promiseText:"Ogni ordine viene controllato prima della produzione. Se hai dubbi sulle misure, contattaci prima di inviare il modulo."}
};

const form = document.querySelector("#order-form");
const customFields = document.querySelector("#custom-fields");
const standardFields = document.querySelector("#standard-fields");
const statusBox = document.querySelector("#form-status");
const modeInputs = [...document.querySelectorAll('input[name="measurementMode"]')];

function setMode(mode) {
  const custom = mode === "custom";
  customFields.hidden = !custom;
  standardFields.hidden = custom;
  customFields.querySelectorAll("input").forEach(el => el.required = custom);
  standardFields.querySelectorAll("input,select").forEach(el => el.required = !custom && ["height","weight"].includes(el.name));
}
modeInputs.forEach(el => el.addEventListener("change", () => setMode(el.value)));
setMode("custom");

function setLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll("[data-lang]").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  localStorage.setItem("sartorial-language", lang);
}
document.querySelectorAll("[data-lang]").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem("sartorial-language") || "es");

function updateCountdown() {
  const now = new Date();
  const cutoff = new Date(now.getFullYear(), now.getMonth(), now.getDate() <= 15 ? 15 : new Date(now.getFullYear(), now.getMonth()+1, 0).getDate(), 23,59,59);
  const diff = Math.max(0, cutoff-now);
  const days = Math.floor(diff/86400000), hours = Math.floor(diff%86400000/3600000), mins = Math.floor(diff%3600000/60000), secs = Math.floor(diff%60000/1000);
  document.querySelector("#countdown").textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
  document.querySelector("#batch-label").textContent = now.getDate() <= 15 ? "LOTE 01 · ABIERTO" : "LOTE 02 · ABIERTO";
}
updateCountdown(); setInterval(updateCountdown,1000);
document.querySelector("#year").textContent = new Date().getFullYear();

form.addEventListener("submit", async event => {
  event.preventDefault();
  statusBox.className = "status";
  const data = Object.fromEntries(new FormData(form).entries());
  data.orderId = "SAR-" + Date.now().toString(36).toUpperCase();
  data.createdAt = new Date().toISOString();
  data.priceEUR = 50;
  data.language = document.documentElement.lang;
  data.measurements = data.measurementMode === "custom"
    ? Object.fromEntries(["neck","chest","waist","sleeve","shoulders","length"].map(k => [k,data[k] || ""]))
    : {fitPattern:data.fitPattern,standardSize:data.standardSize,height:data.height,weight:data.weight};
  localStorage.setItem("sartorial_pending_order", JSON.stringify(data));
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.querySelector("span").textContent = "ENVIANDO…";
  try {
    if (!CONFIG.APPS_SCRIPT_URL) throw new Error("NOT_CONFIGURED");
    // Apps Script web apps often return an opaque response with no-cors.
    // We therefore label this as submitted for processing, not as payment confirmation.
    await fetch(CONFIG.APPS_SCRIPT_URL, {method:"POST", mode:"no-cors", body:JSON.stringify(data)});
    statusBox.className = "status success";
    statusBox.textContent = "Solicitud enviada. Conserva este código: " + data.orderId + ". Os contactaremos para confirmar el pedido.";
    localStorage.removeItem("sartorial_pending_order");
    form.reset(); setMode("custom");
  } catch (err) {
    statusBox.className = "status error";
    if (err.message === "NOT_CONFIGURED") {
      statusBox.textContent = "La recepción de pedidos aún no está conectada. El formulario está en modo de prueba; no se ha enviado ningún pedido.";
    } else {
      statusBox.textContent = "No se pudo completar el envío. Los datos quedan guardados temporalmente en este navegador. Contacta con Sartorial antes de volver a enviar.";
    }
  } finally {
    button.disabled = false;
    button.querySelector("span").textContent = translations[document.documentElement.lang].submit;
  }
});
