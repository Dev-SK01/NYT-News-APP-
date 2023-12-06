
# News Da Mapla

It RealTime Customized News Application. 


## More About News Da Mapla

- It Uses A New York Times API. We Use TimesWire API To Fetch The data From Server . 
- Index.html render the response.
- index.css Apply the styles to the rendered elements.
- JS folder have the all Scrpits to Run the Application .

- In JS File Named to the respective Data the fetch from server.





## API Reference

#### Get all items

```http
  GET /content/{source}/{section}.json
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /content.json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `section.json`      | `string` | **Required**. Section of item to fetch |

#### Section 

- https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=yourkey 
- gives You the Available sections to Fetch()

