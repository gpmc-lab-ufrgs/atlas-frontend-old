import csv
import json

IDH = []
districts = []

# 227 IDH
# 230 IDH renda
# 232 Distrito

with open('../data/sp_data.csv', 'r', encoding="iso-8859-1", errors='ignore') as file:
    reader = csv.reader(file)
    for row in reader:
        if row[232] not in districts and row[232] != 'DISTRITO':
            districts.append(row[232])
        if row[234] == 'Sé' and row[8] == '2000':
            IDH.append(row[227])

    medium = 0
    for idh in IDH:
        if idh != '':
            medium += float(idh)

    print("IDH de Sé -> ", medium/len(IDH))
    print(IDH)
    print("\n\n")
    print("Quantidade de distrito -> ", len(districts))
    print(districts)
