import warnings
warnings.filterwarnings('ignore') # somente para ignorar os warnings
import pandas as pd # ferramenta para ciencia de dados
from tqdm import tqdm # barra de progresso
import psycopg2
from os import listdir

def conecta_db():
    con = psycopg2.connect(host='172.17.0.2', 
                         database='postgres',
                         user='postgres',
                         password = '12345',
                         port = 5432)
    return con

def inserir_db(sql,params):
    con = conecta_db()
    cur = con.cursor()
    cur.execute(sql,params)
    con.commit()
    cur.close()

def criar_tabela_db(sql):
    con = conecta_db()
    cur = con.cursor()
    cur.execute(sql)
    con.commit()
    cur.close()

state_sql = """
CREATE TABLE IF NOT EXISTS public.states
(
    "CD_MUN" character varying COLLATE pg_catalog."default" NOT NULL,
    "NM_MUN" character varying COLLATE pg_catalog."default",
    "SIGLA_UF" character varying COLLATE pg_catalog."default",
    "AREA_KM2" numeric,
    geom geometry,
    CONSTRAINT states_pkey PRIMARY KEY ("CD_MUN")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.states
    OWNER to postgres;
"""

br_uf_sql = """
CREATE TABLE IF NOT EXISTS public.br_uf
(
    "CD_UF" character varying COLLATE pg_catalog."default" NOT NULL,
    "POPULATION" integer,
    "NM_UF" character varying COLLATE pg_catalog."default",
    "SIGLA_UF" character varying COLLATE pg_catalog."default",
    "NM_REGIAO" character varying COLLATE pg_catalog."default",
    geom geometry,
    CONSTRAINT br_uf_pkey PRIMARY KEY ("CD_UF")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.br_uf
    OWNER to postgres;
"""
criar_tabela_db(state_sql)
criar_tabela_db(br_uf_sql)

df = pd.read_json('BR_UF_2020.json')

pbar = tqdm(total = len(df),desc = 'Estados')

for i in df.index:
    cd_uf = df.values[i][1]['properties']['CD_UF']
    population = df.values[i][1]['properties']['POPULATION']
    nm_uf = df.values[i][1]['properties']['NM_UF']
    sigla_uf = df.values[i][1]['properties']['SIGLA_UF']
    nm_regiao = df.values[i][1]['properties']['NM_REGIAO']
    
    sql = """
    INSERT INTO public.br_uf("CD_UF","POPULATION","NM_UF","SIGLA_UF","NM_REGIAO",geom) 
    values(%s,%s,%s,%s,%s,ST_SetSRID(ST_GeomFromGeoJSON(%s), 4326)) 
    ON CONFLICT DO NOTHING;
    """
    params = ([cd_uf,population,nm_uf,sigla_uf,nm_regiao,f"{df['features'][i]['geometry']}"])
    inserir_db(sql,params)
    
    pbar.update(1)

geojson = [file for file in listdir('states') if (file.find('.json') != -1) and (file[:2] != 'CE')]

pbar = tqdm(total = len(geojson),desc = 'Carregando municipios de cada Estado')

for uf in geojson:
    df = pd.read_json('./states/'+ uf)
    
    for i in tqdm(range(len(df.index)),desc = uf[:2]):
        cd_mun = df.values[i][1]['properties']['CD_MUN']
        nm_mun = df.values[i][1]['properties']['NM_MUN']
        sigla_uf = df.values[i][1]['properties']['SIGLA_UF']
        area_km2 = float(df.values[i][1]['properties']['AREA_KM2'])

        params = ([str(cd_mun),nm_mun,sigla_uf,area_km2,f"{df['features'][i]['geometry']}"])
        sql = """
        INSERT INTO public.states("CD_MUN","NM_MUN","SIGLA_UF","AREA_KM2",geom) 
        values(%s,%s,%s,%s,ST_SetSRID(ST_GeomFromGeoJSON(%s), 4326))
        ON CONFLICT DO NOTHING;
        """
        params = ([str(cd_mun),nm_mun,sigla_uf,area_km2,f"{df['features'][i]['geometry']}"])
        inserir_db(sql,params)

    pbar.update(1)