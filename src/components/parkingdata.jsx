const parkingdata = [{
    parking_id: 1,
    parking_name: "Bashkia Parking",
    street_name: "Bajram Curri Boulevard",
    total_spaces: 100,
    free_spaces: 45,
    occupied_spaces: 55,
    lon: 19.819590,
    lat: 41.331049,
    spaces: [
      {space_id: 1, is_free: true},
      {space_id: 2, is_free: true},
      {space_id: 3, is_free: false}
    ]
  },
  {
    parking_id: 2,
    parking_name: "Wilson Parking",
    street_name: "Wilson Square",
    total_spaces: 80,
    free_spaces: 25,
    occupied_spaces: 55,
    lon: 19.815862,
    lat: 41.322780,
    spaces: [
      {space_id: 1, is_free: false},
      {space_id: 2, is_free: true},
      {space_id: 3, is_free: false}
    ]
  },
  {
    parking_id: 3,
    parking_name: "Grand Park Parking",
    street_name: "Rruga e Elbasanit",
    total_spaces: 120,
    free_spaces: 80,
    occupied_spaces: 40,
    lon: 19.816964,
    lat: 41.320478,
    spaces: [
      {space_id: 1, is_free: true},
      {space_id: 2, is_free: true},
      {space_id: 3, is_free: true}
    ]
  },
  {
    parking_id: 4,
    parking_name: "Central Market Parking",
    street_name: "Rruga Kavajes",
    total_spaces: 150,
    free_spaces: 70,
    occupied_spaces: 80,
    lon: 19.822334,
    lat: 41.327103,
    spaces: [
      {space_id: 4, is_free: false},
      {space_id: 5, is_free: true},
      {space_id: 6, is_free: false}
    ]
  },
  
  {
    parking_id: 5,
    parking_name: "East Gate Parking",
    street_name: "Rruga Elbasanit",
    total_spaces: 200,
    free_spaces: 120,
    occupied_spaces: 80,
    lon: 19.833290,
    lat: 41.320556,
    spaces: [
      {space_id: 7, is_free: true},
      {space_id: 8, is_free: false},
      {space_id: 9, is_free: true}
    ]
  },
  {
    parking_id: 6,
    parking_name: "Lakefront Parking",
    street_name: "Rruga Liqeni i Thate",
    total_spaces: 80,
    free_spaces: 25,
    occupied_spaces: 55,
    lon: 19.838455,
    lat: 41.316691,
    spaces: [
      {space_id: 10, is_free: false},
      {space_id: 11, is_free: true},
      {space_id: 12, is_free: false}
    ]
  },
  {
    parking_id: 7,
    parking_name: "Tech Park Parking",
    street_name: "Rruga Asim Vokshi",
    total_spaces: 120,
    free_spaces: 60,
    occupied_spaces: 60,
    lon: 19.801123,
    lat: 41.322987,
    spaces: [
      {space_id: 13, is_free: true},
      {space_id: 14, is_free: false},
      {space_id: 15, is_free: true}
    ]
  },
  {
    parking_id: 8,
    parking_name: "City Mall Parking",
    street_name: "Blvd. Gjergj Fishta",
    total_spaces: 300,
    free_spaces: 180,
    occupied_spaces: 120,
    lon: 19.820999,
    lat: 41.331500,
    spaces: [
      {space_id: 16, is_free: true},
      {space_id: 17, is_free: true},
      {space_id: 18, is_free: false}
    ]
  },
  
  {
    parking_id: 9,
    parking_name: "University Square Parking",
    street_name: "Rruga Sami Frasheri",
    total_spaces: 90,
    free_spaces: 45,
    occupied_spaces: 45,
    lon: 19.837456,
    lat: 41.317634,
    spaces: [
      {space_id: 19, is_free: false},
      {space_id: 20, is_free: false},
      {space_id: 21, is_free: true}
    ]
  },
  {
    parking_id: 10,
    parking_name: "Opera House Parking",
    street_name: "Rruga Jul Variboba",
    total_spaces: 100,
    free_spaces: 40,
    occupied_spaces: 60,
    lon: 19.844321,
    lat: 41.328456,
    spaces: [
      {space_id: 31, is_free: false},
      {space_id: 32, is_free: true},
      {space_id: 33, is_free: false}
    ]
  },
  
  {
    parking_id: 11,
    parking_name: "Historic District Parking",
    street_name: "Rruga Mujo Ulqinaku",
    total_spaces: 75,
    free_spaces: 30,
    occupied_spaces: 45,
    lon: 19.847210,
    lat: 41.324589,
    spaces: [
      {space_id: 34, is_free: true},
      {space_id: 35, is_free: false},
      {space_id: 36, is_free: true}
    ]
  },
  
  {
    parking_id: 12,
    parking_name: "City Park Parking",
    street_name: "Rruga Siri Kodra",
    total_spaces: 150,
    free_spaces: 75,
    occupied_spaces: 75,
    lon: 19.820456,
    lat: 41.329876,
    spaces: [
      {space_id: 37, is_free: true},
      {space_id: 38, is_free: false},
      {space_id: 39, is_free: true}
    ]
  },
  
  {
    parking_id: 13,
    parking_name: "Stadium Area Parking",
    street_name: "Rruga Qemal Stafa",
    total_spaces: 200,
    free_spaces: 100,
    occupied_spaces: 100,
    lon: 19.813245,
    lat: 41.330987,
    spaces: [
      {space_id: 40, is_free: false},
      {space_id: 41, is_free: true},
      {space_id: 42, is_free: false}
    ]
  },
  
  {
    parking_id: 14,
    parking_name: "Library Parking",
    street_name: "Rruga Mihal Duri",
    total_spaces: 50,
    free_spaces: 20,
    occupied_spaces: 30,
    lon: 19.835789,
    lat: 41.322345,
    spaces: [
      {space_id: 43, is_free: true},
      {space_id: 44, is_free: false},
      {space_id: 45, is_free: true}
    ]
  },
  {
    parking_id: 15,
    parking_name: "Market Square Parking",
    street_name: "Rruga Frederik Shiroka",
    total_spaces: 80,
    free_spaces: 35,
    occupied_spaces: 45,
    lon: 19.822678,
    lat: 41.336789,
    spaces: [
      {space_id: 46, is_free: false},
      {space_id: 47, is_free: true},
      {space_id: 48, is_free: false}
    ]
  },
  {
    parking_id: 16,
    parking_name: "Green Park Parking",
    street_name: "Rruga Dritan Hoxha",
    total_spaces: 120,
    free_spaces: 60,
    occupied_spaces: 60,
    lon: 19.808990,
    lat: 41.328900,
    spaces: [
      {space_id: 49, is_free: true},
      {space_id: 50, is_free: false},
      {space_id: 51, is_free: true}
    ]
  },
  {
    parking_id: 17,
    parking_name: "Riverside Parking",
    street_name: "Rruga Taulantia",
    total_spaces: 90,
    free_spaces: 45,
    occupied_spaces: 45,
    lon: 19.837001,
    lat: 41.317203,
    spaces: [
      {space_id: 52, is_free: false},
      {space_id: 53, is_free: true},
      {space_id: 54, is_free: false}
    ]
  },
  
  {
    parking_id: 18,
    parking_name: "Court House Parking",
    street_name: "Rruga Avni Rustemi",
    total_spaces: 70,
    free_spaces: 35,
    occupied_spaces: 35,
    lon: 19.845123,
    lat: 41.334456,
    spaces: [
      {space_id: 55, is_free: true},
      {space_id: 56, is_free: false},
      {space_id: 57, is_free: true}
    ]
  },
  
  {
    parking_id: 19,
    parking_name: "Convention Center Parking",
    street_name: "Blvd. Zogu I",
    total_spaces: 150,
    free_spaces: 75,
    occupied_spaces: 75,
    lon: 19.818234,
    lat: 41.342789,
    spaces: [
      {space_id: 58, is_free: false},
      {space_id: 59, is_free: true},
      {space_id: 60, is_free: false}
    ]
  },
  {
    parking_id: 20,
    parking_name: "City Hall Parking",
    street_name: "Rruga Pazari i Ri",
    total_spaces: 100,
    free_spaces: 50,
    occupied_spaces: 50,
    lon: 19.830456,
    lat: 41.337678,
    spaces: [
      {space_id: 61, is_free: true},
      {space_id: 62, is_free: false},
      {space_id: 63, is_free: true}
    ]
  },
  {
    parking_id: 21,
    parking_name: "Art Museum Parking",
    street_name: "Rruga Ibrahim Rugova",
    total_spaces: 85,
    free_spaces: 42,
    occupied_spaces: 43,
    lon: 19.821900,
    lat: 41.323600,
    spaces: [
      {space_id: 64, is_free: false},
      {space_id: 65, is_free: true},
      {space_id: 66, is_free: false}
    ]
  },
  
  {
    parking_id: 22,
    parking_name: "Botanical Gardens Parking",
    street_name: "Rruga Elbasani",
    total_spaces: 150,
    free_spaces: 75,
    occupied_spaces: 75,
    lon: 19.856789,
    lat: 41.319123,
    spaces: [
      {space_id: 67, is_free: true},
      {space_id: 68, is_free: false},
      {space_id: 69, is_free: true}
    ]
  },
  
  {
    parking_id: 23,
    parking_name: "Sports Complex Parking",
    street_name: "Rruga Kombetare",
    total_spaces: 200,
    free_spaces: 100,
    occupied_spaces: 100,
    lon: 19.845456,
    lat: 41.345789,
    spaces: [
      {space_id: 70, is_free: false},
      {space_id: 71, is_free: true},
      {space_id: 72, is_free: false}
    ]
  },
  
  {
    parking_id: 24,
    parking_name: "Exhibition Center Parking",
    street_name: "Rruga e Durresit",
    total_spaces: 120,
    free_spaces: 60,
    occupied_spaces: 60,
    lon: 19.834123,
    lat: 41.331456,
    spaces: [
      {space_id: 73, is_free: true},
      {space_id: 74, is_free: false},
      {space_id: 75, is_free: true}
    ]
  }
]

export default parkingdata