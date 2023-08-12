export const createProjectMutation = `
	mutation ProjectCreate($input: ProjectCreateInput!) {
		projectCreate(input: $input) {
			project {
        id
        title
        description
        image
        liveSiteUrl
        githubUrl
        category
        createdBy {
          name
          email
        }
      }
		}
	}
`;

export const updateProjectMutation = `
	mutation UpdateProject($id: ID!, $input: ProjectUpdateInput!) {
		projectUpdate(by: { id: $id }, input: $input) {
			project {
				id
				title
				description
				createdBy {
					email
					name
				}
			}
		}
	}
`;

export const deleteProjectMutation = `
  mutation DeleteProject($id: ID!) {
    projectDelete(by: { id: $id }) {
      deletedId
    }
  }
`;
      
export const createUserMutation = `
	mutation CreateUser($input: UserCreateInput!) {
		userCreate(input: $input) {
			user {
				name
				email
				avatarUrl
				description
				githubUrl
				linkedinUrl
				id
			}
		}
	}
`;

export const projectsQuery = `
  query getProjects($category: String, $endcursor: String) {
    projectSearch(first: 8, after: $endcursor, filter: {
      category: { OR: [{ eq: $category }, { eq: null }] }
    }) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          title
          description
          image
          liveSiteUrl
          githubUrl
          category
          createdBy {
            id
            name
            email
            avatarUrl
          }
        }
      }
    }
  }
`;


export const getProjectByIdQuery = `
  query GetProjectById($id: ID!) {
    project(by: { id: $id }) {
      id
      title
      description
      image
      liveSiteUrl
      githubUrl
      category
      createdBy {
        id
        name
        email
        avatarUrl
      }
    }
  }
`;

export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: { email: $email }) {
      id
      name
      email
      avatarUrl
      description
      githubUrl
      linkedinUrl
    }
  }
`;
      
export const getProjectsOfUserQuery = `
  query getUserProjects($id: ID!, $last: Int = 4) {
    user(by: { id: $id }) {
      id
      name
      email
      description
      avatarUrl
      githubUrl
      linkedinUrl
      projects(last: $last) {
        edges {
          node {
            id
            title
            image
          }
        }
      }
    }
  }
`;