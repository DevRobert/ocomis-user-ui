# Ocomis User UI

## Development

Start dev webserver, including hot reloading:

```
npm run dev
```

And then open `http://localhost:8080/user/Users`.

## Redux State

### users

* list[]
    * id
    * name
* isLoading
* errorMessage
* details
    * id
    * name
    * hasPassword
    * isLoading
    * errorMessage
* create
    * name
    * isSubmitting
    * errorMessage
* update
    * name
