# DRY SignalR and React.js Example App

This is an example application that demonstrates how to use SignalR with React.js in a DRY way.

The application is a simple chat client that allows users to broadcast messages to all users in the chat room.

## How did we manage to get DRY?

SignalR connections are made with strings. This means that you have to write the same string in two places: the server and the client. This is not DRY.

To solve this problem, we created a Swagger spec, which exposes the SignalR connections details. This makes it so that we can use the same information for connecting to a hub on both the server and the client. If we change a hub path or a method name, we only have to change it in one place. After regenerating the TypeScript types on the frontend, we will get compiler errors for the changed types. This makes it so that we can be sure that we have updated all the necessary places.
