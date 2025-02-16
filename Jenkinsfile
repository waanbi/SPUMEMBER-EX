pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                checkout([
                     $class: 'GitSCM',
            branches: [[name: '*/main']],
            userRemoteConfigs: [[
                credentialsId: 'nakares',
                url: 'git@github.com:waanbi/SPUMEMBER-EX.git'
            ]]]
                )
                 
            }
          
        }

        stage('Build&Deploy+') {
            steps {
                print 'Docker Build'
            }
        }

       

        stage('Testing') {
            steps {
                print 'Robot Testing'
            }
        }
    }
}