pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/suyashpandey1203/quote-of-the-day.git'
            }
        }
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo '🎉 App deployed with updated quote!'
            }
        }
    }
}