# IaaS

_This day is really light on content so we’ll probably build some node projects._

Digital Ocean  
Amazon AWE  
MS Azure  
Google Compute Engine  

Infrastructure as a Service
- https://en.wikipedia.org/wiki/Cloud_computing#Infrastructure_as_a_service_.28IaaS.29
- Mostly just the hardware

### Projects
VHS Store

Requirements

_It might help to design your server code out with pseudo-code or diagrams_

1. A movie must have a title and a year
- List all movies (API)
- Add a movie (API)
- Remove a movie (API)
- Edit a movie (API)
- Search and list matches on movie titles (API)
	- Have an indicator that a movie is checked out
- Check out a movie (API)
	- Cannot check out a movie that is already checked out
- Check in a movie (API)
- Save all movies as JSON to a file
	- Save on each create/update/delete API call
	- When servers starts it should load this file into memory
