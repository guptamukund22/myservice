# MyService

A **simple Node.js microservice** built with Express. It listens on port **3000** and responds to HTTP requests with a message. This project is designed to demonstrate a minimal microservice architecture.

## 📌 Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Testing the Service](#testing-the-service)
- [Project Structure](#project-structure)
- [Deploying with PM2](#deploying-with-pm2)
- [Contributing](#contributing)
- [License](#license)

## 📖 Overview

This microservice is a simple Express.js server that:
- Listens on **port 3000**.
- Responds to HTTP GET requests with a basic message.
- Can be deployed in any environment where Node.js is available.

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (version **14+** recommended)
- **npm** (comes with Node.js)

Check if Node.js and npm are installed:
```bash
node -v
npm -v
```

## ⚙️ Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/<YourUsername>/<RepoName>.git
cd <RepoName>
npm install
```

## 🚀 Usage

To start the microservice:

```bash
node app.js
```

You should see:
```
Microservice is running on port 3000
```

The service will now be accessible at **http://localhost:3000**.

## 🔎 Testing the Service

You can test the microservice using a browser or `curl`:

### Using a Browser:
- Open **[http://localhost:3000](http://localhost:3000)** in your web browser.
- You should see:  
  ```
  Hello from my service on Windows!
  ```

### Using `curl`:
```bash
curl http://localhost:3000
```
It should return:
```
Hello from my service on Windows!
```

## 📁 Project Structure

```
myservice/
├── app.js                # Main Express application
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency lock file
└── README.md             # Documentation (this file)
```

## ⚡ Deploying with PM2 (Optional)

If you want the service to keep running even after you close the terminal, use **PM2**:

1. Install PM2 globally:
   ```bash
   npm install -g pm2
   ```
2. Start the service with PM2:
   ```bash
   pm2 start app.js --name myservice
   ```
3. Check PM2 status:
   ```bash
   pm2 status
   ```
4. Restart or stop the service:
   ```bash
   pm2 restart myservice
   pm2 stop myservice
   ```

## 🤝 Contributing

If you’d like to contribute:
1. Fork the repository.
2. Create a new branch:  
   ```bash
   git checkout -b feature-new-functionality
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Added new functionality"
   ```
4. Push to the branch:  
   ```bash
   git push origin feature-new-functionality
   ```
5. Open a **Pull Request** on GitHub.

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

### 📩 Need Help?

If you run into issues, feel free to open an **issue** in the repository or reach out.

Happy coding! 🚀

