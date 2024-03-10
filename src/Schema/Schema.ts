import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {
  addNewUserToTeam,
  availableRepositories,
  availableRepositoriesStream,
  createGithubAccount,
  createTeam,
  installationSetup,
  installationSetupStream,
  loginWithGithub,
  logout,
  myTeams,
  overallStatsPerUser,
  setOrganizationRepositories,
  setRepositoryStats,
  standouts,
  teams,
  totalRepositories,
  totalTeams,
  trackedRepositories,
  trackRepository,
  userAndAffiliations,
  verifyAnonymous,
  verifySession,
} from "./Resolvers";

const QueryRoot = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    teams,
    myTeams,
    standouts,
    totalTeams,
    installationSetup,
    userAndAffiliations,
    trackedRepositories,
    availableRepositories,
    overallStatsPerUser,
    totalRepositories,
  }),
});

const MutationRoot = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    logout,
    createTeam,
    verifySession,
    verifyAnonymous,
    loginWithGithub,
    trackRepository,
    createGithubAccount,
    setRepositoryStats,
    addNewUserToTeam,
    setOrganizationRepositories,
  }),
});

const SubscriptionRoot = new GraphQLObjectType({
  name: "Subscription",
  fields: () => ({
    installationSetupStream,
    availableRepositoriesStream,
  }),
});

export const Schema = new GraphQLSchema({
  query: QueryRoot,
  mutation: MutationRoot,
  subscription: SubscriptionRoot,
});
