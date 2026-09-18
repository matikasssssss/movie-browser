## Enunciado

Crea una aplicación para buscar películas

API a usar: - https://www.omdbapi.com/
API-KEY: 2fa0b8e7
http://www.omdbapi.com/?apikey=2fa0b8e7&
Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas.

⏳ Haz que la búsqueda se haga automáticamente al escribir.

⏳ Evita que se haga la búsqueda continuamente al escribir (debounce)

## Estado actual

### Lo implementado hasta ahora

- **Estructura del proyecto** montada con Vite + React:
  - `src/components/Movies.jsx`: renderiza el grid de películas (título, año y poster) y maneja el caso de "No movies found".
  - `src/hooks/useMovies.jsx`: hook que hace el fetch contra la OMDB API (`https://www.omdbapi.com/?apikey=2fa0b8e7&s=<query>`), mapea los resultados a la forma `{ title, year, id, poster }` y evita repetir la misma búsqueda dos veces seguidas (usa un `useRef` con la búsqueda anterior).
  - `src/hooks/useSearch.jsx`: hook que mantiene el valor del input y valida la búsqueda (no vacía, que no sea un número, mínimo 3 caracteres), mostrando el error correspondiente.
  - `src/mocks/`: mocks locales (`with-results.json` y `no-results.json`) que ya no se usan para el fetch.
- **Formulario de búsqueda** (`App.jsx`): input controlado + botón "Search". El `handleSubmit` dispara `getMovies()` y muestra los errores de validación en pantalla.
- **Fetch a la API** conectado y funcional, con estilos CSS aplicados al grid de resultados.

### Pendiente / siguiente paso

- Implementar la búsqueda automática al escribir.
- Implementar el debounce para evitar búsquedas continuas mientras se escribe.
- Manejar el caso de `Response: false` devuelto por la API (cuando no hay resultados, actualmente solo "No movies found" con el mock o el listado vacío).

## Scripts

```bash
npm run dev      # entorno de desarrollo
npm run build    # build de producción
npm run lint     # eslint
npm run preview  # sirve el build localmente
```