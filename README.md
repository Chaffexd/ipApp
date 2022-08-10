# ipApp

> The idea behind this was to make and understand my own app that returned my IP for a useful function at work. I disliked Googling everytime "What is my IP?" so I thought, I'll make own and bookmark it. I could have done this with the first Google search but that doesn't help me learn, does it? 

## How to use
> Once you navigate to the site, it automatically works. No permissions needed. I am utilising an API from ipdata to retrieve the api on pageload and display it to the user on the site card. I then use another API to generate your location on a map this time. This will show you a very general area of where you are automatically using Mapbox. I use the coordinates generated in ipdata to pass that as the geolocation of the user in Mapbox so generate the map. 
>
>There is also a raw data tab that will show you the response from the API. This will show you a lot more information that is generated from the user.

## Preview
<img width="516" alt="ipProj" src="https://user-images.githubusercontent.com/67240269/183888720-cee1ed78-92b9-4373-bb68-0ed7e611c01c.png">

## See it live!
[Here!](https://ip-checker.shanechaffe.repl.co/)

> I do my best to use best practices to ensure everything I build is fast and responsive, after my first build we had promising scores.
> 
> <img width="563" alt="lighthouse" src="https://user-images.githubusercontent.com/67240269/183891831-91d994a5-18b5-4778-89df-e1bf8a2bbce7.png">
