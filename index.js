const dev = {
  SUPABASE_URL: 'http://localhost:54321',
  SUPABASE_ANON_KEY:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0',
};

const prod = {
  SUPABASE_URL: 'https://vyvqjhydaykkoatqohiu.supabase.co',
  SUPABASE_ANON_KEY:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5dnFqaHlkYXlra29hdHFvaGl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyMzI4OTcsImV4cCI6MjAxNjgwODg5N30.N7ZTPZb-6LnyjcWJOzf1jibHYtZ9VoB-snxHJEt1DcQ',
};

const env = prod;

const helloWorld = (name) =>
  fetch(`${env.SUPABASE_URL}/functions/v1/hello-world`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Functions',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));

helloWorld('Functions');
