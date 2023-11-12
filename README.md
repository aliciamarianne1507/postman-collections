# Postman Collections 

## About the project 

This project contains the files from a project of testing APIs, using Postman and Newman. 

### Using Newman to run the collections

#### Setup
Newman is built on Node.js. To run Newman, make sure you have Node.js installed. Follow the steps to download Node for your CI's platform.

If you already have node installed, ensure you are using Node.js v4 or above:

```
node -v
```

Install Newman from npm globally on your system, which allows you to run it from anywhere:

```
npm install -g newman
```

#### Running the collection

To run your tests using Newman, first, download the collection file and environment file. Navigate to the folder of your collection command line and run the command:

```
newman run apiBooks-final.json -e test.postman_environment.json
```
You will receive all the results of the tests inside of this collection:

![results](https://res.cloudinary.com/practicaldev/image/fetch/s--PCU0FNyL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ro03ktjme2q5obmcfqg7.png)

![results2](https://res.cloudinary.com/practicaldev/image/fetch/s--PuHRFgVi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/310vuiksoh47t0rw2q7e.png)


#### Generating reports

To help us to have a better view of our tests, is possible to generate a HTML file with the results of our run, we'll use the HTML reporter library. To install it use:

```
npm install -g newman-reporter-html

```

Now, when executing our tests we need to inform that we want to have the results at a html file:

```
newman run apiBooks-final.json -e test.postman_environment.json -r html

```
For more details, check my article [here](https://dev.to/m4rri4nne/boost-your-experience-with-postman-part-ii-5cde)
