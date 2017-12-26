# ExtJS 6 Spring Boot Example

This is a simple example of how a spring boot restful web service together with a ExtJS 6 frontend demo.

# Prerequisites

Download ExtJS 6
Install Sencha cmd 6
Install JDK 8
Install maven 3

# Install Ext JS

```
cd client
sencha app install=/path/to/extjs/
sencha app build
```

# Start web service

```
cd springextjsproject
mvn package 
java -jar target/demo-$version.jar
```
Open browser: http://localhost:8080/

# Development

Open command prompt

```
mvn spring-boot:run 
```

Open another command prompt

```
cd client
sencha app watch
```

Open browser: http://localhost:1841/

