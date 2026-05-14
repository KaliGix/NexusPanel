# 📊 NexuxPanel

Un dashboard simple construido con HTML, CSS, JavaScript y Node.js + Express.

Este proyecto entrena:
- Separación de responsabilidades (UI, API, Lógica)
- Múltiples llamadas a API
- Diseño responsive
- Renderizado dinámico de componentes

## 📁 Estructura del Proyecto

```
Dashboard App/

├── Client/                    # Frontend (navegador)
│   ├── index.html             # Página principal
│   ├── Styles/
│   │   └── style.css          # Estilos personalizados
│   └── Scripts/
│       ├── main.js            # Orquestación
│       ├── api.js            # Comunicación HTTP
│       └── ui.js              # Renderizado DOM

├── Server/                    # Backend (Node.js)
│   └── index.js               # Servidor Express

├── package.json               # Dependencias
└── README.md
```

## 🏗️ Separación de Responsabilidades

### **API Layer** (`Client/Scripts/api.js`)
- ✅ Solo hace fetch
- ✅ Retorna datos JSON
- ❌ No toca el DOM
- ❌ No maneja UI

### **UI Layer** (`Client/Scripts/ui.js`)
- ✅ Renderiza HTML
- ✅ Manipula el DOM
- ❌ No hace fetch
- ❌ No contiene lógica de negocio

### **Main Layer** (`Client/Scripts/main.js`)
- ✅ Orquesta la aplicación
- ✅ Llama a API
- ✅ Llama a UI
- ✅ Maneja errores

### **Backend** (`Server/index.js`)
- ✅ Sirve datos JSON
- ✅ Sirve archivos estáticos
- ❌ No tiene lógica del cliente

## 🚀 Cómo ejecutar

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en desarrollo
```bash
npm run dev
```

### 3. Abrir en el navegador
```
http://localhost:3000
```

## 📝 Flujo de datos

```
1. Usuario abre http://localhost:3000
2. main.js → loadDashboard()
3. ui.js → showSpinner()
4. api.js → getDashboard()
5. fetch a http://localhost:3000/api/dashboard
6. Server responde con JSON
7. main.js recibe datos
8. ui.js → rendeCards(datos)
9. Usuario ve el dashboard
```

## 💡 Ventajas de esta estructura

- 🔄 Cada capa es independiente
- 🧪 Fácil de testear
- 🔧 Fácil de mantener
- 📈 Fácil de escalar
- 🔗 Cambios en una capa no rompen las otras

## 🔍 Comprender cada archivo

### `Server/index.js`
- Levanta un servidor Express en puerto 3000
- Define rutas de API que retornan JSON
- Sirve archivos estáticos de `Client/`

### `Client/Scripts/api.js`
- Contiene objeto `API` con método `getDashboard()`
- Hace fetch a `http://localhost:3000/api/dashboard`
- Maneja errores de red

### `Client/Scripts/ui.js`
- Contiene objeto `UI` con métodos para renderizar
- `renderCards()`: dibuja las tarjetas en el DOM
- `showSpinner()`: muestra spinner mientras carga
- `showError()`: muestra mensaje de error

### `Client/Scripts/main.js`
- Orquesta el flujo: API → UI
- Se ejecuta cuando el DOM está listo
- Llama a `API.getDashboard()` y luego a `UI.renderCards()`

## 🎯 Próximos pasos

- [ ] Agregar más endpoints en el servidor
- [ ] Conectar a una base de datos
- [ ] permitir autenticacion de usuario
- [ ] Agregar filtros y búsqueda
- [ ] Agregar gráficos

## 📌 Notas importantes

- **Orden de scripts**: api.js → ui.js → main.js (main.js necesita a los otros dos)
- **Puerto**: El servidor usa puerto 3000 por defecto
- **CORS**: Ya está habilitado para desarrollo local

