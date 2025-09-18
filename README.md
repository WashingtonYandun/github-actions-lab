# GitHub Actions Lab 🚀

Un repositorio de práctica completo para aprender GitHub Actions con ejemplos prácticos y desafíos progresivos.

## 📋 Estructura del Laboratorio

Este laboratorio contiene 7 workflows diferentes que cubren desde conceptos básicos hasta técnicas avanzadas de CI/CD:

### 🔄 Reto 1: CI Básico (`01-ci.yml`)
**Conceptos:** Triggers básicos, checkout, setup de entornos, ejecución de código

- **Disparadores:** Push a `main`/`develop`, Pull Requests a `main`
- **Tecnologías:** Python 3.9, Node.js 18
- **Funciones:**
  - Configuración de múltiples entornos de desarrollo
  - Ejecución de scripts Python y JavaScript
  - Validación básica de HTML

**Archivos involucrados:**
- `src/hello.py` - Script Python con funciones básicas y tests
- `src/app.js` - Aplicación Node.js con información del sistema
- `src/index.html` - Página web responsiva del laboratorio

### 📦 Reto 2: Cache y Artefactos (`02-cache-artifacts.yml`)
**Conceptos:** Optimización de builds, almacenamiento de artefactos, cache de dependencias

- **Funciones:**
  - Cache de node_modules para acelerar builds
  - Generación y almacenamiento de artefactos de build
  - Almacenamiento de resultados de tests con diferentes tiempos de retención
  - Instalación automática de dependencias

**Salidas:**
- Artefactos de build (5 días de retención)
- Resultados de tests (30 días de retención)

### 🌍 Reto 3: Despliegue (`03-deploy.yml`)
**Conceptos:** Ambientes de despliegue, variables de entorno, workflow_dispatch

- **Ambientes:** Staging (por defecto), Production
- **Funciones:**
  - Selección manual de ambiente de despliegue
  - Variables de entorno dinámicas según el ambiente
  - Validación de salud post-despliegue
  - Configuración diferenciada por ambiente

**Variables por ambiente:**
- **Staging:** `api.staging.example.com`, `staging-db.example.com`
- **Production:** `api.prod.example.com`, `prod-db.example.com`

### 🔧 Reto 4: Workflow Reutilizable (`04-reusable.yml`)
**Conceptos:** Workflows reutilizables, inputs/outputs, modularización

- **Inputs:**
  - `environment` (requerido): Ambiente de destino
  - `node-version` (opcional): Versión de Node.js (default: '18')
  - `python-version` (opcional): Versión de Python (default: '3.9')

- **Outputs:**
  - `build-status`: Estado del resultado del build

**Beneficios:**
- Reutilización de lógica común
- Mantenimiento centralizado
- Configuración flexible

### ⚡ Reto 5: Acciones Personalizadas (`05-custom-action.yml`)
**Conceptos:** Uso de workflows reutilizables, acciones personalizadas locales, actions de terceros

- **Funciones:**
  - Consume el workflow reutilizable del Reto 4
  - Ejecuta acción personalizada local con parámetros
  - Utiliza `actions/github-script` para JavaScript personalizado
  - Muestra integración entre diferentes tipos de acciones

**Acción personalizada incluida:**
- Ubicación: `src/custom-action/`
- Función: Saludo personalizado con colores y timestamps
- Inputs: greeting, name, color
- Outputs: message, timestamp

### 🚀 Reto 6: Pipeline Avanzado (`06-advanced-pipeline.yml`)
**Conceptos:** Matrix builds, jobs condicionales, paralelización, scheduling

- **Matrix Build:**
  - SO: Ubuntu, macOS, Windows
  - Node.js: 16, 18, 20
  - Python: 3.8, 3.9, 3.10
  - Total: 27 combinaciones diferentes

- **Jobs Paralelos:**
  - Despliegue simultáneo de API, Frontend y Database
  - Ejecución condicional basada en tipo de evento
  - Job final que consolida todos los resultados

