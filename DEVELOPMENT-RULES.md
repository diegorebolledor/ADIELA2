# 🚨 REGLAS DE DESARROLLO - PROYECTO ADIELA

## 📋 **Protocolo de Commits y Deploy**

### ⛔ **REGLA PRINCIPAL: NO PUSH AUTOMÁTICO**

**🔒 NO HACER COMMIT NI PUSH A GITHUB SIN AUTORIZACIÓN EXPLÍCITA**

- ✅ **Solo hacer cambios locales** hasta nueva indicación
- ✅ **Mostrar preview local** de los cambios
- ✅ **Esperar aprobación** antes de cualquier `git commit`
- ✅ **Esperar confirmación** antes de cualquier `git push`

---

## 🔄 **Flujo de Trabajo Autorizado**

### **1. Desarrollo Local**
- Hacer cambios en archivos locales
- Probar cambios localmente (`open index.html`)
- Mostrar resultados al cliente

### **2. Esperar Aprobación**
- **ESPERAR** instrucción explícita: *"haz commit"* o *"sube los cambios"*
- NO asumir que los cambios deben subirse automáticamente

### **3. Solo con Autorización**
```bash
# SOLO EJECUTAR CUANDO SE INDIQUE:
git add .
git commit -m "Mensaje descriptivo"
git push
```

---

## 🎯 **Excepciones Permitidas**

### **✅ Casos donde SÍ se puede hacer push automático:**
1. **Corrección de errores críticos** (sitio broken)
2. **Cliente dice explícitamente**: "sube los cambios" / "haz commit" / "deploy"
3. **Setup inicial** del proyecto (primera vez)

### **❌ Casos donde NO hacer push:**
1. Cambios de diseño o contenido
2. Modificaciones de texto
3. Ajustes de CSS o JavaScript
4. Cualquier cambio no crítico

---

## 📱 **Comandos de Preview Locales**

### **Para probar cambios:**
```bash
# Abrir sitio local
open index.html

# Ver estado de Git (sin commit)
git status
git diff
```

### **Para mostrar cambios:**
- Usar screenshot/captura de pantalla
- Describir cambios verbalmente
- Mostrar diff de código si es necesario

---

## 🎨 **Proceso de Desarrollo Recomendado**

1. **Cliente solicita cambio**
2. **Implementar cambio localmente**
3. **Probar en navegador local**
4. **Mostrar resultado al cliente**
5. **Esperar feedback/aprobación**
6. **SOLO SI CLIENTE APRUEBA:** hacer commit y push

---

## 🚦 **Frases Clave para Push**

### **🟢 Verde (Hacer Push):**
- "Sube los cambios"
- "Haz commit"
- "Deploy esto"
- "Publicalo"
- "Súbelo a GitHub"

### **🟡 Amarillo (Preguntar):**
- "Está bien"
- "Me gusta"
- "Perfecto"
- "Bueno"

### **🔴 Rojo (NO Push):**
- Cualquier otra respuesta
- Feedback sobre cambios
- Solicitud de modificaciones

---

## 📞 **En Caso de Duda**

**SIEMPRE PREGUNTAR:**
> "¿Quieres que suba estos cambios a GitHub Pages?"

**NUNCA ASUMIR** que el cliente quiere los cambios live inmediatamente.

---

## 🛡️ **Esta Regla es OBLIGATORIA**

- 🔒 **Protege el sitio live** de cambios no deseados
- 🎯 **Permite iteración** sin comprometer la versión live
- 👥 **Mejora comunicación** cliente-desarrollador
- ⚡ **Evita rollbacks** innecesarios

---

**📅 Fecha de creación:** Junio 30, 2024  
**🎯 Proyecto:** ADIELA Luxury Website  
**👤 Cliente:** Diego Rebolledo  

**⚠️ RECORDATORIO: Esta regla prevalece sobre cualquier impulso de "mostrar progreso" mediante commits automáticos.** 