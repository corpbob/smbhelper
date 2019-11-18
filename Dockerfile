FROM centos:latest
RUN yum install -y openssh-clients
RUN curl -LO https://rpm.nodesource.com/setup_13.x && bash setup_13.x 
RUN yum install -y nodejs
RUN mkdir /tmp/src
COPY . /tmp/src/
WORKDIR /tmp/src
RUN npm install
RUN adduser node && chown -R node.node /tmp/src && chmod a+rwx /tmp/src
USER 1000
EXPOSE 3000
ENTRYPOINT npm start
