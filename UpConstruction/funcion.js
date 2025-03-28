document.getElementById('addRoom').addEventListener('click', function() {
    const container = document.getElementById('roomsContainer');
    const roomDiv = document.createElement('div');
    roomDiv.classList.add('room');

    const roomLabel = document.createElement('label');
    roomLabel.textContent = 'Espacio (cocina, alcoba, baño, etc.):';
    roomLabel.setAttribute('class', 'roomLabel')

    const roomName = document.createElement('input');
    roomName.setAttribute('type', 'text');
    roomName.setAttribute('placeholder', 'Nombre del espacio');
    roomName.setAttribute('class', 'input3');
    roomName.required = true;
    

    const lengthLabel = document.createElement('label');
    lengthLabel.textContent = '  = Fondo (metros):';

    const roomLength = document.createElement('input');
    roomLength.setAttribute('type', 'number');
    roomLength.setAttribute('placeholder', 'Fondo del espacio');
    roomLength.setAttribute('step', '0.01');
    roomLength.setAttribute('class', 'input3');
    roomLength.required = true;

    const widthLabel = document.createElement('label');
    widthLabel.textContent = '   = Ancho (metros):';

    const roomWidth = document.createElement('input');
    roomWidth.setAttribute('type', 'number');
    roomWidth.setAttribute('placeholder', 'Ancho del espacio');
    roomWidth.setAttribute('step', '0.01');
    roomWidth.setAttribute('class', 'input3');
    roomWidth.required = true;

    

    roomDiv.appendChild(roomLabel);
    roomDiv.appendChild(roomName);    
    roomDiv.appendChild(roomLength);
    roomDiv.appendChild(lengthLabel);    
    roomDiv.appendChild(roomWidth);
    roomDiv.appendChild(widthLabel);
    container.appendChild(roomDiv);
}); 

document.getElementById('houseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const height = document.getElementById('height').value;
    const rooms = document.querySelectorAll('.room');
    let totalArea = 0;

    rooms.forEach(room => {
        const length = room.querySelector('input[placeholder="Fondo del espacio"]').value;
        const width = room.querySelector('input[placeholder="Ancho del espacio"]').value;
        totalArea += -1*2*(-length - width);
    });

    const volume = totalArea * height;
    document.getElementById('result').textContent = `Área total: ${volume.toFixed(2)} m²`;
});

// Capturar y guardar pantalla
document.getElementById('captureButton').addEventListener('click', function() {
    const resultSection = document.querySelector('.container');

    html2canvas(resultSection).then(function(canvas) {
        // Crear un enlace para descargar la imagen
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'captura_resultado.png';
        link.click();
    });
});