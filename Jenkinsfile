pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                print 'Git Clone'
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