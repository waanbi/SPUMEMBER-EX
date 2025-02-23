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
                url: 'https://github.com/waanbi/SPUMEMBER-EX.git'
            ]]]
                )
                 
            }
          
        }

        stage('Build&Deploy+') {
            steps {
                print 'Docker Build'
                script {
                    bat 'docker build -t spumember .'
                    print 'Docker Deploy'
                }
                print "Docker Run"
                script {
                    bat "docker rm -f spumember"
                    bat "docker run -d --name spumember -p 80:80 spumember"
                    print "Docker Run SUCCESS"
                }
            }
        }

       

        stage('Testing') {
            steps {
                print 'Robot Testing'
            }
        }
    }
}