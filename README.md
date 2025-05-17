# Playtext API

## API documentation

### Register a new user

**URL**

/api/user/register

**Method:**

`POST`

**Body data:**

Must be sent as JSON.<br>
Required:
```JSON
{
    "name" : "string",
    "email" : "string",
    "password" : "string",
}
```
Optional:
```JSON
{
    "role" : "user" (default) or "admin"    
}
```

**Success response:**

Code: 201<br>
Content:

```JSON
{
    "success" : true,
    "message" : "New user registered successfully"
}
```
**Error responses:**

Code: 400 <br>
Content:

```JSON
{
    "success" : false,
    "message" : "User already exists - please log in instead!"            
}
```

Code: 400<br>
Content:

```JSON
{
    "success" : false,
    "message" : "Unable to register new user - please try again"            
}
```

Code: 500<br>
Content:

```JSON
{
    "success" : false,
    "message" : "Something went wrong! Please try again"            
}
```

### Log in an existing user

**URL**

/api/user/login

**Method:**

`POST`

**Body data:**

Must be sent as JSON.<br>
Required:
```JSON
{
    "email" : "string",
    "password" : "string",
}
```
Optional:<br>
There are no optional body parameters.

**Success response:**

Code: 200<br>
Content:

```JSON
{
    "success" : true,
    "message" : "User logged in successfully"
}
```
**Error responses:**

Code: 400 <br>
Content:

```JSON
{
    "success" : false,
    "message" : "User does not exist - please register instead!"            
}
```

Code: 400 <br>
Content:

```JSON
{
    "success" : false,
    "message" : "Invalid credentials"            
}
```

Code: 500<br>
Content:

```JSON
{
    "success" : false,
    "message" : "Something went wrong! Please try again"            
}
```

### Return all playtexts

**Authentication required** - must be a registered user

**URL**

/api/plays

**Method:**

`GET`

**Success response:**

Code: 200<br>
Content:

```JSON
{
    "success" : true,
    "message" : "All plays retrieved successfully",
    "data" : {
        "_id" : "6828afecefa949f5230b3894",
        "title" : "Title",
        "playwright" : "Playwright",
        "year" : 2025,
        "synopsis" : "Synopsis",
        "castSize" : 4,
        "publisher" : "Unknown" (default),
        "createdAt" : "2025-05-17T15:49:00.942Z",
        "__v" : 0
    },
    "user" : {
        "_id" : "68289136de7df3b7a6466595",
        "name" : "testUser",
        "role" : "user"
    }
    
}
```

**Error responses:**

Code: 404<br>
Content:

```JSON
{
    "success" : false,
    "message" : "No plays found"
}
```

Code: 500<br>
Content:

```JSON
{
    "success" : false,
    "message" : "Something went wrong! Please try again"            
}
```

### Return a specific playtext

**Authentication required** - must be a registered user

**URL**

/api/plays/:id

**Method:**

`GET`

**Success response:**

Code: 200<br>
Content:

```JSON
{
    "success" : true,
    "message" : "Play retrieved successfully",
    "data" : {
        "_id" : "6828afecefa949f5230b3894",
        "title" : "Title",
        "playwright" : "Playwright",
        "year" : 2025,
        "synopsis" : "Synopsis",
        "castSize" : 4,
        "publisher" : "Unknown" (default),
        "createdAt" : "2025-05-17T15:49:00.942Z",
        "__v" : 0
    },
    "user" : {
        "_id" : "68289136de7df3b7a6466595",
        "name" : "testUser",
        "role" : "user"
    }
    
}
```

**Error responses:**

Code: 404<br>
Content:

```JSON
{
    "success" : false,
    "message" : "Play not found!"
}
```

Code: 500<br>
Content:

```JSON
{
    "success" : false,
    "message" : "Something went wrong! Please try again"            
}
```

### Add a new playtext

**Authorisation required** - must be an admin user

**URL**

/api/plays/add

**Method:**

`POST`

**Body data:**

Must be sent as JSON.<br>
Required: 
```JSON
{
    "title" : "string",
    "playwright" : "string",
    "year" : 2025,
}
```

Optional:
```JSON
{    
    "synopsis" : "string",
    "castSize" : 4,
    "publisher" : "string"
}
```

**Success response:**

Code: 201<br>
Content:

```JSON
{
    "success" : true,
    "message" : "New play added successfully",
    "data" : {
        "_id" : "6828afecefa949f5230b3894",
        "title" : "Title",
        "playwright" : "Playwright",
        "year" : 2025,
        "synopsis" : "Synopsis",
        "castSize" : 4,
        "publisher" : "Unknown" (default),
        "createdAt" : "2025-05-17T15:49:00.942Z",
        "__v" : 0
    },
    "user" : {
        "_id" : "68289136de7df3b7a6466595",
        "name" : "testUser",
        "role" : "user"
    }
    
}
```

**Error response:**

Code: 500<br>
Content:

```JSON
{
    "success" : false,
    "message" : "Something went wrong! Please try again"            
}
```

### Update a playtext

**Authorisation required** - must be an admin user

**URL**

/api/plays/update/:id

**Method:**

`PUT`

**Body data:**

Must be sent as JSON.<br>
Required: <br>
There are no required body parameters.

Optional:
```JSON
{
    "title" : "string",
    "playwright" : "string",
    "year" : 2025,
    "synopsis" : "string",
    "castSize" : 4,
    "publisher" : "string"
}
```

**Success response:**

Code: 200<br>
Content:

```JSON
{
    "success" : true,
    "message" : "Play updated successfully",
    "data" : {
        "_id" : "6828afecefa949f5230b3894",
        "title" : "Title",
        "playwright" : "Playwright",
        "year" : 2025,
        "synopsis" : "Synopsis",
        "castSize" : 4,
        "publisher" : "Unknown" (default),
        "createdAt" : "2025-05-17T15:49:00.942Z",
        "__v" : 0
    },
    "user" : {
        "_id" : "68289136de7df3b7a6466595",
        "name" : "testUser",
        "role" : "user"
    }
    
}
```

**Error responses:**

Code: 400<br>
Content:

```JSON
{
    "success" : false,
    "message" : "No data sent - nothing to update!"
}
```

Code: 404<br>
Content:

```JSON
{
    "success" : false,
    "message" : "Play not found!"
}
```

Code: 500<br>
Content:

```JSON
{
    "success" : false,
    "message" : "Something went wrong! Please try again"            
}
```

### Delete a playtext

**Authorisation required** - must be an admin user

**URL**

/api/plays/delete/:id

**Method:**

`DELETE`

**Success response:**

Code: 200<br>
Content:

```JSON
{
    "success" : true,
    "message" : "Play deleted",
    "data" : {
        "_id" : "6828afecefa949f5230b3894",
        "title" : "Title",
        "playwright" : "Playwright",
        "year" : 2025,
        "synopsis" : "Synopsis",
        "castSize" : 4,
        "publisher" : "Unknown" (default),
        "createdAt" : "2025-05-17T15:49:00.942Z",
        "__v" : 0
    },
    "user" : {
        "_id" : "68289136de7df3b7a6466595",
        "name" : "testUser",
        "role" : "user"
    }
    
}
```

**Error responses:**

Code: 404<br>
Content:

```JSON
{
    "success" : false,
    "message" : "Play not found!"
}
```

Code: 500<br>
Content:

```JSON
{
    "success" : false,
    "message" : "Something went wrong! Please try again"            
}
```