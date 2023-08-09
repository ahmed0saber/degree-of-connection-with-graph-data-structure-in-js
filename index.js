import ConnectionHandler from "./connection-handler.js"

const connectionHandler = new ConnectionHandler()

connectionHandler.addVertex("Ahmed")
connectionHandler.addVertex("Mohamed")
connectionHandler.addVertex("Ali")
connectionHandler.addVertex("Ashraf")
connectionHandler.addVertex("Khaled")
connectionHandler.addVertex("Waleed")

connectionHandler.addEdge("Ahmed", "Mohamed")
connectionHandler.addEdge("Mohamed", "Ali")
connectionHandler.addEdge("Ali", "Ashraf")
connectionHandler.addEdge("Ashraf", "Khaled")

const degreeOfConnection = connectionHandler.findDegreeOfConnection("Ahmed", "Waleed")
console.log('Degree of Connection:', degreeOfConnection)
