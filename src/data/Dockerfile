FROM python:3.9.5-slim-buster

WORKDIR /app

COPY . .

RUN apt-get update \
    && apt-get -y install libpq-dev gcc
    
RUN pip3 install -r requirements.txt

CMD ["python3","migrations.py"]

