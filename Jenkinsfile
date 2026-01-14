pipeline {
  agent any

  stages {

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Build Artifact') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t form-validation-app .'
      }
    }

    stage('Deploy to Azure VM') {
      steps {
        sh '''
        docker stop form-app || true
        docker rm form-app || true
        docker run -d -p 80:80 --name form-app form-validation-app
        '''
      }
    }
  }
}
