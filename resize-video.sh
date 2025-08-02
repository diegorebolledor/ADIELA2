#!/bin/bash

# ADIELA Video Resizer Script
# Reescala video a 1280x720 optimizado para web

echo "🎬 ADIELA Video Resizer"
echo "======================="

# Verificar que FFmpeg esté instalado
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg no está instalado."
    echo "📥 Para instalar FFmpeg:"
    echo "   1. Instala Homebrew: /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    echo "   2. Instala FFmpeg: brew install ffmpeg"
    echo ""
    echo "🌐 O usa una herramienta online como:"
    echo "   • CloudConvert: https://cloudconvert.com"
    echo "   • HandBrake: https://handbrake.fr"
    exit 1
fi

# Archivo original
ORIGINAL="assets/videos/social_diegorebolledor_closed_up_de_una_mujer_usando_esmeraldas_tall_7f9800af-d6c8-4943-826f-6fbca2361bf0_1.mp4"
OUTPUT="assets/videos/hero-video-optimized.mp4"
BACKUP="assets/videos/original-backup.mp4"

echo "📁 Procesando: $ORIGINAL"

# Backup del original
if [ ! -f "$BACKUP" ]; then
    echo "💾 Creando backup..."
    cp "$ORIGINAL" "$BACKUP"
fi

# Reescalar video con optimizaciones web
echo "🔄 Reescalando a 1280x720..."

ffmpeg -i "$ORIGINAL" \
    -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2:color=black" \
    -c:v libx264 \
    -preset medium \
    -crf 23 \
    -c:a aac \
    -b:a 128k \
    -movflags +faststart \
    -pix_fmt yuv420p \
    -r 30 \
    -t 30 \
    "$OUTPUT" \
    -y

if [ $? -eq 0 ]; then
    echo "✅ Video reescalado exitosamente!"
    echo "📊 Archivo original: $(du -h "$ORIGINAL" | cut -f1)"
    echo "📊 Archivo optimizado: $(du -h "$OUTPUT" | cut -f1)"
    echo ""
    echo "🔄 Para usar el nuevo video, ejecuta:"
    echo "   mv \"$OUTPUT\" \"$ORIGINAL\""
    echo ""
    echo "📱 O actualiza el HTML para usar: hero-video-optimized.mp4"
else
    echo "❌ Error al procesar el video"
    exit 1
fi 