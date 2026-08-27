FROM node:20-alpine

ARG NEXT_PUBLIC_API_URL=http://localhost:3001
ENV NODE_ENV=production \
    NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL} \
    DATABASE_URL=postgresql://postgres:build-only@localhost:5432/volunteer_platform

WORKDIR /app
RUN corepack enable

COPY package.json pnpm-workspace.yaml turbo.json ./
COPY apps ./apps
COPY packages ./packages

RUN pnpm install --no-frozen-lockfile \
    && pnpm db:generate \
    && pnpm build

EXPOSE 3000
CMD ["pnpm", "--filter", "@volunteer/web", "start"]
