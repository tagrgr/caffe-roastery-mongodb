// 3.0 Database - creating MongoDB database
db = db.getSiblingDB("caffeRoasteryMongo_20119203");

// Reset database so script can be run again from the start
db.dropDatabase()

// 3.1 Collections - creating suppliers collection
db.createCollection("suppliers", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "supplierName",
                "contactName",
                "emailAddress",
                "contactNumber"
            ],
            properties: {
                _id: {
                    bsonType: "int"
                },

                supplierName: {
                    bsonType: "string"
                },

                contactName: {
                    bsonType: "string"
                },

                address: {
                    bsonType: "object",
                    required: [
                        "street",
                        "city",
                        "county",
                        "eircode"
                    ],
                    properties: {
                        street: {
                            bsonType: "string"
                        },

                        city: {
                            bsonType: "string"
                        },

                        county: {
                            bsonType: "string"
                        },

                        eircode: {
                            bsonType: "string"
                        }
                    }
                },

                emailAddress: {
                    bsonType: "string"
                },

                contactNumber: {
                    bsonType: "string"
                }
            }
        }
    }
})

// 3.1 Collections - creating rawBeans collection
db.createCollection("rawBeans", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "beanName",
                "originCountry",
                "processingMethod",
                "costPerKg",
                "stockQty",
                "supplierId"
            ],
            properties: {
                _id: {
                    bsonType: "int"
                },

                beanName: {
                    bsonType: "string"
                },

                originCountry: {
                    bsonType: "string"
                },

                processingMethod: {
                    bsonType: "string"
                },

                costPerKg: {
                    bsonType: ["double", "int"]
                },

                stockQty: {
                    bsonType: "int"
                },

                supplierId: {
                    bsonType: "int"
                }
            }
        }
    }
})

// 3.1 Collections - creating products collection
db.createCollection("products", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "productName",
                "roastLevel",
                "packageSize",
                "unitPrice",
                "isActive",
                "beans",
                "roastBatches"
            ],
            properties: {

                _id: {
                    bsonType: "int"
                },

                productName: {
                    bsonType: "string"
                },

                roastLevel: {
                    bsonType: "string"
                },

                packageSize: {
                    bsonType: "string"
                },

                unitPrice: {
                    bsonType: ["double", "int"]
                },

                isActive: {
                    bsonType: "bool"
                },

                beans: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: [
                            "beanId",
                            "beanName",
                            "qtyUsed"
                        ],
                        properties: {

                            beanId: {
                                bsonType: "int"
                            },

                            beanName: {
                                bsonType: "string"
                            },

                            qtyUsed: {
                                bsonType: "int"
                            }
                        }
                    }
                },

                roastBatches: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: [
                            "batchId",
                            "roastDate",
                            "batchQty",
                            "roastProfile",
                            "employeeName"
                        ],
                        properties: {

                            batchId: {
                                bsonType: "int"
                            },

                            roastDate: {
                                bsonType: "string"
                            },

                            batchQty: {
                                bsonType: "int"
                            },

                            roastProfile: {
                                bsonType: "string"
                            },

                            employeeName: {
                                bsonType: "string"
                            }
                        }
                    }
                }
            }
        }
    }
})

// 3.2 Documents - inserting supplier documents
db.suppliers.insertMany([

    {
        _id: 1,
        supplierName: "Global Bean Imports",
        contactName: "Maria Costa",
        address: {
            street: "12 Market Street",
            city: "Dublin",
            county: "Dublin",
            eircode: "D01AB12"
        },
        emailAddress: "maria@globalbeans.ie",
        contactNumber: "0871234567"
    },

    {
        _id: 2,
        supplierName: "Premium Coffee Traders",
        contactName: "John Murphy",
        address: {
            street: "45 River Road",
            city: "Cork",
            county: "Cork",
            eircode: "T12CD34"
        },
        emailAddress: "john@premiumcoffee.ie",
        contactNumber: "0862345678"
    },

    {
        _id: 3,
        supplierName: "Roast Source Europe",
        contactName: "Sarah Kelly",
        address: {
            street: "8 Green Avenue",
            city: "Galway",
            county: "Galway",
            eircode: "H91EF56"
        },
        emailAddress: "sarah@roastsource.ie",
        contactNumber: "0853456789"
    },

    {
        _id: 4,
        supplierName: "Bean Harvest Ltd",
        contactName: "Carlos Silva",
        address: {
            street: "22 Oak Street",
            city: "Limerick",
            county: "Limerick",
            eircode: "V94GH78"
        },
        emailAddress: "carlos@beanharvest.ie",
        contactNumber: "0874567890"
    },

    {
        _id: 5,
        supplierName: "Artisan Bean Supply",
        contactName: "Emma Byrne",
        address: {
            street: "3 Coffee Lane",
            city: "Waterford",
            county: "Waterford",
            eircode: "X91JK90"
        },
        emailAddress: "emma@artisanbeans.ie",
        contactNumber: "0865678901"
    }

])

