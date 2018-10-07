pipeline {
  agent any
  stages {
    stage('Build JS') {
      steps {
        sh '''npm install
npm run compile'''
      }
    }
    stage('Tests') {
      steps {
        sh 'npm test'
        sh 'npm run eslint'
      }
    }
  }
}