- **Scheduling:**
  - Ejecución automática cada lunes a las 2 AM UTC
  - Manejo de diferentes tipos de eventos

### 🛡️ Reto 7: Seguridad e Infraestructura (`07-security-infra.yml`)
**Conceptos:** Seguridad, escaneo de vulnerabilidades, calidad de código, validación de infraestructura

- **Escaneo de Seguridad:**
  - Trivy para análisis de vulnerabilidades
  - Bandit para seguridad en Python
  - Detección de secretos expuestos

- **Calidad de Código:**
  - PyLint para análisis estático
  - Black e isort para formateo
  - Validación de sintaxis YAML

- **Validación de Infraestructura:**
  - Verificación de sintaxis de workflows
  - Auditoría de uso de recursos
  - Permisos de seguridad apropiados

## 🏗️ Archivos de Código Fuente

### `src/hello.py`
Script Python completo con:
- Funciones de saludo personalizables
- Información del sistema
- Tests básicos integrados
- Manejo de errores y assertions

### `src/app.js`
Aplicación Node.js que incluye:
- Funciones modulares exportables
- Información detallada del sistema
- Generación de artefactos JSON
- Manejo de directorios y archivos

### `src/index.html`
Página web responsiva con:
- Interfaz moderna y atractiva
- Información sobre el laboratorio
- JavaScript interactivo
- Diseño responsive con CSS Grid

### `src/custom-action/`
Acción personalizada completa:
- `action.yml`: Definición de la acción con inputs/outputs
- `index.js`: Lógica principal con colores y summaries
- `package.json`: Dependencias de la acción

## 🚀 Cómo Usar Este Laboratorio

### 1. Fork del Repositorio
```bash
# Clonar tu fork
git clone https://github.com/TU-USUARIO/github-actions-lab.git
cd github-actions-lab
```

### 2. Ejecutar Workflows
Los workflows se ejecutan automáticamente según sus triggers:
- **Push a main:** Activa workflows 1, 2, 3, 5, 6, 7
- **Pull Request:** Activa workflows 1, 6, 7
- **Manual:** Workflows 2, 3, 7 se pueden ejecutar manualmente
- **Programado:** Workflow 6 se ejecuta semanalmente

### 3. Experimentar con Modificaciones
```python
# Modificar src/hello.py para ver CI en acción
def greet(name="Desarrollador"):
    return f"¡Hola, {name}! Bienvenido a GitHub Actions"
```

```javascript
// Modificar src/app.js para probar builds
function greet(name = 'Desarrollador') {
    return `¡Hola, ${name}! GitHub Actions funciona perfectamente`;
}
```

### 4. Monitorear Ejecuciones
- Ve a la pestaña **Actions** en GitHub
- Observa los workflows en ejecución
- Revisa logs detallados y artefactos generados
- Experimenta con diferentes triggers

## 📚 recursos de Aprendizaje

### Documentación Oficial
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Custom Actions](https://docs.github.com/en/actions/creating-actions)

### Conceptos Clave Cubiertos
- ✅ Triggers y eventos
- ✅ Jobs y steps
- ✅ Runners y matrices
- ✅ Secrets y variables de entorno
- ✅ Artefactos y cache
- ✅ Workflows reutilizables
- ✅ Acciones personalizadas
- ✅ Seguridad y best practices
- ✅ Despliegue continuo
- ✅ Monitoreo y debugging

## 🔍 Troubleshooting

### Problemas Comunes

**Error en Python:**
```bash
# Verificar versión
python --version
# Instalar dependencias si es necesario
pip install pytest bandit pylint black isort
```

**Error en Node.js:**
```bash
# Verificar versión
node --version
npm --version
# Limpiar cache si es necesario
npm cache clean --force
```

**Problemas de permisos:**
- Verificar que el token tiene permisos de lectura/escritura
- Revisar configuración de branches protegidas

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

⚡ **¡Disfruta aprendiendo GitHub Actions!** ⚡

Para preguntas o sugerencias, abre un issue en este repositorio.
