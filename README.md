# README

•A recipe application using React and Rails where users can sign in to their account where they can create new recipes, read current recipes, update recipes, and delete recipes. 

•install postgresql: 

  $ sudo apt update
  
  $ sudo apt install postgresql postgresql-contrib libpq-dev
  
  start the postgresql service: $ sudo service postgresql start
  
  Create a database user so that you are able to connect to the database from Rails:
  
    run $ whoami to check your operating system username ("username")
    
    create a user by running $ sudo -u postgres -i
    
    $ createuser -sr "username"
    
•run bundle install

•run rails s to start up the server

•run npm install, npm start --prefix client to start up the backend


•This application uses Rails 7.

