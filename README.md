# Mi Proyecto 🚀

Aplicación web desarrollada con **React + Vite** que implementa una arquitectura modular basada en **features** para mantener el código escalable, mantenible y organizado.

## 📦 Tecnologías utilizadas

* React
* Vite
* JavaScript (JSX)
* Material UI
* CSS / estilos personalizados
* ESLint

---

# 📁 Estructura del proyecto

El proyecto sigue una **arquitectura modular por features**, donde cada funcionalidad está agrupada en su propio módulo.

```
src/
│
├── features/
│   ├── articles/
│   │   ├── components/
│   │   │   ├── Articles.jsx
│   │   │   └── Offers.jsx
│   │   └── hooks/
│   │       ├── UseCallback.jsx
│   │       ├── UseColor.jsx
│   │       ├── UseContext.jsx
│   │       ├── UseOnline.jsx
│   │       ├── UseRef.jsx
│   │       └── UseTemporizador.jsx
│   │
│   ├── auth/
│   │   └── pages/
│   │
│   ├── components/
│   │   ├── Myaccount.jsx
│   │   ├── Mybuys.jsx
│   │   ├── Mycart.jsx
│   │   └── Myfavorites.jsx
│
├── layout/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Content.jsx
│
├── shared/
│   ├── components/
│   └── styles/
│
├── App.jsx
├── main.jsx
└── Routes.jsx
```

---

# 🧠 Arquitectura

El proyecto utiliza **Feature-Based Architecture**, donde cada funcionalidad está separada en módulos independientes.

### features/

Contiene las funcionalidades principales de la aplicación.

Ejemplo:

* **articles** → lógica y componentes relacionados con artículos.
* **auth** → autenticación de usuarios.

### layout/

Contiene la estructura visual global de la aplicación.

* `Header`
* `Footer`
* `Content`

### shared/

Componentes y estilos reutilizables en toda la aplicación.

---

# ⚙️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
```

Entra al proyecto:

```bash
cd mi-proyecto
```

Instala dependencias:

```bash
npm install
```

---

# ▶️ Ejecutar el proyecto

```bash
npm run dev
```

La aplicación se ejecutará en:

```
http://localhost:5173
```

---

# 🏗 Build de producción

```bash
npm run build
```

---

# 🧩 Funcionalidades

* Listado de artículos
* Búsqueda de artículos
* Sistema de favoritos
* Componentes reutilizables
* Hooks personalizados
* Estructura escalable por módulos

---

# 📌 Buenas prácticas implementadas

* Separación por **features**
* Uso de **custom hooks**
* Componentes reutilizables
* Organización clara del código
* Arquitectura escalable

---

# 👨‍💻 Autor

Desarrollado por **Juan Mazo**
