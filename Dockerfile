# Build: docker build -t angular-template:latest --build-arg environment=production .
# Run: docker run --name=angular-template -p 80:80 angular-template

# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM ngthuc/angular-base:9 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

ARG environment

RUN ng build --output-hashing=all --output-path=./dist/out --configuration=${environment}

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx

FROM nginx:1.15

COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

# Copy the default nginx.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

