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
