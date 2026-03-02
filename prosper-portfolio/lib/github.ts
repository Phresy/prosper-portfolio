export async function getGitHubStats(username: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}