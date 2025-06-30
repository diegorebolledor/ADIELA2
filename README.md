# ADIELA - Sitio Web de Lujo

Un sitio web elegante y minimalista inspirado en las estéticas de Prada y Dior, con un hero section cinematográfico y diseño completamente responsivo.

## 🎬 Hero Section Cinematográfico

### Cómo Agregar Tu Video

1. **Preparar el Video**
   - Formato recomendado: MP4 (H.264) y WebM para compatibilidad
   - Resolución: Mínimo 1920x1080 (Full HD)
   - Duración: 10-30 segundos para mejor rendimiento
   - Tamaño: Máximo 10MB para carga rápida

2. **Ubicación de Archivos**
   ```
   assets/
   └── videos/
       ├── hero-video.mp4     ← Tu video principal
       ├── hero-video.webm    ← Versión WebM (opcional)
       └── hero-poster.jpg    ← Imagen de respaldo
   ```

3. **Optimización Recomendada**
   - Comprimir el video manteniendo calidad
   - Crear una imagen poster (JPG) del primer frame
   - Usar herramientas como Handbrake o FFmpeg

### Comandos FFmpeg para Optimización

```bash
# Comprimir video para web
ffmpeg -i tu-video-original.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k assets/videos/hero-video.mp4

# Crear versión WebM
ffmpeg -i assets/videos/hero-video.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 assets/videos/hero-video.webm

# Extraer poster image
ffmpeg -i assets/videos/hero-video.mp4 -ss 00:00:01 -vframes 1 assets/videos/hero-poster.jpg
```

## 🚀 Configuración Rápida

### 1. Estructura del Proyecto
```
ADIELA/
├── index.html
├── assets/
│   ├── styles/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── collection-1.jpg
│   │   ├── collection-2.jpg
│   │   ├── collection-3.jpg
│   │   └── craftsmanship.jpg
│   ├── videos/
│   │   ├── hero-video.mp4
│   │   ├── hero-video.webm
│   │   └── hero-poster.jpg
│   └── fonts/
└── README.md
```

### 2. Agregar Imágenes de Colección

Coloca imágenes de alta calidad (mínimo 800x1000px) en `assets/images/`:
- `collection-1.jpg`
- `collection-2.jpg`
- `collection-3.jpg`
- `craftsmanship.jpg`

## 🎨 Características de Diseño

### Estilo Prada/Dior
- **Tipografía**: Inter (Google Fonts) con pesos ligeros
- **Colores**: Esquema monocromático elegante
- **Espaciado**: Generoso uso del espacio en blanco
- **Animaciones**: Sutiles y sofisticadas
- **Layout**: Grid moderno y responsivo

### Responsividad
- **Desktop**: Layout completo con grid de 3 columnas
- **Tablet**: Grid de 2 columnas adaptativo
- **Mobile**: Stack vertical con navegación hamburguesa

### Rendimiento
- **Video optimizado**: Autoplay con fallback a imagen
- **Lazy loading**: Imágenes cargan bajo demanda
- **CSS minimalista**: Solo estilos necesarios
- **JavaScript eficiente**: Efectos smooth sin saturar

## 🛠️ Personalización

### Cambiar Colores
Edita las variables CSS en `assets/styles/main.css`:

```css
:root {
  --color-primary: #000000;      /* Color principal */
  --color-secondary: #ffffff;    /* Color secundario */
  --color-accent: #c9a96e;       /* Color de acento */
  --color-text: #1a1a1a;         /* Texto principal */
  --color-text-light: #666666;   /* Texto secundario */
}
```

### Modificar Contenido
- **Texto del hero**: Edita `index.html` líneas 45-55
- **Productos**: Actualiza la sección `.collection` 
- **Información de marca**: Modifica la sección `.about`

### Agregar Fuentes Custom
1. Descarga fuentes y colócalas en `assets/fonts/`
2. Agrega `@font-face` en el CSS
3. Actualiza las variables `--font-primary` y `--font-display`

## 📱 Funcionalidades

### Hero Section
- Video de fondo con autoplay
- Overlay personalizable
- Animaciones de entrada suaves
- Indicador de scroll

### Navegación
- Menú fijo con blur effect
- Navegación móvil hamburguesa
- Smooth scroll a secciones
- Enlaces hover elegantes

### Galería de Productos
- Grid responsivo
- Hover effects premium
- Overlay con call-to-action
- Carga optimizada de imágenes

## 🌐 Deployment

### GitHub Pages
1. Sube el proyecto a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará en `https://usuario.github.io/adiela`

### Netlify
1. Arrastra la carpeta del proyecto a netlify.com
2. Tu sitio se desplegará automáticamente
3. Opción de dominio personalizado disponible

### Servidor Local
```bash
# Con Python (si está instalado)
python -m http.server 8000

# Luego ve a http://localhost:8000
```

## 🎯 Optimizaciones Avanzadas

### SEO
- Meta tags incluidos
- Estructura semántica HTML5
- Alt texts en imágenes
- Schema markup recomendado

### Performance
- Critical CSS inline (opcional)
- Preload de recursos importantes
- Compresión de imágenes WebP
- Service Worker para cache (próximamente)

### Accesibilidad
- Contraste suficiente en colores
- Navegación por teclado
- Alt texts descriptivos
- Estructura de headings correcta

## 📞 Soporte

Para preguntas o soporte:
- Revisa este README
- Verifica la consola del navegador para errores
- Asegúrate de que todos los archivos estén en su lugar

---

**Creado con amor para ADIELA** ✨
*Elegancia atemporal en código* 