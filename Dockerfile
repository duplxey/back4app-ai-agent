# Step 1: Build the application
FROM node:16 AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build

# Step 2: Set up the production environment and copy the build artifacts
FROM node:16 AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist /app/dist
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --prod

# Step 3: Run the application
EXPOSE 8080
CMD ["pnpm", "start"]