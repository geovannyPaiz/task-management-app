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
