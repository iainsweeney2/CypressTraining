pipeline {
   agent any

   tools {nodejs "Node12"}

   environment {
       CHROME_BIN = '/bin/google-chrome'
      
   }

   stages {
       stage('Dependencies') {
           steps {
               sh 'npm i'
           }
       }
       stage('Test 1') {
                  steps {
                sh 'npm run cypress:ci'
                  }
               }
}
}