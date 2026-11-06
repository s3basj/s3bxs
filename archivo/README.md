# Portadas anteriores

Copias de versiones anteriores de la portada, para poder volver a ellas.
Esta carpeta está excluida de la compilación (`tsconfig.json`) y del linter.

- `portada-original/`: la primera portada, con la foto (`public/img/one.png`) y fondo claro.
- `portada-semaforo/`: la versión nocturna con el semáforo vectorial.
- `portada-comic/`: la versión de tres pantallas con el semáforo estilo cómic/tinta.

## Cómo restaurar una

Copia sus archivos sobre `src/app/` (para `portada-semaforo` y `portada-comic`, también la
carpeta `components/` a `src/app/components/`). Por ejemplo:

```bash
cp archivo/portada-original/*.tsx archivo/portada-original/globals.css src/app/
```
