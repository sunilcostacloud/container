FROM custom_nginx:latest
COPY ./dist/ /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx","-g","daemon off;"]