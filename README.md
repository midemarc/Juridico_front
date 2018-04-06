Steps to run the project in development mode:
- `npm i --ignore-scripts` (makes default choices, including for ngSemanticUI)
- `npm start`

The interface is available on port 4200. However, it needs access to the backend at the adress referenced by `api_endpoint` in `src/environments/environment.ts`.

In production, we use `Docker`.
The steps are :
- `docker build -t juridico_front .` to build a container tagged as `juridico_front:latest`.
This container is then used by `docker-compose` in parent directory.