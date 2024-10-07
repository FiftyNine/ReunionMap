const destinations = [
    {
        "id": "6ba4a8e5-8e0b-49b2-84d4-ef3dbbc4168b",
        "name": "Lyon",
        "eliminated": false,
        "country": "France",
        "temperature": "18°C",
        "population": "0.523M",
        "lat": 45.764,
        "lon": 4.8357,
        "escape_rooms": 7,
        "food": 9,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Lyon/1.jpg",
            "Lyon/0.jpg",
            "Lyon/4.jpg",
            "Lyon/3.jpg",
            "Lyon/2.jpg",
            "Lyon/5.jpg"
        ],
        "attractions": [
            "Cuisine",
            "Historic architecture",
            "Festivals",
            "Museums",
            "Riverbanks"
        ]
    },
    {
        "id": "a6cecde0-b300-433c-9fb1-315534b832a8",
        "name": "Tokyo",
        "eliminated": false,
        "country": "Japan",
        "temperature": "24°C",
        "population": "14M",
        "lat": 35.6762,
        "lon": 139.6503,
        "escape_rooms": 10,
        "food": 10,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Tokyo/1.jpg",
            "Tokyo/0.jpg",
            "Tokyo/4.jpg",
            "Tokyo/6.jpg",
            "Tokyo/3.jpg",
            "Tokyo/2.jpg",
            "Tokyo/5.jpg"
        ],
        "attractions": [
            "Technology",
            "Culture",
            "Shopping",
            "Food",
            "Temples"
        ]
    },
    {
        "id": "b008bac5-87e6-455c-9180-8d3bfce2b071",
        "name": "Tunis",
        "eliminated": true,
        "country": "Tunisia",
        "temperature": "24°C",
        "population": "1.2M",
        "lat": 33.8869,
        "lon": 9.5375,
        "escape_rooms": 5,
        "food": 8,
        "safety": 6,
        "ease_of_access": 5,
        "images": [
            "Tunis/1.jpg",
            "Tunis/0.jpg",
            "Tunis/4.jpg",
            "Tunis/3.jpg",
            "Tunis/2.jpg",
            "Tunis/5.jpg"
        ],
        "attractions": [
            "Ancient ruins",
            "Medina",
            "Museums",
            "Souks",
            "Beaches"
        ]
    },
    {
        "id": "d7b675ca-7875-49e7-a2e4-543122a8c79b",
        "name": "Hong Kong",
        "eliminated": false,
        "country": "Hong Kong",
        "temperature": "27°C",
        "population": "7.5M",
        "lat": 22.3964,
        "lon": 114.1095,
        "escape_rooms": 9,
        "food": 9,
        "safety": 7,
        "ease_of_access": 8,
        "images": [],
        "attractions": [
            "Skyline",
            "Cuisine",
            "Shopping",
            "Nightlife",
            "Culture"
        ]
    },
    {
        "id": "32e42245-6e84-464c-a4d2-5173efbe7714",
        "name": "Barcelona",
        "eliminated": false,
        "country": "Spain",
        "temperature": "21°C",
        "population": "1.6M",
        "lat": 41.3851,
        "lon": 2.1734,
        "escape_rooms": 7,
        "food": 10,
        "safety": 8,
        "ease_of_access": 9,
        "images": [
            "Barcelona/1.jpg",
            "Barcelona/0.jpg",
            "Barcelona/7.jpg",
            "Barcelona/4.jpg",
            "Barcelona/6.jpg",
            "Barcelona/3.jpg",
            "Barcelona/2.jpg",
            "Barcelona/5.jpg"
        ],
        "attractions": [
            "Gaudí",
            "Beaches",
            "Art",
            "Festivals",
            "Nightlife"
        ]
    },
    {
        "id": "6a98bb1f-a20e-4433-a093-e2ff3bccd063",
        "name": "Newcastle",
        "eliminated": true,
        "country": "United Kingdom",
        "temperature": "13°C",
        "population": "0.815M",
        "lat": 54.9784,
        "lon": -1.6174,
        "escape_rooms": 6,
        "food": 8,
        "safety": 9,
        "ease_of_access": 7,
        "images": [],
        "attractions": [
            "Architecture",
            "Nightlife",
            "River Tyne",
            "Culture",
            "History"
        ]
    },
    {
        "id": "9c170746-81ed-427f-879a-4c747a84ffce",
        "name": "Zagreb",
        "eliminated": false,
        "country": "Croatia",
        "temperature": "18°C",
        "population": "0.77M",
        "lat": 45.815,
        "lon": 15.9819,
        "escape_rooms": 6,
        "food": 8,
        "safety": 8,
        "ease_of_access": 7,
        "images": [
            "Zagreb/1.jpg",
            "Zagreb/0.jpg",
            "Zagreb/4.jpg",
            "Zagreb/6.jpg",
            "Zagreb/3.jpg",
            "Zagreb/2.jpg",
            "Zagreb/5.jpg"
        ],
        "attractions": [
            "Museums",
            "Parks",
            "Cafés",
            "Architecture",
            "Festivals"
        ]
    },
    {
        "id": "b0044570-f0ca-4b21-9718-7b31f83dbb09",
        "name": "Tel Aviv",
        "eliminated": true,
        "country": "Israel",
        "temperature": "27°C",
        "population": "0.46M",
        "lat": 32.0853,
        "lon": 34.7818,
        "escape_rooms": 7,
        "food": 9,
        "safety": 8,
        "ease_of_access": 7,
        "images": [
            "Tel Aviv/1.jpg",
            "Tel Aviv/0.jpg",
            "Tel Aviv/7.jpg",
            "Tel Aviv/4.jpg",
            "Tel Aviv/8.jpg",
            "Tel Aviv/6.jpg",
            "Tel Aviv/3.jpg",
            "Tel Aviv/2.jpg",
            "Tel Aviv/5.jpg"
        ],
        "attractions": [
            "Beaches",
            "Nightlife",
            "Culture",
            "Food",
            "Art"
        ]
    },
    {
        "id": "d249ee1b-1c86-4742-92df-0b17d1b5aac6",
        "name": "Hanoi",
        "eliminated": false,
        "country": "Vietnam",
        "temperature": "28°C",
        "population": "8M",
        "lat": 21.0285,
        "lon": 105.8542,
        "escape_rooms": 7,
        "food": 8,
        "safety": 6,
        "ease_of_access": 6,
        "images": [
            "Hanoi/1.jpg",
            "Hanoi/0.jpg",
            "Hanoi/4.jpg",
            "Hanoi/6.jpg",
            "Hanoi/3.jpg",
            "Hanoi/2.jpg",
            "Hanoi/5.jpg"
        ],
        "attractions": [
            "Street food",
            "Culture",
            "Lakes",
            "History",
            "Markets"
        ]
    },
    {
        "id": "a8a993b7-8944-498d-9dfd-921cc1802a7b",
        "name": "Mexico City",
        "eliminated": true,
        "country": "Mexico",
        "temperature": "17°C",
        "population": "9.2M",
        "lat": 19.4326,
        "lon": -99.1332,
        "escape_rooms": 7,
        "food": 9,
        "safety": 5,
        "ease_of_access": 7,
        "images": [
            "Mexico City/1.jpg",
            "Mexico City/0.jpg",
            "Mexico City/7.jpg",
            "Mexico City/4.jpg",
            "Mexico City/8.jpg",
            "Mexico City/6.jpg",
            "Mexico City/3.jpg",
            "Mexico City/2.jpg",
            "Mexico City/5.jpg"
        ],
        "attractions": [
            "History",
            "Cuisine",
            "Museums",
            "Architecture",
            "Parks"
        ]
    },
    {
        "id": "5b1933d4-68af-4069-b390-a2de605e12cb",
        "name": "Zurich",
        "eliminated": false,
        "country": "Switzerland",
        "temperature": "15°C",
        "population": "0.434M",
        "lat": 47.3769,
        "lon": 8.5417,
        "escape_rooms": 7,
        "food": 9,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Zurich/1.jpg",
            "Zurich/0.jpg",
            "Zurich/2.jpg"
        ],
        "attractions": [
            "Banking",
            "Lakes",
            "Art",
            "Culture",
            "Nature"
        ]
    },
    {
        "id": "a696e2fe-2020-4e38-b168-7faa0efd6fd2",
        "name": "Samarkand",
        "eliminated": true,
        "country": "Uzbekistan",
        "temperature": "22°C",
        "population": "0.529M",
        "lat": 39.6542,
        "lon": 66.9597,
        "escape_rooms": 4,
        "food": 8,
        "safety": 7,
        "ease_of_access": 5,
        "images": [
            "Samarkand/1.jpg",
            "Samarkand/0.jpg",
            "Samarkand/4.jpg",
            "Samarkand/3.jpg",
            "Samarkand/2.jpg"
        ],
        "attractions": [
            "Silk Road",
            "Architecture",
            "History",
            "Culture",
            "Markets"
        ]
    },
    {
        "id": "fee3c425-3077-4979-9950-7b10b9dc1bd8",
        "name": "Nha Trang",
        "eliminated": false,
        "country": "Vietnam",
        "temperature": "27°C",
        "population": "0.535M",
        "lat": 12.2384,
        "lon": 109.1962,
        "escape_rooms": 5,
        "food": 8,
        "safety": 6,
        "ease_of_access": 6,
        "images": [
            "Nha Trang/1.jpg",
            "Nha Trang/0.jpg",
            "Nha Trang/2.jpg"
        ],
        "attractions": [
            "Beaches",
            "Diving",
            "Nightlife",
            "Islands",
            "Hot springs"
        ]
    },
    {
        "id": "da3b5542-cc25-4f3f-999c-88652141eb51",
        "name": "Auckland",
        "eliminated": true,
        "country": "New Zealand",
        "temperature": "14°C",
        "population": "1.65M",
        "lat": -36.8485,
        "lon": 174.7633,
        "escape_rooms": 6,
        "food": 7,
        "safety": 9,
        "ease_of_access": 5,
        "images": [
            "Auckland/1.jpg",
            "Auckland/0.jpg",
            "Auckland/7.jpg",
            "Auckland/4.jpg",
            "Auckland/8.jpg",
            "Auckland/6.jpg",
            "Auckland/3.jpg",
            "Auckland/2.jpg",
            "Auckland/5.jpg"
        ],
        "attractions": [
            "Nature",
            "Culture",
            "Food",
            "Beaches",
            "Activities"
        ]
    },
    {
        "id": "db109a22-d310-41c9-83a4-6e0b9e32dacb",
        "name": "Sarajevo",
        "eliminated": true,
        "country": "Bosnia and Herzegovina",
        "temperature": "16°C",
        "population": "0.275M",
        "lat": 43.8486,
        "lon": 18.3564,
        "escape_rooms": 6,
        "food": 8,
        "safety": 7,
        "ease_of_access": 6,
        "images": [
            "Sarajevo/1.jpg",
            "Sarajevo/0.jpg",
            "Sarajevo/7.jpg",
            "Sarajevo/4.jpg",
            "Sarajevo/8.jpg",
            "Sarajevo/6.jpg",
            "Sarajevo/3.jpg",
            "Sarajevo/2.jpg",
            "Sarajevo/5.jpg"
        ],
        "attractions": [
            "History",
            "Culture",
            "Architecture",
            "Cuisine",
            "Nightlife"
        ]
    },
    {
        "id": "a3dd0e7f-e80e-4229-b950-a2b2ca6340b4",
        "name": "Pattaya",
        "eliminated": true,
        "country": "Thailand",
        "temperature": "28°C",
        "population": "0.12M",
        "lat": 12.9279,
        "lon": 100.8822,
        "escape_rooms": 6,
        "food": 8,
        "safety": 6,
        "ease_of_access": 6,
        "images": [
            "Pattaya/1.jpg",
            "Pattaya/0.jpg"
        ],
        "attractions": [
            "Beaches",
            "Nightlife",
            "Water sports",
            "Shopping",
            "Entertainment"
        ]
    },
    {
        "id": "43369418-c901-4e8a-97d2-9825023fe124",
        "name": "Sharm-el-sheikh",
        "eliminated": false,
        "country": "Egypt",
        "temperature": "30°C",
        "population": "0.073M",
        "lat": 27.9159,
        "lon": 34.3299,
        "escape_rooms": 4,
        "food": 8,
        "safety": 6,
        "ease_of_access": 5,
        "images": [],
        "attractions": [
            "Diving",
            "Beaches",
            "Resorts",
            "Red Sea",
            "Activities"
        ]
    },
    {
        "id": "795dd54d-90af-41dc-9b80-11a75ceea573",
        "name": "Madrid",
        "eliminated": false,
        "country": "Spain",
        "temperature": "20°C",
        "population": "3.3M",
        "lat": 40.4168,
        "lon": -3.7038,
        "escape_rooms": 8,
        "food": 9,
        "safety": 8,
        "ease_of_access": 8,
        "images": [
            "Madrid/1.jpg",
            "Madrid/0.jpg",
            "Madrid/4.jpg",
            "Madrid/3.jpg",
            "Madrid/2.jpg",
            "Madrid/5.jpg"
        ],
        "attractions": [
            "Art",
            "History",
            "Nightlife",
            "Cuisine",
            "Parks"
        ]
    },
    {
        "id": "383de103-8ad0-43a5-8724-bffe58da19f8",
        "name": "Oaxaca",
        "eliminated": true,
        "country": "Mexico",
        "temperature": "20°C",
        "population": "0.3M",
        "lat": 17.0732,
        "lon": -96.7266,
        "escape_rooms": 5,
        "food": 8,
        "safety": 7,
        "ease_of_access": 6,
        "images": [
            "Oaxaca/0.jpg"
        ],
        "attractions": [
            "Cuisine",
            "Culture",
            "Markets",
            "Festivals",
            "Art"
        ]
    },
    {
        "id": "c15abf9f-507b-419a-8db8-5ad1a637855a",
        "name": "Vienna",
        "eliminated": false,
        "country": "Austria",
        "temperature": "18°C",
        "population": "1.9M",
        "lat": 48.2082,
        "lon": 16.3738,
        "escape_rooms": 8,
        "food": 9,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Vienna/1.jpg",
            "Vienna/0.jpg",
            "Vienna/7.jpg",
            "Vienna/4.jpg",
            "Vienna/6.jpg",
            "Vienna/3.jpg",
            "Vienna/2.jpg",
            "Vienna/5.jpg"
        ],
        "attractions": [
            "Music",
            "Architecture",
            "Museums",
            "Coffeehouses",
            "Culture"
        ]
    },
    {
        "id": "52b1219e-6ae3-4ec3-a67e-b53c869942ed",
        "name": "Dubai",
        "eliminated": false,
        "country": "United Arab Emirates",
        "temperature": "33°C",
        "population": "3.3M",
        "lat": 25.276987,
        "lon": 55.296249,
        "escape_rooms": 9,
        "food": 8,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Dubai/1.jpg",
            "Dubai/0.jpg",
            "Dubai/7.jpg",
            "Dubai/4.jpg",
            "Dubai/8.jpg",
            "Dubai/6.jpg",
            "Dubai/3.jpg",
            "Dubai/2.jpg",
            "Dubai/5.jpg"
        ],
        "attractions": [
            "Luxury",
            "Shopping",
            "Architecture",
            "Entertainment",
            "Culture"
        ]
    },
    {
        "id": "b1731f3a-d679-46ea-991d-bdbd6f1a7f1d",
        "name": "Toronto",
        "eliminated": false,
        "country": "Canada",
        "temperature": "17°C",
        "population": "2.7M",
        "lat": 43.65107,
        "lon": -79.347015,
        "escape_rooms": 7,
        "food": 9,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Toronto/1.jpg",
            "Toronto/0.jpg",
            "Toronto/4.jpg",
            "Toronto/6.jpg",
            "Toronto/3.jpg",
            "Toronto/2.jpg",
            "Toronto/5.jpg"
        ],
        "attractions": [
            "Diversity",
            "Culture",
            "Food",
            "Parks",
            "Entertainment"
        ]
    },
    {
        "id": "fd7a2a68-3288-42bd-8197-77579db9549a",
        "name": "Lisbon",
        "eliminated": true,
        "country": "Portugal",
        "temperature": "22°C",
        "population": "0.545M",
        "lat": 38.7223,
        "lon": -9.1393,
        "escape_rooms": 7,
        "food": 9,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Lisbon/1.jpg",
            "Lisbon/0.jpg",
            "Lisbon/7.jpg",
            "Lisbon/4.jpg",
            "Lisbon/8.jpg",
            "Lisbon/6.jpg",
            "Lisbon/3.jpg",
            "Lisbon/2.jpg",
            "Lisbon/5.jpg"
        ],
        "attractions": [
            "History",
            "Culture",
            "Food",
            "Views",
            "Fado"
        ]
    },
    {
        "id": "5c628b82-77e1-4e22-9627-31f5056150da",
        "name": "Agia Napa",
        "eliminated": true,
        "country": null,
        "temperature": "25°C",
        "population": "0.003M",
        "lat": 35.1264,
        "lon": 33.4299,
        "escape_rooms": 3,
        "food": 8,
        "safety": 8,
        "ease_of_access": 6,
        "images": [],
        "attractions": []
    },
    {
        "id": "58afb82a-920e-4e43-9771-c5286ba128eb",
        "name": "Bern",
        "eliminated": false,
        "country": "Switzerland",
        "temperature": "15°C",
        "population": "0.13M",
        "lat": 46.948,
        "lon": 7.4474,
        "escape_rooms": 5,
        "food": 8,
        "safety": 9,
        "ease_of_access": 7,
        "images": [
            "Bern/1.jpg",
            "Bern/0.jpg",
            "Bern/4.jpg",
            "Bern/3.jpg",
            "Bern/2.jpg"
        ],
        "attractions": [
            "Historic center",
            "Culture",
            "Nature",
            "Architecture",
            "Museums"
        ]
    },
    {
        "id": "9a6e40cc-8373-4137-99eb-8f9b6619850b",
        "name": "Kuala Lumpur",
        "eliminated": false,
        "country": "Malaysia",
        "temperature": "27°C",
        "population": "8.21M",
        "lat": 3.139,
        "lon": 101.6869,
        "escape_rooms": 8,
        "food": 9,
        "safety": 6,
        "ease_of_access": 6,
        "images": [
            "Kuala Lumpur/1.jpg",
            "Kuala Lumpur/0.jpg",
            "Kuala Lumpur/4.jpg",
            "Kuala Lumpur/3.jpg",
            "Kuala Lumpur/2.jpg",
            "Kuala Lumpur/5.jpg"
        ],
        "attractions": [
            "Petronas Towers",
            "Culture",
            "Shopping",
            "Food",
            "Nightlife"
        ]
    },
    {
        "id": "a4285707-5718-4953-ab19-c1682d2a2e4b",
        "name": "Port Elizabeth",
        "eliminated": true,
        "country": "South Africa",
        "temperature": "16°C",
        "population": "1.2M",
        "lat": -33.9189,
        "lon": 25.5702,
        "escape_rooms": 5,
        "food": 8,
        "safety": 6,
        "ease_of_access": 6,
        "images": [
            "Port Elizabeth/0.jpg"
        ],
        "attractions": [
            "Beaches",
            "Wildlife",
            "Adventure",
            "Culture",
            "History"
        ]
    },
    {
        "id": "32a27c1e-6391-4332-8b47-053bb35e0fb1",
        "name": "Jakarta",
        "eliminated": true,
        "country": "Indonesia",
        "temperature": "28°C",
        "population": "10.5M",
        "lat": -6.2088,
        "lon": 106.8456,
        "escape_rooms": 7,
        "food": 8,
        "safety": 5,
        "ease_of_access": 6,
        "images": [
            "Jakarta/1.jpg",
            "Jakarta/0.jpg",
            "Jakarta/4.jpg",
            "Jakarta/6.jpg",
            "Jakarta/3.jpg",
            "Jakarta/2.jpg",
            "Jakarta/5.jpg"
        ],
        "attractions": [
            "Culture",
            "Shopping",
            "Food",
            "Nightlife",
            "History"
        ]
    },
    {
        "id": "58929c32-5c1f-45f0-bdcf-78be7f56b0f4",
        "name": "Bogotá",
        "eliminated": true,
        "country": "Colombia",
        "temperature": "17°C",
        "population": "8M",
        "lat": 4.611,
        "lon": -74.0818,
        "escape_rooms": 6,
        "food": 9,
        "safety": 5,
        "ease_of_access": 6,
        "images": [
            "Bogotá/1.jpg",
            "Bogotá/0.jpg",
            "Bogotá/7.jpg",
            "Bogotá/4.jpg",
            "Bogotá/6.jpg",
            "Bogotá/3.jpg",
            "Bogotá/2.jpg",
            "Bogotá/5.jpg"
        ],
        "attractions": [
            "Culture",
            "Museums",
            "History",
            "Food",
            "Nightlife"
        ]
    },
    {
        "id": "d6f8a4db-2434-472b-adc4-de848d4561a5",
        "name": "Antalya",
        "eliminated": false,
        "country": "Turkey",
        "temperature": "24°C",
        "population": "2.55M",
        "lat": 36.8969,
        "lon": 30.7133,
        "escape_rooms": 5,
        "food": 8,
        "safety": 8,
        "ease_of_access": 6,
        "images": [
            "Antalya/1.jpg",
            "Antalya/0.jpg",
            "Antalya/4.jpg",
            "Antalya/6.jpg",
            "Antalya/3.jpg",
            "Antalya/2.jpg",
            "Antalya/5.jpg"
        ],
        "attractions": [
            "Beaches",
            "History",
            "Nature",
            "Resorts",
            "Culture"
        ]
    },
    {
        "id": "6c5300d1-5695-4b8c-98aa-79ba52e37407",
        "name": "São Paulo",
        "eliminated": true,
        "country": "Brazil",
        "temperature": "19°C",
        "population": "12.3M",
        "lat": -23.5505,
        "lon": -46.6333,
        "escape_rooms": 8,
        "food": 9,
        "safety": 5,
        "ease_of_access": 5,
        "images": [
            "São Paulo/1.jpg",
            "São Paulo/0.jpg",
            "São Paulo/7.jpg",
            "São Paulo/4.jpg",
            "São Paulo/8.jpg",
            "São Paulo/6.jpg",
            "São Paulo/3.jpg",
            "São Paulo/9.jpg",
            "São Paulo/2.jpg",
            "São Paulo/5.jpg"
        ],
        "attractions": [
            "Culture",
            "Cuisine",
            "Nightlife",
            "Shopping",
            "Art"
        ]
    },
    {
        "id": "b4790c78-6f56-48dd-ad06-9017a8448312",
        "name": "Santiago",
        "eliminated": true,
        "country": "Chile",
        "temperature": "15°C",
        "population": "7M",
        "lat": -33.4489,
        "lon": -70.6693,
        "escape_rooms": 7,
        "food": 8,
        "safety": 7,
        "ease_of_access": 6,
        "images": [
            "Santiago/1.jpg",
            "Santiago/0.jpg",
            "Santiago/7.jpg",
            "Santiago/4.jpg",
            "Santiago/8.jpg",
            "Santiago/6.jpg",
            "Santiago/3.jpg",
            "Santiago/9.jpg",
            "Santiago/2.jpg",
            "Santiago/5.jpg"
        ],
        "attractions": [
            "Mountains",
            "Culture",
            "Food",
            "Wine",
            "History"
        ]
    },
    {
        "id": "3c4c661a-f5ea-4e5d-a838-b1b7b011bd60",
        "name": "Dublin",
        "eliminated": false,
        "country": "Ireland",
        "temperature": "13°C",
        "population": "1.45M",
        "lat": 53.3498,
        "lon": -6.2603,
        "escape_rooms": 6,
        "food": 8,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Dublin/1.jpg",
            "Dublin/0.jpg",
            "Dublin/3.jpg",
            "Dublin/2.jpg"
        ],
        "attractions": [
            "History",
            "Culture",
            "Pubs",
            "Literature",
            "Music"
        ]
    },
    {
        "id": "2adcf390-f454-4755-a6a7-bcd04b247e5d",
        "name": "Medellín",
        "eliminated": true,
        "country": "Colombia",
        "temperature": "22°C",
        "population": "2.5M",
        "lat": 6.2442,
        "lon": -75.5812,
        "escape_rooms": 6,
        "food": 9,
        "safety": 7,
        "ease_of_access": 6,
        "images": [
            "Medellín/1.jpg",
            "Medellín/0.jpg",
            "Medellín/4.jpg",
            "Medellín/3.jpg",
            "Medellín/2.jpg",
            "Medellín/5.jpg"
        ],
        "attractions": [
            "Culture",
            "Climate",
            "Innovation",
            "Nightlife",
            "History"
        ]
    },
    {
        "id": "7df7919d-a104-4ceb-bb74-2f7538a7bcca",
        "name": "Sevilla",
        "eliminated": false,
        "country": "Spain",
        "temperature": "25°C",
        "population": "0.688M",
        "lat": 37.3886,
        "lon": -5.9823,
        "escape_rooms": 7,
        "food": 9,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Sevilla/1.jpg",
            "Sevilla/0.jpg",
            "Sevilla/4.jpg",
            "Sevilla/3.jpg",
            "Sevilla/2.jpg"
        ],
        "attractions": [
            "Flamenco",
            "Architecture",
            "History",
            "Culture",
            "Festivals"
        ]
    },
    {
        "id": "49d6f8b2-8d92-44e9-8355-a19f4269886e",
        "name": "Rome",
        "eliminated": false,
        "country": "Italy",
        "temperature": "21°C",
        "population": "2.8M",
        "lat": 41.9028,
        "lon": 12.4964,
        "escape_rooms": 8,
        "food": 9,
        "safety": 7,
        "ease_of_access": 8,
        "images": [
            "Rome/1.jpg",
            "Rome/0.jpg",
            "Rome/7.jpg",
            "Rome/4.jpg",
            "Rome/8.jpg",
            "Rome/6.jpg",
            "Rome/3.jpg",
            "Rome/9.jpg",
            "Rome/2.jpg",
            "Rome/5.jpg"
        ],
        "attractions": [
            "History",
            "Architecture",
            "Art",
            "Cuisine",
            "Culture"
        ]
    },
    {
        "id": "b7f251f7-2ff1-40f3-adbc-b3373cff0bf8",
        "name": "Podgorica",
        "eliminated": true,
        "country": "Montenegro",
        "temperature": "20°C",
        "population": "0.185M",
        "lat": 42.4411,
        "lon": 19.2636,
        "escape_rooms": 4,
        "food": 7,
        "safety": 8,
        "ease_of_access": 6,
        "images": [
            "Podgorica/1.jpg",
            "Podgorica/0.jpg",
            "Podgorica/4.jpg",
            "Podgorica/6.jpg",
            "Podgorica/3.jpg",
            "Podgorica/2.jpg",
            "Podgorica/5.jpg"
        ],
        "attractions": [
            "Nature",
            "History",
            "Culture",
            "Nightlife",
            "Parks"
        ]
    },
    {
        "id": "f98425e0-8123-47bb-be6a-531235523111",
        "name": "Baku",
        "eliminated": true,
        "country": "Azerbaijan",
        "temperature": "19°C",
        "population": "2.2M",
        "lat": 40.4093,
        "lon": 49.8671,
        "escape_rooms": 6,
        "food": 7,
        "safety": 7,
        "ease_of_access": 6,
        "images": [
            "Baku/1.jpg",
            "Baku/0.jpg",
            "Baku/3.jpg",
            "Baku/2.jpg"
        ],
        "attractions": [
            "Architecture",
            "Culture",
            "Caspian Sea",
            "History",
            "Nightlife"
        ]
    },
    {
        "id": "67f7b714-05e4-449f-ade4-0ec308e77bbf",
        "name": "Lima",
        "eliminated": true,
        "country": "Peru",
        "temperature": "17°C",
        "population": "10M",
        "lat": -12.0464,
        "lon": -77.0428,
        "escape_rooms": 7,
        "food": 8,
        "safety": 6,
        "ease_of_access": 6,
        "images": [
            "Lima/1.jpg",
            "Lima/0.jpg",
            "Lima/4.jpg",
            "Lima/6.jpg",
            "Lima/3.jpg",
            "Lima/2.jpg",
            "Lima/5.jpg"
        ],
        "attractions": [
            "Cuisine",
            "Culture",
            "History",
            "Museums",
            "Parks"
        ]
    },
    {
        "id": "f01af15b-51ef-4b22-bfd7-16ac55759f2e",
        "name": "Rio de Janeiro",
        "eliminated": false,
        "country": "Brazil",
        "temperature": "23°C",
        "population": "6.7M",
        "lat": -22.9068,
        "lon": -43.1729,
        "escape_rooms": 7,
        "food": 9,
        "safety": 5,
        "ease_of_access": 6,
        "images": [
            "Rio de Janeiro/1.jpg",
            "Rio de Janeiro/0.jpg",
            "Rio de Janeiro/7.jpg",
            "Rio de Janeiro/4.jpg",
            "Rio de Janeiro/8.jpg",
            "Rio de Janeiro/6.jpg",
            "Rio de Janeiro/3.jpg",
            "Rio de Janeiro/2.jpg",
            "Rio de Janeiro/5.jpg"
        ],
        "attractions": [
            "Beaches",
            "Carnival",
            "Culture",
            "Mountains",
            "Nightlife"
        ]
    },
    {
        "id": "9dd906b2-e2d0-4dc1-9a49-e9b533fe865f",
        "name": "Leeds",
        "eliminated": true,
        "country": "United Kingdom",
        "temperature": "12°C",
        "population": "0.78M",
        "lat": 53.8013,
        "lon": -1.5491,
        "escape_rooms": 6,
        "food": 8,
        "safety": 9,
        "ease_of_access": 7,
        "images": [
            "Leeds/1.jpg",
            "Leeds/0.jpg",
            "Leeds/7.jpg",
            "Leeds/4.jpg",
            "Leeds/6.jpg",
            "Leeds/3.jpg",
            "Leeds/2.jpg",
            "Leeds/5.jpg"
        ],
        "attractions": [
            "Culture",
            "Shopping",
            "Nightlife",
            "History",
            "Parks"
        ]
    },
    {
        "id": "612d277d-2828-4bf8-b11a-9adaf85a7ab1",
        "name": "Cordoba",
        "eliminated": true,
        "country": "Argentina",
        "temperature": "16°C",
        "population": "1.5M",
        "lat": -31.4201,
        "lon": -64.1888,
        "escape_rooms": 5,
        "food": 7,
        "safety": 6,
        "ease_of_access": 5,
        "images": [],
        "attractions": [
            "History",
            "Culture",
            "Architecture",
            "Nature",
            "Cuisine"
        ]
    },
    {
        "id": "aee5677a-4f86-43d9-b480-33d1cbb94835",
        "name": "Stockholm",
        "eliminated": false,
        "country": "Sweden",
        "temperature": "13°C",
        "population": "0.975M",
        "lat": 59.3293,
        "lon": 18.0686,
        "escape_rooms": 7,
        "food": 9,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Stockholm/1.jpg",
            "Stockholm/0.jpg",
            "Stockholm/4.jpg",
            "Stockholm/3.jpg",
            "Stockholm/2.jpg",
            "Stockholm/5.jpg"
        ],
        "attractions": [
            "Archipelago",
            "Design",
            "History",
            "Culture",
            "Parks"
        ]
    },
    {
        "id": "f05086ae-142f-433a-a792-56acfb1b9751",
        "name": "Seoul",
        "eliminated": false,
        "country": "South Korea",
        "temperature": "21°C",
        "population": "9.7M",
        "lat": 37.5665,
        "lon": 126.978,
        "escape_rooms": 9,
        "food": 9,
        "safety": 9,
        "ease_of_access": 7,
        "images": [
            "Seoul/1.jpg",
            "Seoul/0.jpg",
            "Seoul/4.jpg",
            "Seoul/3.jpg",
            "Seoul/2.jpg",
            "Seoul/5.jpg"
        ],
        "attractions": [
            "Technology",
            "Food",
            "Culture",
            "Shopping",
            "Palaces"
        ]
    },
    {
        "id": "9125ed56-56f8-4ca4-9a13-d1e9e4556928",
        "name": "Montreal",
        "eliminated": true,
        "country": "Canada",
        "temperature": "15°C",
        "population": "1.7M",
        "lat": 45.5017,
        "lon": -73.5673,
        "escape_rooms": 7,
        "food": 8,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Montreal/1.jpg",
            "Montreal/0.jpg",
            "Montreal/4.jpg",
            "Montreal/3.jpg",
            "Montreal/2.jpg",
            "Montreal/5.jpg"
        ],
        "attractions": [
            "Culture",
            "Food",
            "Festivals",
            "History",
            "Arts"
        ]
    },
    {
        "id": "02bf6836-c8b8-4468-b3d2-b0dfd9b3ecff",
        "name": "Istanbul",
        "eliminated": false,
        "country": "Turkey",
        "temperature": "22°C",
        "population": "15.5M",
        "lat": 41.0082,
        "lon": 28.9784,
        "escape_rooms": 9,
        "food": 9,
        "safety": 7,
        "ease_of_access": 7,
        "images": [
            "Istanbul/1.jpg",
            "Istanbul/0.jpg",
            "Istanbul/7.jpg",
            "Istanbul/4.jpg",
            "Istanbul/8.jpg",
            "Istanbul/6.jpg",
            "Istanbul/3.jpg",
            "Istanbul/9.jpg",
            "Istanbul/2.jpg",
            "Istanbul/5.jpg"
        ],
        "attractions": [
            "History",
            "Culture",
            "Architecture",
            "Markets",
            "Cuisine"
        ]
    },
    {
        "id": "93c7b45e-3edc-4b2b-9abe-4ebc7f267f52",
        "name": "Melbourne",
        "eliminated": true,
        "country": "Australia",
        "temperature": "15°C",
        "population": "5M",
        "lat": -37.8136,
        "lon": 144.9631,
        "escape_rooms": 8,
        "food": 9,
        "safety": 9,
        "ease_of_access": 6,
        "images": [
            "Melbourne/0.jpg"
        ],
        "attractions": [
            "Culture",
            "Food",
            "Arts",
            "Coffee",
            "Parks"
        ]
    },
    {
        "id": "b48250ec-cbb7-4584-8fa1-a9ce3a0f9899",
        "name": "Phnom Penh",
        "eliminated": true,
        "country": "Cambodia",
        "temperature": "27°C",
        "population": "2.1M",
        "lat": 11.5564,
        "lon": 104.9282,
        "escape_rooms": 5,
        "food": 8,
        "safety": 5,
        "ease_of_access": 5,
        "images": [
            "Phnom Penh/1.jpg",
            "Phnom Penh/0.jpg",
            "Phnom Penh/4.jpg",
            "Phnom Penh/6.jpg",
            "Phnom Penh/3.jpg",
            "Phnom Penh/2.jpg",
            "Phnom Penh/5.jpg"
        ],
        "attractions": [
            "History",
            "Culture",
            "Temples",
            "Food",
            "Markets"
        ]
    },
    {
        "id": "736cc932-108f-40c7-b6d5-f08d76b662aa",
        "name": "Madeira Island",
        "eliminated": false,
        "country": "Portugal",
        "temperature": "22°C",
        "population": "0.268M",
        "lat": 32.7607,
        "lon": -16.9595,
        "escape_rooms": 4,
        "food": 8,
        "safety": 8,
        "ease_of_access": 5,
        "images": [],
        "attractions": [
            "Nature",
            "Hiking",
            "Beaches",
            "Wine",
            "Relaxation"
        ]
    },
    {
        "id": "f657c770-9cda-4481-a2db-9f9ad5d2dad4",
        "name": "Belo Horizonte",
        "eliminated": true,
        "country": "Brazil",
        "temperature": "19°C",
        "population": "2.7M",
        "lat": -19.9191,
        "lon": -43.9378,
        "escape_rooms": 5,
        "food": 8,
        "safety": 6,
        "ease_of_access": 5,
        "images": [
            "Belo Horizonte/1.jpg",
            "Belo Horizonte/0.jpg",
            "Belo Horizonte/7.jpg",
            "Belo Horizonte/4.jpg",
            "Belo Horizonte/6.jpg",
            "Belo Horizonte/3.jpg",
            "Belo Horizonte/2.jpg",
            "Belo Horizonte/5.jpg"
        ],
        "attractions": [
            "Cuisine",
            "Culture",
            "Architecture",
            "Nightlife",
            "Parks"
        ]
    },
    {
        "id": "a1fcc2db-f265-4aab-b82a-355758021dcd",
        "name": "San Carlos de Bariloche",
        "eliminated": true,
        "country": "Argentina",
        "temperature": "8°C",
        "population": "0.15M",
        "lat": -41.1344,
        "lon": -71.3083,
        "escape_rooms": 3,
        "food": 8,
        "safety": 8,
        "ease_of_access": 5,
        "images": [
            "San Carlos de Bariloche/0.jpg"
        ],
        "attractions": [
            "Nature",
            "Lakes",
            "Hiking",
            "Skiing",
            "Chocolate"
        ]
    },
    {
        "id": "655c8bd9-b4e3-487e-b948-3bf2865ee25f",
        "name": "Bangkok",
        "eliminated": false,
        "country": "Thailand",
        "temperature": "29°C",
        "population": "10.5M",
        "lat": 13.7563,
        "lon": 100.5018,
        "escape_rooms": 9,
        "food": 9,
        "safety": 5,
        "ease_of_access": 6,
        "images": [
            "Bangkok/0.jpg"
        ],
        "attractions": [
            "Temples",
            "Street food",
            "Nightlife",
            "Shopping",
            "Culture"
        ]
    },
    {
        "id": "59647942-e554-460c-a1e7-a17acdada799",
        "name": "Ko Samui",
        "eliminated": true,
        "country": "Thailand",
        "temperature": "28°C",
        "population": "0.063M",
        "lat": 9.5128,
        "lon": 100.0131,
        "escape_rooms": 3,
        "food": 8,
        "safety": 8,
        "ease_of_access": 6,
        "images": [
            "Ko Samui/0.jpg"
        ],
        "attractions": [
            "Beaches",
            "Resorts",
            "Nightlife",
            "Water sports",
            "Nature"
        ]
    },
    {
        "id": "bfe83f0d-1360-4de0-853b-060139baf907",
        "name": "Budapest",
        "eliminated": false,
        "country": "Hungary",
        "temperature": "19°C",
        "population": "1.75M",
        "lat": 47.4979,
        "lon": 19.0402,
        "escape_rooms": 8,
        "food": 9,
        "safety": 8,
        "ease_of_access": 8,
        "images": [
            "Budapest/1.jpg",
            "Budapest/0.jpg",
            "Budapest/4.jpg",
            "Budapest/3.jpg",
            "Budapest/2.jpg",
            "Budapest/5.jpg"
        ],
        "attractions": [
            "Thermal baths",
            "Architecture",
            "Culture",
            "Nightlife",
            "History"
        ]
    },
    {
        "id": "e997add8-0c01-4188-86d2-03aca6c01d1d",
        "name": "Guadalajara",
        "eliminated": true,
        "country": "Mexico",
        "temperature": "21°C",
        "population": "1.5M",
        "lat": 20.6767,
        "lon": -103.3476,
        "escape_rooms": 6,
        "food": 8,
        "safety": 6,
        "ease_of_access": 7,
        "images": [
            "Guadalajara/1.jpg",
            "Guadalajara/0.jpg",
            "Guadalajara/7.jpg",
            "Guadalajara/4.jpg",
            "Guadalajara/6.jpg",
            "Guadalajara/3.jpg",
            "Guadalajara/2.jpg",
            "Guadalajara/5.jpg"
        ],
        "attractions": [
            "Culture",
            "Tequila",
            "History",
            "Food",
            "Festivals"
        ]
    },
    {
        "id": "4b58f710-4a4f-45e9-a372-88c0eed07c73",
        "name": "Buenos Aires",
        "eliminated": false,
        "country": "Argentina",
        "temperature": "17°C",
        "population": "15M",
        "lat": -34.6037,
        "lon": -58.3816,
        "escape_rooms": 7,
        "food": 9,
        "safety": 5,
        "ease_of_access": 6,
        "images": [
            "Buenos Aires/1.jpg",
            "Buenos Aires/0.jpg",
            "Buenos Aires/7.jpg",
            "Buenos Aires/4.jpg",
            "Buenos Aires/8.jpg",
            "Buenos Aires/6.jpg",
            "Buenos Aires/3.jpg",
            "Buenos Aires/9.jpg",
            "Buenos Aires/2.jpg",
            "Buenos Aires/5.jpg"
        ],
        "attractions": [
            "Tango",
            "Cuisine",
            "Culture",
            "History",
            "Nightlife"
        ]
    },
    {
        "id": "72694b63-c9b5-4c14-b86c-d97aba3c2f0e",
        "name": "Ankara",
        "eliminated": true,
        "country": "Turkey",
        "temperature": "22°C",
        "population": "5.1M",
        "lat": 39.9334,
        "lon": 32.8597,
        "escape_rooms": 5,
        "food": 7,
        "safety": 7,
        "ease_of_access": 7,
        "images": [
            "Ankara/1.jpg",
            "Ankara/0.jpg",
            "Ankara/4.jpg",
            "Ankara/6.jpg",
            "Ankara/3.jpg",
            "Ankara/2.jpg",
            "Ankara/5.jpg"
        ],
        "attractions": [
            "History",
            "Museums",
            "Culture",
            "Parks",
            "Nightlife"
        ]
    },
    {
        "id": "bc3ad647-9afe-4f39-99ce-8e4ad4c5ea89",
        "name": "Havana",
        "eliminated": true,
        "country": "Cuba",
        "temperature": "26°C",
        "population": "2.1M",
        "lat": 23.1136,
        "lon": -82.3666,
        "escape_rooms": 4,
        "food": 8,
        "safety": 6,
        "ease_of_access": 4,
        "images": [
            "Havana/1.jpg",
            "Havana/0.jpg",
            "Havana/4.jpg",
            "Havana/3.jpg",
            "Havana/2.jpg",
            "Havana/5.jpg"
        ],
        "attractions": [
            "History",
            "Culture",
            "Music",
            "Architecture",
            "Beaches"
        ]
    },
    {
        "id": "3ccb9e56-6684-4924-929c-b136496e5fd9",
        "name": "Jeju",
        "eliminated": false,
        "country": "South Korea",
        "temperature": "23°C",
        "population": "0.697M",
        "lat": 33.4996,
        "lon": 126.5312,
        "escape_rooms": 6,
        "food": 7,
        "safety": 9,
        "ease_of_access": 6,
        "images": [],
        "attractions": [
            "Nature",
            "Beaches",
            "Hiking",
            "Culture",
            "Relaxation"
        ]
    },
    {
        "id": "930b9d54-52dc-48d9-a029-e6d137976c8d",
        "name": "Phuket",
        "eliminated": true,
        "country": "Thailand",
        "temperature": "28°C",
        "population": "0.42M",
        "lat": 7.8804,
        "lon": 98.3923,
        "escape_rooms": 6,
        "food": 8,
        "safety": 7,
        "ease_of_access": 6,
        "images": [
            "Phuket/0.jpg"
        ],
        "attractions": [
            "Beaches",
            "Nightlife",
            "Water sports",
            "Resorts",
            "Culture"
        ]
    },
    {
        "id": "2165c3af-22b1-47c8-91e1-6bbd1a8414ce",
        "name": "Munich",
        "eliminated": false,
        "country": "Germany",
        "temperature": "15°C",
        "population": "1.5M",
        "lat": 48.1351,
        "lon": 11.582,
        "escape_rooms": 7,
        "food": 9,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Munich/1.jpg",
            "Munich/0.jpg",
            "Munich/7.jpg",
            "Munich/4.jpg",
            "Munich/6.jpg",
            "Munich/3.jpg",
            "Munich/2.jpg",
            "Munich/5.jpg"
        ],
        "attractions": [
            "Beer",
            "Culture",
            "History",
            "Festivals",
            "Architecture"
        ]
    },
    {
        "id": "f66c00e5-059c-4e2f-b16a-7da863e725c5",
        "name": "Kathmandu",
        "eliminated": false,
        "country": "Nepal",
        "temperature": "22°C",
        "population": "1.5M",
        "lat": 27.7172,
        "lon": 85.324,
        "escape_rooms": 6,
        "food": 7,
        "safety": 6,
        "ease_of_access": 5,
        "images": [
            "Kathmandu/1.jpg",
            "Kathmandu/0.jpg",
            "Kathmandu/4.jpg",
            "Kathmandu/3.jpg",
            "Kathmandu/2.jpg",
            "Kathmandu/5.jpg"
        ],
        "attractions": [
            "Temples",
            "Culture",
            "Trekking",
            "History",
            "Mountains"
        ]
    },
    {
        "id": "1d06d0cd-013f-4b67-b6c7-7d2ff3fd8556",
        "name": "Ko Tao",
        "eliminated": false,
        "country": "Thailand",
        "temperature": "29°C",
        "population": "0.0014M",
        "lat": 10.114,
        "lon": 99.8425,
        "escape_rooms": 2,
        "food": 7,
        "safety": 8,
        "ease_of_access": 5,
        "images": [],
        "attractions": [
            "Diving",
            "Beaches",
            "Relaxation",
            "Nature",
            "Water sports"
        ]
    },
    {
        "id": "e36bfb00-ef4c-4aa4-8d54-6510115da45d",
        "name": "Belgrade",
        "eliminated": false,
        "country": "Serbia",
        "temperature": "18°C",
        "population": "1.4M",
        "lat": 44.7866,
        "lon": 20.4489,
        "escape_rooms": 6,
        "food": 7,
        "safety": 7,
        "ease_of_access": 7,
        "images": [
            "Belgrade/1.jpg",
            "Belgrade/0.jpg",
            "Belgrade/7.jpg",
            "Belgrade/4.jpg",
            "Belgrade/6.jpg",
            "Belgrade/3.jpg",
            "Belgrade/2.jpg",
            "Belgrade/5.jpg"
        ],
        "attractions": [
            "Nightlife",
            "History",
            "Culture",
            "Rivers",
            "Festivals"
        ]
    },
    {
        "id": "a2653ae9-b71a-4397-9d57-8d06cd731b66",
        "name": "Bucharest",
        "eliminated": false,
        "country": "Romania",
        "temperature": "18°C",
        "population": "1.83M",
        "lat": 44.4268,
        "lon": 26.1025,
        "escape_rooms": 7,
        "food": 8,
        "safety": 7,
        "ease_of_access": 7,
        "images": [
            "Bucharest/1.jpg",
            "Bucharest/0.jpg",
            "Bucharest/7.jpg",
            "Bucharest/4.jpg",
            "Bucharest/8.jpg",
            "Bucharest/6.jpg",
            "Bucharest/3.jpg",
            "Bucharest/9.jpg",
            "Bucharest/2.jpg",
            "Bucharest/5.jpg"
        ],
        "attractions": [
            "History",
            "Architecture",
            "Culture",
            "Nightlife",
            "Parks"
        ]
    },
    {
        "id": "0ac6e953-9b01-40b4-b2f9-509722d46d24",
        "name": "Sydney",
        "eliminated": true,
        "country": "Australia",
        "temperature": "18°C",
        "population": "5.3M",
        "lat": -33.8688,
        "lon": 151.2093,
        "escape_rooms": 8,
        "food": 9,
        "safety": 9,
        "ease_of_access": 6,
        "images": [
            "Sydney/0.jpg"
        ],
        "attractions": [
            "Opera House",
            "Beaches",
            "Culture",
            "Nature",
            "Activities"
        ]
    },
    {
        "id": "0f74b13a-91cd-467d-8eb7-1d7b7f944e45",
        "name": "Nice",
        "eliminated": false,
        "country": "France",
        "temperature": "20°C",
        "population": "0.343M",
        "lat": 43.7102,
        "lon": 7.262,
        "escape_rooms": 6,
        "food": 9,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Nice/1.jpg",
            "Nice/0.jpg",
            "Nice/4.jpg",
            "Nice/6.jpg",
            "Nice/3.jpg",
            "Nice/2.jpg",
            "Nice/5.jpg"
        ],
        "attractions": [
            "Beaches",
            "Promenade",
            "Art",
            "Culture",
            "Cuisine"
        ]
    },
    {
        "id": "9d144c30-df88-4c62-8ef2-a99c9a03656b",
        "name": "Bodrum",
        "eliminated": true,
        "country": "Turkey",
        "temperature": "24°C",
        "population": "0.039M",
        "lat": 37.0379,
        "lon": 27.4305,
        "escape_rooms": 3,
        "food": 7,
        "safety": 8,
        "ease_of_access": 6,
        "images": [
            "Bodrum/0.jpg"
        ],
        "attractions": [
            "Beaches",
            "Nightlife",
            "History",
            "Culture",
            "Resorts"
        ]
    },
    {
        "id": "1bd168ea-6eac-43f4-a78c-4a7952a7eef6",
        "name": "Busan",
        "eliminated": false,
        "country": "South Korea",
        "temperature": "23°C",
        "population": "3.4M",
        "lat": 35.1796,
        "lon": 129.0756,
        "escape_rooms": 7,
        "food": 8,
        "safety": 8,
        "ease_of_access": 7,
        "images": [
            "Busan/1.jpg",
            "Busan/0.jpg",
            "Busan/4.jpg",
            "Busan/3.jpg",
            "Busan/2.jpg"
        ],
        "attractions": [
            "Beaches",
            "Seafood",
            "Culture",
            "Markets",
            "Temples"
        ]
    },
    {
        "id": "f8e0bdae-5158-40d0-9bfd-d4f05dea67de",
        "name": "Kyoto",
        "eliminated": false,
        "country": null,
        "temperature": "24°C",
        "population": "2.7M",
        "lat": 34.6937,
        "lon": 135.5023,
        "escape_rooms": 9,
        "food": 9,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Kyoto/1.jpg",
            "Kyoto/0.jpg",
            "Kyoto/7.jpg",
            "Kyoto/4.jpg",
            "Kyoto/8.jpg",
            "Kyoto/6.jpg",
            "Kyoto/3.jpg",
            "Kyoto/9.jpg",
            "Kyoto/2.jpg",
            "Kyoto/5.jpg"
        ],
        "attractions": []
    },
    {
        "id": "f430c99e-06f3-4b1e-9229-3a2bb7b2d419",
        "name": "Da Nang",
        "eliminated": false,
        "country": "Vietnam",
        "temperature": "26°C",
        "population": "1.1M",
        "lat": 16.0678,
        "lon": 108.2201,
        "escape_rooms": 6,
        "food": 8,
        "safety": 7,
        "ease_of_access": 6,
        "images": [
            "Da Nang/0.jpg"
        ],
        "attractions": [
            "Beaches",
            "History",
            "Culture",
            "Mountains",
            "Food"
        ]
    },
    {
        "id": "c9a30e9b-b41b-4a2e-8b7e-f88e677f08fb",
        "name": "Manila",
        "eliminated": false,
        "country": "Philippines",
        "temperature": "28°C",
        "population": "1.78M",
        "lat": 14.5995,
        "lon": 120.9842,
        "escape_rooms": 7,
        "food": 8,
        "safety": 6,
        "ease_of_access": 6,
        "images": [
            "Manila/1.jpg",
            "Manila/0.jpg",
            "Manila/4.jpg",
            "Manila/3.jpg",
            "Manila/2.jpg",
            "Manila/5.jpg"
        ],
        "attractions": [
            "History",
            "Culture",
            "Food",
            "Nightlife",
            "Shopping"
        ]
    },
    {
        "id": "2a66c9f2-c9e7-4eb5-837f-b7a7b14f170a",
        "name": "Edinburgh",
        "eliminated": false,
        "country": "United Kingdom",
        "temperature": "12°C",
        "population": "0.527M",
        "lat": 55.9533,
        "lon": -3.1883,
        "escape_rooms": 7,
        "food": 8,
        "safety": 9,
        "ease_of_access": 8,
        "images": [
            "Edinburgh/1.jpg",
            "Edinburgh/0.jpg",
            "Edinburgh/7.jpg",
            "Edinburgh/4.jpg",
            "Edinburgh/8.jpg",
            "Edinburgh/6.jpg",
            "Edinburgh/3.jpg",
            "Edinburgh/2.jpg",
            "Edinburgh/5.jpg"
        ],
        "attractions": [
            "History",
            "Festivals",
            "Architecture",
            "Culture",
            "Nature"
        ]
    },
    {
        "id": "cfbccb85-f5cf-4fa4-b57d-0e3014756c19",
        "name": "Athens",
        "eliminated": false,
        "country": "Greece",
        "temperature": "24°C",
        "population": "3.2M",
        "lat": 37.9838,
        "lon": 23.7275,
        "escape_rooms": 8,
        "food": 9,
        "safety": 7,
        "ease_of_access": 8,
        "images": [
            "Athens/1.jpg",
            "Athens/0.jpg",
            "Athens/7.jpg",
            "Athens/4.jpg",
            "Athens/8.jpg",
            "Athens/6.jpg",
            "Athens/3.jpg",
            "Athens/2.jpg",
            "Athens/5.jpg"
        ],
        "attractions": [
            "History",
            "Ancient ruins",
            "Culture",
            "Cuisine",
            "Nightlife"
        ]
    },
    {
        "id": "8f011caa-fd31-4b0a-ae42-3670448dfff1",
        "name": "Sapporo",
        "eliminated": false,
        "country": "Japan",
        "temperature": "18°C",
        "population": "1.9M",
        "lat": 43.0618,
        "lon": 141.3545,
        "escape_rooms": 8,
        "food": 8,
        "safety": 9,
        "ease_of_access": 7,
        "images": [
            "Sapporo/1.jpg",
            "Sapporo/0.jpg",
            "Sapporo/4.jpg",
            "Sapporo/3.jpg",
            "Sapporo/2.jpg"
        ],
        "attractions": [
            "Snow",
            "Beer",
            "Food",
            "Festivals",
            "Nature"
        ]
    },
    {
        "id": "61cc2b4b-3f8c-4844-b6fd-fde111aaecc0",
        "name": "Beijing",
        "eliminated": true,
        "country": "China",
        "temperature": "21°C",
        "population": "21M",
        "lat": 39.9042,
        "lon": 116.4074,
        "escape_rooms": 8,
        "food": 8,
        "safety": 6,
        "ease_of_access": 5,
        "images": [
            "Beijing/1.jpg",
            "Beijing/0.jpg",
            "Beijing/4.jpg",
            "Beijing/3.jpg",
            "Beijing/2.jpg",
            "Beijing/5.jpg"
        ],
        "attractions": [
            "Great Wall",
            "Culture",
            "History",
            "Cuisine",
            "Architecture"
        ]
    },
    {
        "id": "398b0b26-4e2d-40ff-a954-e5652aaffa60",
        "name": "Cairo",
        "eliminated": true,
        "country": "Egypt",
        "temperature": "26°C",
        "population": "20.5M",
        "lat": 30.0444,
        "lon": 31.2357,
        "escape_rooms": 5,
        "food": 8,
        "safety": 5,
        "ease_of_access": 5,
        "images": [
            "Cairo/1.jpg",
            "Cairo/0.jpg",
            "Cairo/7.jpg",
            "Cairo/4.jpg",
            "Cairo/8.jpg",
            "Cairo/6.jpg",
            "Cairo/3.jpg",
            "Cairo/9.jpg",
            "Cairo/2.jpg",
            "Cairo/5.jpg"
        ],
        "attractions": [
            "Pyramids",
            "History",
            "Culture",
            "Museums",
            "Markets"
        ]
    },
    {
        "id": "e6fa214c-9ed0-4522-810f-6e68d22495e1",
        "name": "Berlin",
        "eliminated": false,
        "country": "Germany",
        "temperature": "16°C",
        "population": "3.7M",
        "lat": 52.52,
        "lon": 13.405,
        "escape_rooms": 8,
        "food": 9,
        "safety": 8,
        "ease_of_access": 8,
        "images": [
            "Berlin/1.jpg",
            "Berlin/0.jpg",
            "Berlin/7.jpg",
            "Berlin/4.jpg",
            "Berlin/6.jpg",
            "Berlin/3.jpg",
            "Berlin/2.jpg",
            "Berlin/5.jpg"
        ],
        "attractions": [
            "History",
            "Culture",
            "Nightlife",
            "Art",
            "Architecture"
        ]
    },
    {
        "id": "9a7b5912-8847-4aca-8fbc-c5c6147a0400",
        "name": "Cape Town",
        "eliminated": false,
        "country": "South Africa",
        "temperature": "15°C",
        "population": "4.6M",
        "lat": -33.9249,
        "lon": 18.4241,
        "escape_rooms": 6,
        "food": 9,
        "safety": 6,
        "ease_of_access": 6,
        "images": [
            "Cape Town/1.jpg",
            "Cape Town/0.jpg",
            "Cape Town/4.jpg",
            "Cape Town/3.jpg",
            "Cape Town/2.jpg",
            "Cape Town/5.jpg"
        ],
        "attractions": [
            "Table Mountain",
            "Wine",
            "Beaches",
            "Culture",
            "Nature"
        ]
    },
    {
        "id": "e9ca1276-437d-4055-84e7-b7983e467d28",
        "name": "Shanghai",
        "eliminated": false,
        "country": "China",
        "temperature": "25°C",
        "population": "24M",
        "lat": 31.2242826,
        "lon": 121.48707,
        "escape_rooms": 9,
        "food": 9,
        "safety": 7,
        "ease_of_access": 6,
        "images": [
            "Shanghai/1.jpg",
            "Shanghai/0.jpg",
            "Shanghai/4.jpg",
            "Shanghai/3.jpg",
            "Shanghai/2.jpg",
            "Shanghai/5.jpg"
        ],
        "attractions": [
            "Skyline",
            "Culture",
            "Shopping",
            "History",
            "Food"
        ]
    }
]