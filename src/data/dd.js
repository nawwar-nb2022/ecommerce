const products = [
      {
        id : 0,
        "name": "Lip Stain",
        "price": 25,
        "brand": "Sephora",
        "category": "Accessories",
        "rating": 4.5,
        "image": "https://www.byrdie.com/thmb/nrqPrV0W2ofRq_IQEMyG5zi5XHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/15-best-lip-stains-of-2023-tout-0c519edcded14af5bdabc610fabf8574.jpg"
      },
      {
        id : 1,
        "name": "Bottle",
        "price": 20,
        "brand": "Uncommon Goods",
        "category": "Accessories",
        "rating": 4,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8U9X21na_5L-924nQGMaJCLX5QvOx3IEv1VVfhFXSQ&s"
      },
      {
        id : 2,
        "name": "Figurine",
        "price": 40,
        "brand": "The Mouse Market",
        "category": "other",
        "rating": 4.5,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLcEApXV6GawTrvTWXh219qBSl8Xs0u92WfCDkZI&s"
      },
      {
        id : 3,
        "name": "Book",
        "price": 10,
        "brand": "Penguin",
        "category": "Books",
        "rating": 4,
        "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
     {
      id : 5,
        "name": "Flower",
        "price": 15,
        "brand": "The Bouqs Co.",
        "category": "other",
        "rating": 4,
        "image": "https://images.unsplash.com/photo-1505129013025-ecf8f0168373?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        id : 6,
        "name": "Pen",
        "price": 5,
        "brand": "Poppin",
        "category": "other",
        "rating": 4.6,
        "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        id : 7,
        "name": "Cake",
        "price": 20,
        "brand": "Bakerdays",
        "category": "Food",
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1512058454905-6b841e7ad132?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },     
      {
        id: 8,
        "name": "Candle",
        "price": 10,
        "brand": "Yankee Candle",
        "category": "other",
        "rating": 3.5,
        "image": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        id : 9,
        "name": "Notebook",
        "price": 7,
        "brand": "Moleskine",
        "category": "Supplies",
        "rating": 4.5,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4PDQ0PDQ8PDg8NDQ8NDw0PDQ8ODQ8NFREXFhURFRUYHCkgGBomHhUVIj0kJSk3Li86FyAzODMsOCgtLisBCgoKDg0OGhAQFS0dHSUtLS0tLS0tLS0tLS0tLS0tLS0rLS43LS0tLS0tLSs3LS0rLTcrLSsrLTctLTc3KysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABwgBBAUGAwL/xABKEAABAwIDAwUNBQQIBwEAAAABAAIDBBEFEiEGEzEHFCJBURc1VFVhcXWBkZSz0dIVIzJ0tEKSk9MWM0VSU7HB8DRig6GipMIl/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAYEQEBAQEBAAAAAAAAAAAAAAAAATFBIf/aAAwDAQACEQMRAD8AnFERAXzkmY38Tmt87gFmSVrRdzg0cLk21UEcpFBRS7UF+JSRspOaRFwM7I5HODDYWvnt5h2IJ053F/iR/vt+awa2H/Fj/iN+apxibKbfy81BMGYGPOOlawuO2wNwL62AutXIOwexBc818H+NF/FZ81+TilMONRAP+tH81TLIOwexMg7B7EFzPtal8Jg/jx/NY+16Twmn/jx/NU0yDsHsTIOwexBcv7YpPCaf+PH81j7Zo/Cqb3iL5qmuQdg9iZB2D2BBcn7bo/Cqb3iL5rBxyiHGrpveYvmqb5B2D2JkHYPYguMcfoPDKT3qH5r8naTDvDqP3uH6lTvIOwexMg7B7EFwTtRhg44hRDz1kH1L8Ha3CgLnEqADt59T/Uqg5R2D2JYILd/0zwfxph3v9N9Sf0zwfxph3v8ATfUqiWWUFujtpg/jTD/f6b6l+f6bYN40w/32D6lUdEFtjtzg3jOh97h+a/J29wUf2nReqpjP+qqWiC2kO3mDPexjMRpXPe5rGtEoJc4mwA9a9GqcbO/8fQ/nab4zVcdAREQEREBERBp4m6IMBlj3jcw4tBDT/eJP4fOoO23rKWLadkscD65/NogyniyTx5srhe5JuQLm1tFO1W6QMvE0OdcaHs67agE+chQjt3VVh2oibRwRMq3UUdpKkkWZ08193IWgWHZdS4s1E2JPc6eZzozE50ry6ItLXMdfUEHgf96LXW5jTZhVTioIMof0y38B0GXLpwy5bLViflexxaHBrmuLD+FwBuWnyHgqj7Ggn+6G4mvOQIRuZPvieAj06fEcO1K7D6iny85gmp898m+hkhzWtfLmAva44doUr7ccq9DV0UEVFSyb1sjZPv2MZHT2a5pDS0kuNnEaWFj6l4fCNt6mljkjZHE9rxTDK+5b9zAyHUftXbG0+Q6hB5hgLg4tBcGDM4gEhrcwbc9gu4D1jtRekxfa6SppnwbrIJAxr3molldI1r2vD5AbB8t42DeHWwsvNoCIiDCysIgIiICIiAiFEBERAREQdHZzvhQfnaX4zVcZU52bH/6FB+epfjNVxkBERAREQEREHwrWF0ZDZN0eOe1x67EG3mIPlUKcodJVSY/TsdWmmp3UsRdUwybluYF+gDnm5Og4kaqaMS3W6eZzaMWLnZnMLddDmbq3XruoK5UWYcMfppa2UyU4oobwkzTSEZ5bEvF+je2ma+h9YmoyxWJrKiZjJd+1sjrTXuXk6kk9ZvcEjQ20WqtjEXQunlNM0thLvu2u4hv+YF72BNwLala6AiIgIiICIiAiIgLCIgIiICIiAiIgIiIOls13ww/89S/GariqnWzPfHD/AM9S/HarioCIiAiIgIiIPlUyOawljDI4cGBwaT6yoO5Ra1se0lE+GhknquaRZYMwjY4l82uUx6uAzHNe2nkU41DXljhG4NeRo4tzAepQtyhtxF20VEynEMcvNIzzt0QlDRnluHSFgLQQD0R28dUuLNRLjkr31c7pItw90hLorWym3X2k8b9d79a0V0do4521k7amRsswcM72m7fwgtAH7NhYZeq1lzkQREQEREBERAREQEREGEWVhAREQEREBERB09me+OH/AJ+k+OxXEVO9l++WHfn6T47FcRAREQEREBERB8axrDG8SOyNI1dmyW9ahHlRoYzjWHtqK58FHzZhc8zRQSsO8ksWMaG2ucozlvr00m+qcBG8uYZAGm7GtzucOwN6/MoL5T34dHjeGySU8jmCnaH0TKMBj7ySAZgXA3BIOUNN7cdU4TUX41FCyqmbTSuniD+jK6xLiRd2v7QvcZuvjZaS3sbmhkqp3U8XN4i+zYrEFthYkj9kkgm3AXstFAREQEREBERAREQEREBYWVhAREQEREBERB1Nle+eG+kKT47FcNU92T754b6Qo/jsVwkBERAREQEREHznz5XbvLnt0c9w2/ltqoX5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"
      },
      {
        id : 10,
        "name": "Chocolate",
        "price": 5,
        "brand": "Lindt",
        "category": "Food",
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        id : 11,
        "name": "Doll",
        "price": 20,
        "brand": "Barbie",
        "category": "other",
        "rating": 3,
        "image": "https://images.unsplash.com/photo-1526505262320-81542978f63b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9sbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        id : 12,
        "name": "Coffee",
        "price": 10,
        "brand": "Starbucks",
        "category": "Food",
        "rating": 4,
        "image": "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ]

export default products