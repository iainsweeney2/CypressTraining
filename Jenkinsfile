pipeline {
   agent any

   tools {nodejs "Node"}

   environment {
       CHROME_BIN = '/bin/google-chrome'
      
   }

   stages {
       stage('Dependencies') {
           steps {
               bat 'npm i'
               bat 'npm install cypress --save-dev'
           }
       }
       stage('Test 1') {
                  steps {
                bat 'npm run cy:run'
                  }
               }
}
}