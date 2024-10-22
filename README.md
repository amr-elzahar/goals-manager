# Goals Manager Application

This is a full-stack application consisting of a **Next.js frontend**, **NestJS backend**, and **MongoDB database**. The application is designed to manage goals where users can add, fetch, and remove goals. The entire stack is containerized and deployed in a minikube cluster.

### Architecture

The application follows a **3-tier architecture**:

1. **Frontend**: The UI is built with Next.js and communicates with the backend via REST API.
2. **Backend**: The backend is built using NestJS, which exposes API endpoints for goal management.
3. **Database**: MongoDB is used as the database to store goal data. It's deployed as a StatefulSet in Kubernetes.

### Setup Instructions

1. **Clone the repository**:

```bash
git clone https://github.com/your-repo/goals-manager.git
cd goals-manager
```

### Build the Docker images:

1. For Frontend:

```bash
docker build -t <your-docker-username>/goals-manager-frontend ./frontend
docker push <your-docker-username>/goals-manager-frontend
```

2. For Backend:

```bash
docker build -t <your-docker-username>/goals-manager-backend ./backend
docker push <your-docker-username>/goals-manager-backend
```

### Deploy to Kubernetes:

Apply the Kubernetes manifests:

```bash
kubectl apply -f k8s-deployment/
```

### Accessing the Application

Once the Kubernetes deployment is complete, you can access the application through the specified Ingress URL:

```bash
http://mynextjs-application.com
```
