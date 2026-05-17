/**
 * API.js
 * Responsabilidad: Comunicación HTTP con el servidor
 * No toca el DOM, solo hace fetch y retorna datos
 */

const API = {
    BASE_URL: 'http://localhost:3000/api',

    /**
     * Obtiene todos los datos del dashboard
     */
    async getDashboard() {
        try {
            const response = await fetch(`${this.BASE_URL}/dashboard`);
            
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error en getDashboard:', error);
            throw error;
        }
    },

    /**
     * Obtiene un item específico del dashboard
     */
    async getItem(id) {
        try {
            const response = await fetch(`${this.BASE_URL}/dashboard/${id}`);
            
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error en getItem:', error);
            throw error;
        }
    }
};

