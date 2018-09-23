# ECE USC Website
[Hosted live here!](http://eceusc.ucsd.edu)

## Run Locally

``` bash
git clone git@github.com:eceusc/eceusc.ucsd.edu.git
cd eceusc.ucsd.edu/
python -m SimpleHTTPServer 8000

```

## Deploying
Whatever is on the `master` branch of the [original repo](https://github.com/eceusc/eceusc.ucsd.edu)
will appear on http://eceusc.ucsd.edu. 

This is done with using GitHub's webhook API and some custom scripts - 
we'll eventually open source this so other orgs at UCSD can have a similar
setup.
