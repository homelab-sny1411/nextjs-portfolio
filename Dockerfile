# Étape de build
FROM --platform=linux/arm64 node:20-alpine AS builder

# Installer pnpm globalement
RUN npm install -g pnpm

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances
RUN pnpm install --frozen-lockfile --verbose

# Copier le reste du code
COPY . .

# Construire l'application Next.js
RUN pnpm run build

# Étape de production
FROM --platform=linux/arm64 node:20-alpine AS production

# Installer pnpm globalement
RUN npm install -g pnpm

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires de la phase de build
COPY --from=builder /app /app

# Installer uniquement les dépendances de production
RUN pnpm install --prod --frozen-lockfile --verbose

EXPOSE 3000

# Commande pour lancer l'application
CMD ["pnpm", "start"]