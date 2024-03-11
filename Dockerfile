ARG NODE_VERSION=21.5.0

FROM node:${NODE_VERSION}-alpine as base
ARG PORT=3000
ENV NODE_ENV=production
WORKDIR /app

# Build
FROM base as build
ARG DATABASE_URL
ARG NUXT_BASE_URL
COPY prisma ./
COPY package.json npm-lock.yaml\* ./
RUN yarn global add npm && npm i --prod=false
COPY . .
RUN npm run db:deploy && npm run build

# Run
FROM base
ENV PORT=$PORT
COPY --from=build /app/.output /app/.output
RUN mkdir -p /app/public/uploads
CMD [ "node", ".output/server/index.mjs" ]