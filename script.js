document.addEventListener('DOMContentLoaded', function() {
    // Selector de agente
    const selectorAgente = document.createElement('div');
    selectorAgente.innerHTML = `
        <label>Selecciona un departamento:</label>
        <select id="agenteSelector">
            <option value="ventas">Ventas</option>
            <option value="soporte">Soporte</option>
        </select>
    `;
    document.querySelector('cx-webchat').parentElement.insertBefore(selectorAgente, document.querySelector('cx-webchat'));
    document.getElementById('agenteSelector').addEventListener('change', function() {
        var evento = new Event('agente-seleccionado');
        evento.detail= this.value;
        document.querySelector('cx-webchat').dispatchEvent(evento);
    });
});
