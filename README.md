# API LINK 
## [https://phone-check-demo.herokuapp.com/api/phone-book/](https://phone-check-demo.herokuapp.com/api/phone-book/)

# Data formats
### ID 
Is an 12 byte string or 24 hexadecimal charctars EX: `5dae0381dcb3c23a1884ce0f`

### Phone number 
Is a 9 digit number starting with 1 or 9 explicitly EX: `999808260`


# Routes

## Get requsts 
### All phones 
`GET https://phone-check-demo.herokuapp.com/api/phone-book/`

### Single phone 
`GET https://phone-check-demo.herokuapp.com/api/phone-book/<search_tirm>`
**search_tirm** might be a phone number or an ID 

## Post requsts
### Add new phone
`POST https://phone-check-demo.herokuapp.com/api/phone-book/`

Requist body must be an JSON opject in the format: `{ number: <phone_number> }`

## Put requsts 
### Update a phone number 
`PUT https://phone-check-demo.herokuapp.com/api/phone-book/<search_tirm>`

**search_tirm** might be a phone number or an ID 
and the requist body must be an JSON opject in the format: `{ number: <phone_number> }`

## Delete requsts 
### Delete a phone number 
`DELET https://phone-check-demo.herokuapp.com/api/phone-book/<search_tirm>`

**search_tirm** might be a phone number or an ID 
