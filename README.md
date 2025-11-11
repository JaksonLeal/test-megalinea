# Megalínea Test

Esta es una **prueba tecnica** para el puesto de **desarrollador full stack**.  
El proyecto está desarrollado con **Spring Boot**, **H2** (Backend) y **Angular 18** con **Angular Material** (Frontend), siguiendo los principios SOLID y buenas practicas de desarrollo.

---

## Tecnologias usadas

### 🔹 Backend
- **Java 21**
- **Spring Boot 3**
- **H2 Database**
- **Maven**

### 🔹 Frontend
- **Angular 18**
- **Angular Material**
---

## Arquitectura del proyecto

### 🔹 Backend
- **Controller > Service > Repository**

### 🔹 Frontend
- **Components > Service**


---

## Cracteristicas Implementadas

| Feature | Description |
|----------|-------------|
| **Creacion de solicitudes** | Los usuarios *requesters* pueden crear nuevas solicitudes. |
| **Aprovacion** | Los usuarios *approvers* pueden aprobar o rechazar solicitudes. |
| **Notificaciones** | Un menú desplegable muestran las solicitudes pendientes para cada aprobador. |
| **H2 DB** | Base de datos simulada con inicialización automática mediante `data.sql`. |
| **Clean Code + SOLID** | Separación de responsabilidades. |

---
## Ejemplo de roles de usuario

| Rol | Ejemplo | Permisos |
|------|----------|----------|
| **Requester** | `jleal`, `mrojas` | Crear solicitudes |
| **Approver** | `amartinez`, `pnavarro` | Aprobar / rechazar solicitudes |
---

## REST API Endpoints

| Metodo | Endpoint | Descripcion |
|--------|-----------|-------------|
| `GET` | `/api/requests` | Devuelve todas la Solicitudes. |
| `POST` | `/api/requests` | Crea nuevas solicitudes. |
| `PUT` | `/api/requests/{id}/approve?comment=` | Aprueba o rechaza una solicitud. |
| `GET` | `/api/requests/pending/{approver}` |Devuelve solicitudes pendientes de un aprovador especifico |

---

## Como correr el proyecto

### Backend
1. Abrir la carpeta `back-megalinea` in **Spring Tool Suite (STS)**.
2. Ejecutar el proyecto:
   ```bash
   mvn spring-boot:run

### Frontend
1. Abrir la carpeta `front-megalinea` in **VS Code**.
2. Instalar dependencias con la terminal:
   ```bash
   npm install
3. Ejecutar la aplicacion
   ```bash
   ng serve
4. Abrir en el buscador:
   ```bash
   http://localhost:4200


## 💡 Mejoras futuras
- Autenticación con Spring Security y JWT  
- Notificaciones en tiempo real (WebSocket o JavaMail)  
- Persistencia con PostgreSQL  
- Despliegue con Docker  

---

