FROM nginx:alpine

COPY index.html caelum-website-preview.html /usr/share/nginx/html/

EXPOSE 8080

RUN sed -i 's/listen\s*80;/listen 8080;/' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
