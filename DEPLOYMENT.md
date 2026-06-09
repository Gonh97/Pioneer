# Despliegue de Pioneer — Estado y guía

Sitio web de la empresa **Pioneer**, hecho con **React + Vite + Tailwind** (creado en Figma Make).
Repo GitHub: **`Gonh97/Pioneer`** · Hosting: **GitHub Pages** · Dominio: **www.pioneervenezuela.com** (GoDaddy).

🟢 **El sitio ya está en línea:** https://www.pioneervenezuela.com (usar siempre con `www`).

---

## ✅ Lo que ya está hecho y funcionando

1. **Despliegue automático** — cada push a la rama `main` compila y publica el sitio solo.
   Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
   (hace `npm install` + `npm run build` y publica la carpeta `dist`).
2. **Rutas internas** — fallback SPA: copia `dist/index.html` → `dist/404.html` para que
   `/nosotros`, `/servicios/...`, etc. funcionen al recargar la página.
3. **Dominio personalizado** — archivo [`public/CNAME`](public/CNAME) = `www.pioneervenezuela.com`.
4. **HTTPS / SSL** — certificado de GitHub para `www` aprobado.
5. **SEO** — `index.html` cambiado de `noindex,nofollow` a `index,follow` (sí aparece en Google).

---

## ⚠️ Pendiente — lo hace el usuario en GoDaddy

El dominio **sin www** (`pioneervenezuela.com`) resuelve a **6 IPs**: las 4 correctas de GitHub
(`185.199.108–111.153`) **+ 2 que sobran de GoDaddy**: `76.223.105.230` y `13.248.243.5`.

Esas 2 IPs las mete la función **"Forwarding / Reenvío" (parking)** de GoDaddy
(no aparecen como registros A editables en la tabla de DNS). Causan:
- Error `DNS check unsuccessful / InvalidDNSError` en GitHub Pages.
- Error de certificado en el navegador al abrir el dominio sin `www`.

### Solución
1. GoDaddy → **Mis productos / Portfolio** → clic en `pioneervenezuela.com`.
2. Buscar la sección **"Forwarding / Reenvío"** (o "Park / Dominio aparcado") — está
   **aparte** de la tabla de registros DNS, normalmente en *Configuración adicional* o más abajo.
3. **Eliminar / desactivar** ese reenvío. Eso quita las 2 IPs sobrantes.
4. Esperar ~15–30 min → en GitHub: **Settings → Pages → "Check again"**. El error rojo desaparece.

Mientras tanto: usar siempre **https://www.pioneervenezuela.com** (con `www`). No escribir el
dominio a secas — da error de certificado por el parking.

---

## Registros DNS correctos (referencia)

| Tipo  | Nombre | Valor              |
|-------|--------|--------------------|
| CNAME | `www`  | `gonh97.github.io` |
| A     | `@`    | `185.199.108.153`  |
| A     | `@`    | `185.199.109.153`  |
| A     | `@`    | `185.199.110.153`  |
| A     | `@`    | `185.199.111.153`  |

(El `@` debe tener **solo** esas 4 IPs — sin las de GoDaddy.)

---

## Comandos útiles para verificar

```bash
# Ver a qué IPs resuelve el dominio (debe ser solo las 4 de GitHub)
nslookup pioneervenezuela.com 8.8.8.8

# Ver el CNAME de www
nslookup -type=CNAME www.pioneervenezuela.com 8.8.8.8

# Estado de GitHub Pages (cname, cert, https_enforced)
gh api repos/Gonh97/Pioneer/pages

# Ver los despliegues
gh run list --repo Gonh97/Pioneer
```
