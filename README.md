# Sartorial — starter website

Este paquete contiene una primera versión funcional del frontend basada en la especificación y el HTML del PDF de Sartorial.

## Qué incluye
- Landing page responsive con estética editorial oscura.
- Secciones de marca, tejidos, proceso y configuración de camisa.
- Selector de idioma ES / EN / IT para los textos principales.
- Formulario de pedido: tejido, iniciales, modo de medidas, seis medidas o talla estándar, datos de contacto y consentimiento.
- Guía textual de medidas.
- Temporizador de cierre de lote los días 15 y último día del mes.
- Código inicial de Google Apps Script para guardar solicitudes en Google Sheets.

## Qué NO está todavía listo para producción
- No hay cobro con tarjeta, cálculo de envío, confirmación de pago ni panel privado de pedidos.
- El formulario no envía nada hasta configurar `APPS_SCRIPT_URL` en `app.js`.
- El envío con Apps Script `no-cors` no permite al navegador verificar que Google haya guardado la fila. Debe probarse con pedidos ficticios y comprobarse la hoja manualmente.
- El vídeo del PDF parece usar un ID de Google Drive como si fuera un ID de YouTube. No se ha inventado un vídeo sustituto; el bloque indica dónde añadir el vídeo real.
- Las imágenes del PDF son enlaces externos de Google Photos/Drive. Si esos enlaces dejan de funcionar o no son públicos, sustitúyelos por archivos propios en `assets/` y actualiza `src` en `index.html`.
- No incluye un administrador visual. Esta versión es un frontend estático; para editar contenido desde un panel sin tocar código habrá que integrarlo en WordPress/WooCommerce o añadir un CMS.
- Antes de producción hay que revisar textos legales, privacidad/RGPD, protección anti-spam, seguridad, copias de seguridad, política de devoluciones, impuestos y requisitos del país donde opere la empresa.

## Probar localmente
Abre `index.html` en un navegador. Para evitar limitaciones del navegador, es mejor usar la extensión Live Server de VS Code o cualquier servidor local estático.

## Publicar en GitHub
1. Crea un repositorio privado llamado `sartorial`.
2. Sube `index.html`, `styles.css`, `app.js`, `assets/`, `google-apps-script/` y este README.
3. No publiques claves, contraseñas, datos de clientes ni URLs privadas de servicios.

## Conectar Google Sheets (solo pruebas)
1. Crea una hoja de cálculo.
2. Abre Extensiones > Apps Script.
3. Copia `google-apps-script/Code.gs`.
4. Guarda y despliega como aplicación web. El acceso público puede exponer el endpoint a spam; úsalo solo para pruebas hasta añadir medidas de seguridad.
5. Copia la URL de despliegue en `CONFIG.APPS_SCRIPT_URL` dentro de `app.js`.
6. Haz una solicitud ficticia y confirma manualmente que aparece en la hoja.

## Importante
No se debe presentar el formulario como un checkout completo. Para vender con pago online se necesita integrar un proveedor de pagos y asociar de forma segura el estado del pago con el pedido en el backend.
