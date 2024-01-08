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
               bat 'npm cypress install'
           }
       }
       stage('Test 1') {
                  steps {
                bat 'npm run cy:run'
                  }
               }
}
}