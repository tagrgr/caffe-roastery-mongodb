// 3.0 Database - creating MongoDB database
use caffeRoastery_20119203

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
                    bsonType: "double"
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
                    bsonType: "double"
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