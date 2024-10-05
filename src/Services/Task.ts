import { gql } from "@apollo/client";

export const GET_TASK = gql`
  query {
    tasks(input: {}) {
      id
      name
      status
      dueDate
      pointEstimate
      tags
      position
      assignee {
        fullName
        email
        avatar
        id
      }
    }
  }
`;

export const CREATE_TASK_MUTATION = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      name
      dueDate
      pointEstimate
      status
      tags
      assignee {
        id
        fullName
      }
    }
  }
`;

export const DELETE_TASK_MUTATION = gql`
  mutation DeleteTask($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      id
      name
    }
  }
`;

export const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      id
      name
      dueDate
      pointEstimate
      status
      tags
      assignee {
        id
        fullName
      }
    }
  }
`;
