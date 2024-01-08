pipeline {
   agent any

   tools {nodejs "Node"}

   environment {
       CHROME_BIN = '/bin/google-chrome'
      
   }

   stages {
       stage('Dependencies') {
           steps {
               echo "this is where npm i would be ran"
           }
       }
       stage('Test 1') {
                  steps {
                bat 'npm run cy:run'
                  }
               }
}
}