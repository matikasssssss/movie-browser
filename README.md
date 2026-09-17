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

✅ Haz que la búsqueda se haga automáticamente al escribir.

✅ Evita que se haga la búsqueda continuamente al escribir (debounce)

## Estado actual

### Lo implementado hasta ahora

- **Estructura del proyecto** montada con Vite + React:
  - `src/components/Movies.jsx`: renderiza el grid de películas (título, año y poster) y maneja el caso de "No movies found".
  - `src/hooks/useMovies.jsx`: hook que lee las películas del mock `mocks/with-results.json`, las mapea a la forma `{ title, year, id, poster }` y las devuelve.
  - `src/mocks/`: mocks locales (`with-results.json` y `no-results.json`) para trabajar sin depender de la API todavía.
- **Formulario de búsqueda** (`App.jsx`): input controlado + botón "Search". El `handleSubmit` aún solo loguea la búsqueda, no conecta con la API.
- **Grid responsive** de películas funcional con los datos del mock.

### Pendiente / siguiente paso

- Hacer el fetch real contra la OMDB API (`https://www.omdbapi.com/?apikey=2fa0b8e7&s=<query>`).
- Conectar `handleSubmit` a la búsqueda y manejar errores / sin resultados.
- Implementar la primera iteración: evitar búsquedas duplicadas, búsqueda automática al escribir y debounce.

## Scripts

```bash
npm run dev      # entorno de desarrollo
npm run build    # build de producción
npm run lint     # eslint
npm run preview  # sirve el build localmente
```