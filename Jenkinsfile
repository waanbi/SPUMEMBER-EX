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
                print 'Docker Build'
            }
        }

        stage('Deploy Image') {
            steps {
                print 'Docker Deploy Image'
            }
        }

        stage('Testing') {
            steps {
                print 'Robot Testing'
            }
        }
    }
}