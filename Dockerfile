# Étape de construction (builder)
FROM node:16-alpine AS builder

# Installer pnpm globalement
RUN npm install -g pnpm

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration et installer les dépendances
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copier le reste du code
COPY . .

# Construire l'application Next.js pour la production
RUN pnpm run build

# Étape de production (image finale)
FROM node:16-alpine AS production

# Installer pnpm
RUN npm install -g pnpm

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires à l'exécution
COPY --from=builder /app /app

# Installer uniquement les dépendances de production
RUN pnpm install --prod --frozen-lockfile

# Exposer le port de l'application Next.js
EXPOSE 3000

# Démarrer l'application en mode production
CMD ["pnpm", "start"]
