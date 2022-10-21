import { Octokit } from "octokit";

// export interface GithubStats {
//   stars: number;
//   pullRequests: number;
//   contributors: number;
// }

const TOKEN = process.env.GATSBY_GH_TOKEN;

const octokit = new Octokit({
  auth: TOKEN,
});

// Counts octokit response paginated resources.
async function iterableItemCount(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iterator
) {
  let count = 0;
  for await (const { data: items } of iterator) {
    count += items.length;
  }
  return count;
}

// Uses github rest api to get and count the contributors
// Currently no graphql alternative.
async function getNumContributors() {
  return iterableItemCount(
    octokit.paginate.iterator(octokit.rest.repos.listContributors, {
      owner: "defenseunicorns",
      repo: "zarf",
      per_page: 100,
      anon: "true",
    })
  );
}

// GH Rest api for stargazers
// Fall back method for dev or if access token is not passed.
async function getNumStars() {
  return (
    await octokit.rest.repos.get({ owner: "defenseunicorns", repo: "zarf" })
  ).data.stargazers_count;
}

// GH Rest api for counting prs.
// Fall back method for dev or if access token not passed.
async function getNumPullRequests() {
  return iterableItemCount(
    octokit.paginate.iterator(octokit.rest.pulls.list, {
      owner: "defenseunicorns",
      repo: "zarf",
      per_page: 100,
      state: "all",
    })
  );
}

// Graph ql request for prs and stargazers
// Requires access token.
async function graphStarsAndPrs() {
  const {
    repository: {
      pullRequests: { totalCount: prs },
      stargazerCount: stars,
    },
  } = await octokit.graphql(`{
    repository(name: "zarf", owner: "defenseunicorns") {
      pullRequests {
        totalCount
      }
      stargazerCount
    }
  }`);
  return [stars, prs];
}

// Returns [starCount, prCount]
// Runs the optimal graphql request if gh auth token exists
// Falls back to the rest call without a token.
async function getStarsAndPrs() {
  return TOKEN
    ? graphStarsAndPrs()
    : (async () => [await getNumStars(), await getNumPullRequests()])();
}

// Returns populated GithubStats object for use in StatsCard
export async function getGithubStats() {
  const [contributors, [stars, pullRequests]] = await Promise.all([
    getNumContributors(),
    getStarsAndPrs(),
  ]);
  return {
    contributors,
    stars,
    pullRequests,
  };
}
