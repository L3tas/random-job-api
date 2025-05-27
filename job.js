export default async function handler(req, res) {
  const response = await fetch('https://raw.githubusercontent.com/L3tas/twitch-jobs-list/refs/heads/main/jobs.txt');
  const text = await response.text();
  const jobs = text.trim().split('\n');
  const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
  res.status(200).send(randomJob);
}
