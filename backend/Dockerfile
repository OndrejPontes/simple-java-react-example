# Create jar
FROM maven:3.8.4-openjdk-17 AS maven

RUN mkdir -p /build
WORKDIR /build

COPY ./pom.xml ./pom.xml
RUN mvn dependency:go-offline -B

COPY ./src ./src

RUN mvn package 

# Deploy
FROM openjdk:17-alpine

COPY --from=maven /root/.m2 /root/.m2

RUN mkdir /app
WORKDIR /app

# This is a small hack, due to location of twitter.json file
COPY --from=maven /build/* ./target/

ENTRYPOINT ["java","-jar","target/simple-java-react-example-0.0.1-SNAPSHOT.jar", "-Dmaven.test.skip=true"]