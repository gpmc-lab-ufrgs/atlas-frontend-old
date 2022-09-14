# Geospatial Database

This is a tutorial on how to use this project's geospatial database

## Using postgis container

```docker
docker run --name geodatabase --ip 172.17.0.2 -e POSTGRES_PASSWORD=12345 -d postgis/postgis
```
## Compile migrations with container

make sure it's inside the data folder then run


```docker
docker build -t migrations ./
```
```docker
docker run migrations --rm
```

