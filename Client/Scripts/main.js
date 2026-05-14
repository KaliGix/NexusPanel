/**
 * main.js
 * Responsabilidad: Orquestar la aplicación
 * Coordina entre API y UI
 */

async function loadDashboard() {
    try {
        // Mostrar carga
    
        // Obtener datos del servidor (API layer)
      
        // Renderizar en el DOM (UI layer)
      
        
    } catch (error) {
        UI.showError('No se pudieron cargar los datos. Verifica que el servidor esté corriendo.');
    }
}

/**
 * Inicializar la aplicación cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
    loadDashboard();
});

