#
# Ubuntu Dockerfile
#
# https://github.com/dockerfile/ubuntu
#

# Pull base image.
FROM ubuntu:14.04

# make sure apt is up to date
RUN apt-get update

# install nodejs and npm
RUN apt-get install -y nodejs npm git git-core
RUN npm install -g gulp
RUN ln -s /usr/bin/nodejs /usr/bin/node

ADD start.sh /tmp/

RUN chmod +x /tmp/start.sh

CMD ["sh","/tmp/start.sh"]