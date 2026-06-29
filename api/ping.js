export function GET(request) {
  const resp = {
    ok: true,
    result: 'pong'
  };
  return new Response(JSON.stringify(resp), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