// 3.2 Documents - inserting rawBeans documents
db.rawBeans.insertMany([

    {
        _id: 101,
        beanName: "Colombian Supremo",
        originCountry: "Colombia",
        processingMethod: "Washed",
        costPerKg: 12.50,
        stockQty: 250,
        supplierId: 1
    },

    {
        _id: 102,
        beanName: "Ethiopian Yirgacheffe",
        originCountry: "Ethiopia",
        processingMethod: "Natural",
        costPerKg: 14.20,
        stockQty: 180,
        supplierId: 2
    },

    {
        _id: 103,
        beanName: "Brazil Santos",
        originCountry: "Brazil",
        processingMethod: "Pulped Natural",
        costPerKg: 11.80,
        stockQty: 320,
        supplierId: 3
    },

    {
        _id: 104,
        beanName: "Kenya AA",
        originCountry: "Kenya",
        processingMethod: "Washed",
        costPerKg: 15.00,
        stockQty: 140,
        supplierId: 2
    },

    {
        _id: 105,
        beanName: "Guatemala Antigua",
        originCountry: "Guatemala",
        processingMethod: "Washed",
        costPerKg: 13.40,
        stockQty: 200,
        supplierId: 4
    },

    {
        _id: 106,
        beanName: "Sumatra Mandheling",
        originCountry: "Indonesia",
        processingMethod: "Wet Hulled",
        costPerKg: 16.10,
        stockQty: 90,
        supplierId: 5
    },

    {
        _id: 107,
        beanName: "Costa Rica Tarrazu",
        originCountry: "Costa Rica",
        processingMethod: "Honey",
        costPerKg: 13.90,
        stockQty: 170,
        supplierId: 1
    },

    {
        _id: 108,
        beanName: "Peru Organic",
        originCountry: "Peru",
        processingMethod: "Washed",
        costPerKg: 12.70,
        stockQty: 210,
        supplierId: 3
    },

    {
        _id: 109,
        beanName: "Rwanda Bourbon",
        originCountry: "Rwanda",
        processingMethod: "Natural",
        costPerKg: 14.80,
        stockQty: 130,
        supplierId: 4
    },

    {
        _id: 110,
        beanName: "Mexico Chiapas",
        originCountry: "Mexico",
        processingMethod: "Washed",
        costPerKg: 11.90,
        stockQty: 260,
        supplierId: 5
    }

])

