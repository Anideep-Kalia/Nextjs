// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// so here we have backend files so we don't have to use other applications for our backend work
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
