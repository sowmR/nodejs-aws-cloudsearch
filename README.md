# nodejs-aws-cloudsearch
 We can run the aws cloud search from our browser using the nodejs. Here I am using angularjs as Front-end.

	"Before we start, please use this git as reference for code. if you just copy and paste the whole project, it will not work as this a snippets of tested codes. This git doesnot have the 'bower_component' and 'node_modules' folder that will be automatically created when doing npm install. Comments on the code will give you a good reference of what it is doing." 
 
1) First, we need to install nodejs and MongoDB in the system. If you already have them, goto step2
      install nodejs from nodejs.org
      install MongoDB from  www.Mongodb.com
2) Now we have to set up the project.In command prompt,
     
		 	mkdir <appdir>
			
			cd <appdir>
      
			npm init  
			
 (this will ask you to enter informations to create the package.json file. Whenever you make changes to package.json file, run npm init to install the specified dependencies if not already installed.)
  	
		npm install express --save (--save will install the dependency and save it in package.json)
	  
		npm install mangoose

	If you have multiple dependencies to be installed, the easy way is to create the package.json file in the <appdir> and then run the npm install. 

   ex- the following code has main dependencies listed: 
		
    			{
		
						"name"         : "sample-ajsnode",

						"version"      : "1.0.0",

						"description"  : "Simple Angular-Node application.",

						"main"         : "server.js",

						"author"       : "RiteSourceIT",

						"dependencies" : {

							"body-parser"    : "^1.4.3",

							"express"        : "^4.13.4",

							"method-override": "^2.1.3",

							"mongoose"       : "^4.4.12",

							"morgan"         : "^1.1.1"

						}

						}

Now the dependencies can be installed by running the following command in the command prompt.
		
			npm install 
    
In the above the package.json file, "main:" will have the file that the app will mainly run on. Hence server.js is the file all the nodejs configurations will be created.  

3)After the set up is done. lets test run the server. To run the server,use this command in the command prompt.

			node server.js

Automatically restart server when files change: By default, node will not monitor for file changes after your server has been started. This means you’d have to shut down and start the server every time you made a file change. This can be fixed with nodemon. To use: install nodemon globally

			npm install -g nodemon. 

Start your server with
			nodemon server.js

Smooth sailing from there.


4) For AWS cloud search, you need to have an aws account with data in it the cloud. Bofore writing the code in the server.js, we need to have aws-sdk installed in the directory. To do that use the following command in the command prompt.

			npm install aws-sdk
		
5) Next we will create a file with aws access keys
6) write the nodejs code to make connections , retrieve the search data  and then pass it to the angular App in server.js
7) Create an angularjs fileset to display the informations.  
 
