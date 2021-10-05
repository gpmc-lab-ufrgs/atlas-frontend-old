from pyproj import Transformer
import json


# define projections
transformer = Transformer.from_crs(29193, 4326)

#load in data
with open(r'../data/tests/DEINFO_DISTRITO.json', 'r') as f:
    data = json.load(f)

# traverse data in json string
for feature in data['features']:

    # all coordinates
    coords = feature['geometry']['coordinates']

    # coordList is for each individual polygon
    for coordList in coords:

        # each point in list
        for coordPair in coordList:
            print(coordPair)
            x1 = coordPair[0]
            y1 = coordPair[1]
            points = [(x1, y1)]

            # do transformation
            for pt in transformer.itransform(points):
                coordPair[1], coordPair[0] = pt

# write reprojected json to new file
with open('../data/SP-districts-geojson.json', 'w') as f:
    f.write(json.dumps(data))
