# Bitsports challenge

## Librerias/Tecnologías utilizadas

- Next.js
- Typescript
- TailwindCSS
- Eslint
- Prettier
- react-infinite-scroller
- react-query
- jest
- react testing library

## Features extra

- Soporte para dark/light mode
- Test unitarios
- Es responsive, con un approach mobile first y casi que mobile only (tiene max-width para legibilidad)

## Toma de decisiones

Se pedia un infinite scrolling asique decidí utilizar el componente react-infinite-scroller junto con react-query.
Ventajas:

- Cache incluida (out of the box)
- Mejor manejo de errores (tiene posibilidad de setear varios retries)
- Prefetching
- Optimizaciones de performance
- Garbage collection
- Mejor legibilidad
- Scroll infinito de manera muy sencilla

Las demas librerias son "core" del proyecto asique la explicacion es bastante a grandes razgos

- Next: Framework de react que utilizo para construir casi todas las apps que hago, sus ventajas son SSR, que viene acompañado de un mejor SEO, funciona out of the box para muchas cosas como el postcss de tailwindcss y tiene una estructura de carpetas muy ordenada
- Typescript: previene errores de tipado, autocompletado para las props de los componentes errores en build time en vez de al momento de correr la aplicacion
- TailwindCSS: permite una maquetacion muy rapida
- Eslint y prettier: Codigo mas ordenado. En el caso de eslint utilice la configuracion de airbnb
- Jest y react testing library: Permite hacer test unitarios, son las librerias mas utilizadas para este fin.
