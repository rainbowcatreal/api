export function GET(request) {
  resp = {
    ok: true,
    result: 'ping'
  }
  return new Response(JSON.stringify(resp), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
