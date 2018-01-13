# Ocomis User UI

## Development

### Option 1: Dev Webserver including hot reloading

Start dev webserver, including hot reloading:

```
npm run dev
```

And then open `http://localhost:8080/user/Users`.

### Option 2: Production like HAPI Webserver

Compile code.

````
npm run compile
````

Start webserver.

```
NODE_ENV=development npm start
```

And then open `http://localhost:3001/user/Users`.

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
