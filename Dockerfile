FROM jboss/keycloak:10.0.2

# Set workdir to jboss home
WORKDIR /opt/jboss/

# Set environment variables
ENV DB_VENDOR postgres

# Set Europeana theme
#ENV KEYCLOAK_DEFAULT_THEME europeana

# Note: credentials are used only when initialising a new empty DB
ENV KEYCLOAK_USER: admin

ENV KEYCLOAK_PASSWORD: change-this-into-something-useful

# Copy commons-codec, favre-crypto & -bytes (BCrypt dependencies) to keycloak/modules
COPY bcrypt-dependencies keycloak/modules

# Copy addons to the Wildfly deployment directory
COPY addon-jars keycloak/standalone/deployments

# Copy Europeana theme to keycloak/themes
RUN mkdir -p keycloak/themes/europeana
COPY keycloak-theme keycloak/themes/europeana

# Copy custom delete user REST module
COPY module-jars/delete-user.jar /tmp/delete-user.jar

RUN /opt/jboss/keycloak/bin/jboss-cli.sh --command="module add --name=eu.europeana.keycloak.rest.delete-user --resources=/tmp/delete-user.jar --dependencies=org.keycloak.keycloak-core,org.keycloak.keycloak-server-spi,org.keycloak.keycloak-server-spi-private,javax.ws.rs.api"

RUN sed -i -- 's/classpath:${jboss.home.dir}\/providers\/\*/classpath:${jboss.home.dir}\/providers\/*<\/provider><provider>module:eu.europeana.keycloak.rest.delete-user/g'  /opt/jboss/keycloak/standalone/configuration/standalone-ha.xml

# Copy log formatter script
#COPY custom-scripts/ /opt/jboss/startup-scripts/

# port to open DISABLED FOR USE WITH CF
#EXPOSE 8080

# Entrypoint
USER jboss