1. Javascript Object notation
2. lightweight data format
3. easy to read and write
4. language independent
5. based ob js syntax
6. used for data communication
7. mostly for apis communication
8. rest , graphql , responses , request
9. storing config files in json
10. data storage
11. web & mobile apps

# basic structure

1. data is in key value pair format
2. keys are always in strings
3. "key" : value
4. value can be strong , number , boolean , arrays , object , null

# Example

{
    "name": "Anushka",
    "age": 27,
    "isEngineer": true,
    "skills": [
        "Html",
        "css",
        "js"
    ],
    "address": {
        "street": "1/24",
        "city": "delhi",
        "pincode": 121212
    }
}

# json rules

1. keys must be in double quotes
2. strings in double quotes
3. no comments are allowed
4. no trailing commas
5. data types : strings , numbers , boolean , arrays , objects , null

# json and js objects

1. json syntax is more strict type , data exchange , comments not allowed
2. js syntax is flexible , general programming , comments allowed

# Example - nested
{
"users" : [
    {
        "name" : "a" ,
        "age" : 25
    } ,
    {
        "name" : "b" ,
        "age" : 30
    } 
]
}

# json in javascript

