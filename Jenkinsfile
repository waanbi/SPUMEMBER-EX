pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/waanbi/SPUMEMBER-EX.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    print 'Docker Build'
                }
            }
        }

        stage('Deploy Image') {
            steps {
                script {
                    print 'Docker Deploy IMG'	
                }
            }
        }

        stage('Testing') {
            steps {
                script {
                    print 'Testing'
                }
            }
        }
    }
}