pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    stages {
        stage('Install System Dependencies') {
            steps {
                sh '''
                  if command -v apt-get >/dev/null 2>&1; then
                    apt-get update
                    apt-get install -y libatomic1
                  fi
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
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
                sh 'npm test'
            }
        }
    }
}

