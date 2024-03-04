# Resilient Messaging System with Kafka and MERN 

## Overview

This project addresses the need for a robust messaging system that allows organizations to send and receive messages or data over the network while ensuring message resiliency and disaster recovery. The system is built using the MERN Stack (MongoDB, Express.js, React.js, Node.js), Kafka for asynchronous messaging, Chakra UI for the user interface, and Docker for containerization.

## Purpose

Organizations often face challenges in maintaining the integrity of data transmitted over the network, especially when dealing with potential issues like network interruptions or crashes on the client or server side. This project aims to provide a resilient messaging system that can handle such scenarios by ensuring that messages stay in the queue even when clients are unavailable. The use of Kafka further enhances the system's capacity for disaster recovery.

## Features

1. **Asynchronous Messaging**: The system operates asynchronously, allowing for efficient communication over the network.

2. **Message Resiliency**: Messages are resiliently stored in the queue, ensuring data integrity and availability even in the face of network issues or client/server crashes.

3. **Disaster Recovery with Kafka**: Leveraging Kafka, the system is equipped to recover from disasters, providing a reliable and fault-tolerant messaging solution.

4. **MERN Stack**: Utilizes the MERN stack for seamless integration of MongoDB, Express.js, React.js, and Node.js, ensuring a full-stack development approach.

5. **User Interface with Chakra UI**: The Chakra UI is employed to design an intuitive and user-friendly interface for managing messages and system configurations.

6. **Containerization with Docker**: Docker is used for containerization, simplifying deployment and ensuring consistency across different environments.

<img width="1046" alt="Screenshot 2024-03-04 at 6 17 05 PM" src="https://github.com/hithaishisurendra/messaging-application-with-disaster-recovery-and-message-resiliency/assets/114680442/1aecd585-e40f-49a8-9b96-b60ebc6cf810">


## Project Structure

<img width="692" alt="image" src="https://github.com/hithaishisurendra/messaging-application-with-disaster-recovery-and-message-resiliency/assets/114680442/4f62bc89-0cff-4aa6-bab6-6bbd5a583764">

<img width="824" alt="image" src="https://github.com/hithaishisurendra/messaging-application-with-disaster-recovery-and-message-resiliency/assets/114680442/4d66f2b2-3957-4281-af84-27cc72a7f1b4">



## Getting Started

1. Clone the repository

2. Set up and run the MERN stack and Kafka components following the instructions in the respective directories.

3. Build and run Docker containers

4. Access the messaging system through the provided UI and start sending and receiving messages.

## Messaging Application 

# Login
![image](https://github.com/hithaishisurendra/messaging-application-with-disaster-recovery-and-message-resiliency/assets/114680442/6f1a4355-a8fc-435c-8512-bebd4b010d84) ![image](https://github.com/hithaishisurendra/messaging-application-with-disaster-recovery-and-message-resiliency/assets/114680442/7f8f8c32-6a5d-44e9-bd40-372aa43a7f33)

# Admin Dashboard
![image](https://github.com/hithaishisurendra/messaging-application-with-disaster-recovery-and-message-resiliency/assets/114680442/557d7fb8-ca19-4d4d-be3a-30c28bb4bfd7) ![image](https://github.com/hithaishisurendra/messaging-application-with-disaster-recovery-and-message-resiliency/assets/114680442/040272c4-0821-42e6-bafb-1bfe6a2dbe2f)

# Single and Group Chat
![image](https://github.com/hithaishisurendra/messaging-application-with-disaster-recovery-and-message-resiliency/assets/114680442/8e994354-f060-4c14-aff7-ddc227e0585d) ![image](https://github.com/hithaishisurendra/messaging-application-with-disaster-recovery-and-message-resiliency/assets/114680442/15221865-0c13-4558-b11a-a34bc288a840)



Feel free to reach out for any questions or issues. Build resilient communication with our messaging system! 🚀💬
