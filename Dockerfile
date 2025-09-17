# Étape 1 : Construction
FROM node:20-alpine AS builder

# Variables d'environnement pour PNPM
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

# Installer PNPM + créer répertoire de cache
RUN mkdir -p /pnpm && npm install -g pnpm

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers de dépendances
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances avec gel du lockfile
RUN pnpm install --frozen-lockfile

# Copier tout le code source
COPY . .

# Build de l'application Next.js
RUN pnpm build

# Supprimer les dépendances inutiles pour prod
RUN pnpm prune --prod

# Étape 2 : Image finale allégée pour production
FROM node:20-alpine AS production

# Variables d'environnement pour PNPM
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

# Installer PNPM
RUN mkdir -p /pnpm && npm install -g pnpm

# Répertoire de travail
WORKDIR /app

# Copier uniquement ce qui est nécessaire au runtime
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

EXPOSE 3000

# Commande pour lancer l'application
CMD ["pnpm", "start"]