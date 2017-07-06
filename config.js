
################ Dummy Generator Mappings ##############################################
[
  {
    'repeat(5, 100)': {
      _id: '{{objectId()}}',
      index: '{{index()}}',
      guid: '{{guid()}}',
      isActive: '{{bool()}}',
      price: '{{floating(1000, 4000, 2, "$0,0.00")}}',
      picture: 'https://m.media-amazon.com/images/G/01/6pm/landing/2017/shoes/April/Fashion_Sneakers._V531399538_.jpg',
      color: '{{random("blue", "brown", "green", "black")}}',
      brand: '{{company().toUpperCase()}}',
      reviews: '{{lorem(1, "paragraphs")}}',
      ratings:'{{random(1,2,3,4,5)}}',
      tags: [
        {
          'repeat(5)': '{{lorem(1, "words")}}'
        }
      ],
      size:'{{random("[6,7,8]","[8,9,10]","[6,7,8,9,10]","[7,8,9]","[9,10]","[6,10]")}}'
      
      
    }
  }
]
####################################################################################################

API URL: https://api.myjson.com/bins/1fhgt3