// 3.2 Documents - inserting products documents
db.products.insertMany([

    {
        _id: 201,
        productName: "House Espresso Blend",
        roastLevel: "Medium",
        packageSize: "1kg",
        unitPrice: 24.99,
        isActive: true,
        beans: [
            {
                beanId: 101,
                beanName: "Colombian Supremo",
                qtyUsed: 60
            },
            {
                beanId: 103,
                beanName: "Brazil Santos",
                qtyUsed: 40
            }
        ],
        roastBatches: [
            {
                batchId: 501,
                roastDate: "2026-05-01",
                batchQty: 30,
                roastProfile: "Medium Slow Roast",
                employeeName: "John Murphy"
            },
            {
                batchId: 502,
                roastDate: "2026-05-10",
                batchQty: 25,
                roastProfile: "Balanced Espresso Roast",
                employeeName: "Sarah Kelly"
            }
        ]
    },

    {
        _id: 202,
        productName: "Dark Italian Roast",
        roastLevel: "Dark",
        packageSize: "500g",
        unitPrice: 19.99,
        isActive: true,
        beans: [
            {
                beanId: 106,
                beanName: "Sumatra Mandheling",
                qtyUsed: 70
            },
            {
                beanId: 104,
                beanName: "Kenya AA",
                qtyUsed: 30
            }
        ],
        roastBatches: [
            {
                batchId: 503,
                roastDate: "2026-05-03",
                batchQty: 20,
                roastProfile: "Heavy Dark Roast",
                employeeName: "Emma Byrne"
            }
        ]
    },

    {
        _id: 203,
        productName: "Morning Filter Blend",
        roastLevel: "Light",
        packageSize: "1kg",
        unitPrice: 22.50,
        isActive: true,
        beans: [
            {
                beanId: 102,
                beanName: "Ethiopian Yirgacheffe",
                qtyUsed: 50
            },
            {
                beanId: 107,
                beanName: "Costa Rica Tarrazu",
                qtyUsed: 50
            }
        ],
        roastBatches: [
            {
                batchId: 504,
                roastDate: "2026-05-05",
                batchQty: 28,
                roastProfile: "Light Citrus Roast",
                employeeName: "Carlos Silva"
            }
        ]
    },

    {
        _id: 204,
        productName: "Brazilian Breakfast Roast",
        roastLevel: "Medium",
        packageSize: "500g",
        unitPrice: 18.50,
        isActive: true,
        beans: [
            {
                beanId: 103,
                beanName: "Brazil Santos",
                qtyUsed: 80
            },
            {
                beanId: 110,
                beanName: "Mexico Chiapas",
                qtyUsed: 20
            }
        ],
        roastBatches: [
            {
                batchId: 505,
                roastDate: "2026-05-07",
                batchQty: 35,
                roastProfile: "Smooth Medium Roast",
                employeeName: "John Murphy"
            }
        ]
    },

    {
        _id: 205,
        productName: "Single Origin Kenya",
        roastLevel: "Light",
        packageSize: "250g",
        unitPrice: 12.99,
        isActive: true,
        beans: [
            {
                beanId: 104,
                beanName: "Kenya AA",
                qtyUsed: 100
            }
        ],
        roastBatches: [
            {
                batchId: 506,
                roastDate: "2026-05-09",
                batchQty: 18,
                roastProfile: "Bright Light Roast",
                employeeName: "Sarah Kelly"
            }
        ]
    },

    {
        _id: 206,
        productName: "Organic Peru Blend",
        roastLevel: "Medium",
        packageSize: "1kg",
        unitPrice: 23.75,
        isActive: true,
        beans: [
            {
                beanId: 108,
                beanName: "Peru Organic",
                qtyUsed: 70
            },
            {
                beanId: 105,
                beanName: "Guatemala Antigua",
                qtyUsed: 30
            }
        ],
        roastBatches: [
            {
                batchId: 507,
                roastDate: "2026-05-11",
                batchQty: 24,
                roastProfile: "Organic Medium Roast",
                employeeName: "Carlos Silva"
            }
        ]
    },

    {
        _id: 207,
        productName: "Rwanda Natural Espresso",
        roastLevel: "Medium",
        packageSize: "500g",
        unitPrice: 20.99,
        isActive: true,
        beans: [
            {
                beanId: 109,
                beanName: "Rwanda Bourbon",
                qtyUsed: 60
            },
            {
                beanId: 101,
                beanName: "Colombian Supremo",
                qtyUsed: 40
            }
        ],
        roastBatches: [
            {
                batchId: 508,
                roastDate: "2026-05-13",
                batchQty: 22,
                roastProfile: "Fruity Espresso Roast",
                employeeName: "Emma Byrne"
            }
        ]
    },

    {
        _id: 208,
        productName: "Sumatra Dark Reserve",
        roastLevel: "Dark",
        packageSize: "1kg",
        unitPrice: 27.50,
        isActive: true,
        beans: [
            {
                beanId: 106,
                beanName: "Sumatra Mandheling",
                qtyUsed: 90
            },
            {
                beanId: 103,
                beanName: "Brazil Santos",
                qtyUsed: 10
            }
        ],
        roastBatches: [
            {
                batchId: 509,
                roastDate: "2026-05-15",
                batchQty: 26,
                roastProfile: "Deep Dark Roast",
                employeeName: "John Murphy"
            }
        ]
    },

    {
        _id: 209,
        productName: "Central America Blend",
        roastLevel: "Light",
        packageSize: "500g",
        unitPrice: 21.50,
        isActive: false,
        beans: [
            {
                beanId: 105,
                beanName: "Guatemala Antigua",
                qtyUsed: 50
            },
            {
                beanId: 107,
                beanName: "Costa Rica Tarrazu",
                qtyUsed: 50
            }
        ],
        roastBatches: [
            {
                batchId: 510,
                roastDate: "2026-05-17",
                batchQty: 16,
                roastProfile: "Sweet Light Roast",
                employeeName: "Sarah Kelly"
            }
        ]
    },

    {
        _id: 210,
        productName: "Mexican Decaf Roast",
        roastLevel: "Medium",
        packageSize: "250g",
        unitPrice: 10.99,
        isActive: false,
        beans: [
            {
                beanId: 110,
                beanName: "Mexico Chiapas",
                qtyUsed: 100
            }
        ],
        roastBatches: [
            {
                batchId: 511,
                roastDate: "2026-05-19",
                batchQty: 14,
                roastProfile: "Gentle Medium Roast",
                employeeName: "Carlos Silva"
            }
        ]
    }
])

// 3.3 Find Queries - find active products with a unit price greater than 20
db.products.find(
    {
        isActive: true,
        unitPrice: {
            $gt: 20
        }
    },
    {
        productName: 1,
        roastLevel: 1,
        unitPrice: 1,
        _id: 0
    }
);


// 3.3 Find Queries - find raw beans from selected origin countries
db.rawBeans.find(
    {
        originCountry: {
            $in: ["Colombia", "Brazil", "Ethiopia"]
        }
    },
    {
        beanName: 1,
        originCountry: 1,
        stockQty: 1,
        _id: 0
    }
);


// 3.3 Find Queries - find products that use Brazil Santos with at least 40 percent quantity
db.products.find(
    {
        beans: {
            $elemMatch: {
                beanName: "Brazil Santos",
                qtyUsed: {
                    $gte: 40
                }
            }
        }
    },
    {
        productName: 1,
        beans: 1,
        _id: 0
    }
);


// 3.3 Find Queries - find low stock beans and sort by stock quantity
db.rawBeans.find(
    {
        stockQty: {
            $lte: 180
        }
    },
    {
        beanName: 1,
        originCountry: 1,
        stockQty: 1,
        _id: 0
    }
).sort({
    stockQty: 1
});


// 3.3 Find Queries - count active medium roast products
db.products.countDocuments({
    isActive: true,
    roastLevel: "Medium"
});