# Set the base image for subsequent instructions
FROM php:7.3

# Update packages
RUN apt-get update

RUN apt-get install wget
RUN apt-get install -y gnupg
RUN apt-get install -y synaptic

RUN apt-get update


# Install PHP and composer dependencies
RUN apt-get install -qq git curl libmcrypt-dev libjpeg-dev libpq-dev libpng-dev libfreetype6-dev libzip-dev libbz2-dev



# Clear out the local repository of retrieved package files
RUN apt-get clean

# Install needed extensions
# Here you can install any other extension that you need during the test and deployment process
RUN pecl install mcrypt-1.0.2

# Install Java, Chrome, Xvfb, and unzip
RUN apt-get install -y unzip xvfb libxi6 libgconf-2-4
RUN mkdir -p /usr/share/man/man1
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:linuxuprising/java
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys EA8CACC073C3DB2A
RUN apt update

CMD ["/bin/bash"]

ENV DEBIAN_FRONTEND=noninteractive JAVA_HOME=/usr/lib/jvm/java-11-oracle

RUN VERSION=11.0.2 && BUILD=9 && SIG=f51449fcd52f4d52b93a989c5c56ed3c && apt-get update && apt-get dist-upgrade -y && apt-get install apt-utils ca-certificates curl -y --no-install-recommends && curl --silent --location --retry 3 --cacert /etc/ssl/certs/GeoTrust_Global_CA.pem --header "Cookie: oraclelicense=accept-securebackup-cookie;" https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_linux-x64_bin.tar.gz | tar xz -C /tmp && mkdir -p /usr/lib/jvm && mv /tmp/jdk-11.0.2 "${JAVA_HOME}" && apt-get autoclean && apt-get --purge -y autoremove && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && update-alternatives --install "/usr/bin/java" "java" "${JAVA_HOME}/bin/java" 1 && update-alternatives --install "/usr/bin/javac" "javac" "${JAVA_HOME}/bin/javac" 1 && update-alternatives --set java "${JAVA_HOME}/bin/java" && update-alternatives --set javac "${JAVA_HOME}/bin/javac"
ENV JAVA_TOOL_OPTIONS=-Dfile.encoding=UTF8

RUN curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add
RUN echo "deb [arch=amd64]  http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
RUN apt-get -y update
RUN apt-get -y install google-chrome-stable

RUN wget https://chromedriver.storage.googleapis.com/75.0.3770.90/chromedriver_linux64.zip
RUN unzip chromedriver_linux64.zip

RUN mv chromedriver /usr/bin/chromedriver
RUN chown root:root /usr/bin/chromedriver
RUN chmod +x /usr/bin/chromedriver

RUN apt-get install build-essential chrpath libssl-dev libxft-dev -y
RUN apt-get install libfreetype6 libfreetype6-dev -y
RUN apt-get install libfontconfig1 libfontconfig1-dev -y

ENV PHANTOM_JS="phantomjs-2.1.1-linux-x86_64"
RUN wget https://github.com/Medium/phantomjs/releases/download/v2.1.1/$PHANTOM_JS.tar.bz2
RUN tar xvjf $PHANTOM_JS.tar.bz2
RUN mv $PHANTOM_JS /usr/local/share
RUN ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin
RUN apt-get install -y maven

RUN apt-get install -y openvpn

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update \
  && apt-get install -y curl \
  && apt-get -y autoclean

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 10.15.0

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION \
  && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v

#install composer
RUN curl --silent --show-error https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# Install Laravel Envoy
RUN composer global require "laravel/envoy=~1.0"
