#### __"Inspirado"__ en la charla en UIKonf de [Nick Lockwood](https://twitter.com/nicklockwood)

# [fit] React Native _**101**_

### [fit] *[https://github.com/alexissan/ReactNativeWorkshop](https://github.com/alexissan/ReactNativeWorkshop)*

---

### *¿Qué es React Native?*

## Un framework para escribir apps __nativas__

#### *¡Gracias Facebook!*

---

## ¡Desarrollar apps nativas ya es ideal!

---

![fit](http://i1.wp.com/www.universetoday.com/wp-content/uploads/2015/02/7_grumpy.jpg)

---
### Desarrollar apps en 2016

1. Ciclo de desarrollo *lento*
1. Ciclo de release *eterno*
1. Equipos *separados* por plataforma
1. APIs *distintas* para hacer lo mismo

---

# [fit] ¡Usemos WebViews!

---

![fit](http://i1.kym-cdn.com/photos/images/newsfeed/000/530/691/b64.gif)

---

### Webviews en 2016

1. Rendimiento *pobre*
1. Experiencia de usuario *inferior*
1. Funcionalidades nativas *limitadas*

---

### Webviews en 2016

<br />

#### 1. Rendimiento *pobre*
## [fit] 2. Experiencia de usuario *inferior*
#### 3. Funcionalidades nativas *limitadas*

---

# [fit] *React Native*

![](https://facebook.github.io/react/img/logo_og.png)

---

## [fit] *Misma* experiencia de usuario
## [fit] *Mejor* experiencia de desarrollo

---

### React Native en 2016

1. ~~Ciclo de desarrollo lento~~ *Recarga instantánea*
1. ~~Ciclo de release lento~~ *Actualizaciones OTA legales* [!!!](https://developer.apple.com/programs/ios/information/iOS_Program_Information_4_3_15.pdf)
1. ~~Equipos separados por plataforma~~ *Mismas herramientas*
1. ~~APIs distintas para hacer lo mismo~~ *APIs consistentes*

---

# [fit]Write once, run anywhere
## [fit]Escribe una vez, ejecuta en cualquier lado

---

# [fit]~~Write once, run anywhere~~
## [fit]~~Escribe una vez, ejecuta en cualquier lado~~

---

## Diferentes plataformas tienen diferentes experiencias de usuario

---

# [fit] *Learn* once, run anywhere
## [fit] *Aprende* una vez, ejecuta en cualquier lado

---

### React Native en 2016

1. ~~Rendimiento pobre~~ *Árbol de vistas virtual*
1. ~~Experiencia de usuario inferior~~ *Vistas nativas*
1. ~~Funcionalidades nativas limitadas~~ *Fácil de extender*

---

![](http://media0.giphy.com/media/7eAvzJ0SBBzHy/giphy.gif)

---

### Apps en 2016

- Hacer aplicaciones *dinámicas* es complicado
- Pocos estados -> muchas transiciones
- Escalar aplicaciones web *estáticas* es mucho más fácil
- Petición HTTP -> App -> Respuesta HTML

---

# Interfaces con estado mutables

---

# Difícil de:

1. *Entender*
1. *Debuggear*
1. *Mantener*
1. *Reutilizar*
1. *Testear*

![](http://forum.mygolfspy.com/uploads/monthly_02_2015/post-872-0-21232900-1423003837.jpg)

---

### ~~Interfaces con estado mutables~~

## [fit] Vistas *immutables*
## [fit] Funciones de renderizado *puras*
## [fit] Flujo de datos en *un sentido*

---

# Aviso: *Javascript*

![inline](http://www.javascripter.net/faq/slowscript.gif)

---

```javascript

render: function(state) {
  return (
    <View name={state.name} />
  );
}

```

---

- UI *funcional* basado en componentes
- Árbol de vistas *virtual*
- Frontend en *JavaScript* (ES6, npm, TypeScript...)
- Layout con *JSX*
- Estilos inline con *Flexbox* (Next-Gen CSS)
- Backend *nativo* (UIKit, network, storage, location...)

---

### *¿Cómo funciona?*

- Hilo en segundo plano ejecuta nuestro *JavaScript*
- Hilo principal habla con *UIKit, red*, etc
- Comunicación *mínima* entre ellos
- El hilo principal avisa de *eventos*
- JavaScript manda diffs de *cambios en vistas*

---

### *Herramientas*

- Visual Studio Code, Sublime, Atom, ...
- Nuclide
- ESLint

---

## *¿Debería usarlo?*

- Muy *joven*, no es 100% estable/completo
- Comunidad muy *activa*
- Varias apps de Facebook ya en la *AppStore*
- Disponible para *Android*

---

# *DEMO!!*

![fit](http://i.giphy.com/xT8qB2HYA1vVSxooSY.gif)

---

## *Enlaces útiles*

- [Documentación oficial](https://facebook.github.io/react-native/) :star:
- [Componentes de terceros](http://react.parts)
- [React Native Playground](https://rnplay.org/)

---

# *Preguntas*
