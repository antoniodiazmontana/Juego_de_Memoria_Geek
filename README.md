# Juego de Memoria: Anime y Videojuegos

Este es un juego interactivo de memoria basado en personajes populares de anime y videojuegos. El objetivo del juego es encontrar todas las parejas de cartas en el menor tiempo posible y con la menor cantidad de intentos.

## Características
- **Temática**: Imágenes de personajes icónicos de anime y videojuegos.
- **Interactividad**: Voltea las cartas para encontrar las parejas.
- **Seguimiento**: Visualiza tus intentos y el tiempo transcurrido.
- **Rejugabilidad**: Las cartas se mezclan aleatoriamente en cada partida.

## Tecnologías Utilizadas
- **HTML**: Estructura del juego.
- **CSS**: Estilizado del tablero y las cartas.
- **JavaScript**: Lógica del juego, incluyendo el temporizador, la verificación de parejas y la mezcla de cartas.

## Cómo Jugar
1. Haz clic en el botón "Iniciar Juego" para comenzar.
2. Se mostrará un tablero con cartas volteadas hacia abajo.
3. Haz clic en dos cartas para voltearlas.
4. Si las cartas coinciden, permanecen volteadas. Si no coinciden, se voltean nuevamente después de un breve momento.
5. Encuentra todas las parejas para ganar el juego.
6. Tu rendimiento se mide por el número de intentos y el tiempo que tomas para completar el juego.

## Instalación y Uso
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/Juego_de_Memoria_Geek.git
   ```
2. Abre el archivo `index.html` en tu navegador preferido.
3. ¡Empieza a jugar!

## Personalización
Puedes agregar tus propias imágenes al juego:
1. Coloca las nuevas imágenes en la carpeta `./src/img/`.
2. Agrega las rutas de las imágenes en el array `cardImages` dentro del archivo `main.js`:
   ```javascript
   let cardImages = [
     "./src/img/tuImagen1.jpg",
     "./src/img/tuImagen2.jpg",
     // más imágenes...
   ];
   ```
3. Asegúrate de que haya un número par de imágenes para crear pares.

## Contribuciones
¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el juego, no dudes en abrir un issue o enviar un pull request.

## Futuras Mejoras
- Agregar niveles de dificultad con diferentes tamaños de tablero.
- Incluir efectos de sonido y animaciones.
- Implementar un sistema de puntuación.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más información.

