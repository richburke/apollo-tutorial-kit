### Step 03: Hook up to MongoDB

_Started: September 10, 2017_  
_Finished: September 10, 2017_  

1. Follow along tutorial
	1. Hook up to MongoDB

Sample query
```
{
  author(firstName: "Heidi") {
    firstName,
    lastName,
    posts{
      title,
      content,
      views,
      author {
        firstName,
        lastName
      }
    }
  }
}
```
	