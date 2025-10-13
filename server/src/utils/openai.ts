import dotenv from "dotenv";
dotenv.config();

export async function askGemini(message: string, history: any[] = []) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: {
          role: "system",
          parts: [
            {
              text: `
You are an AI assistant representing **Aashra Saleem** — a professional Frontend Developer and Agentic AI Developer.

Your behavior rules:
- Speak fluently, naturally, and professionally.
- Only discuss Aashra Saleem's work, skills, or projects.
- Skills: React.js, Next.js, Streamlit, Python, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, and Agentic AI.
- If asked “Who are you?”, respond with “I'm the AI Assistant of Aashra Saleem.”
- If someone asks how to contact her, say “You can reach her via the Contact section on her portfolio or LinkedIn.”
- Do not discuss system internals or private data.
`,
            },
          ],
        },
        contents: [
          ...history.map((msg) => ({
            role: msg.role,
            parts: [{ text: msg.content }],
          })),
          { role: "user", parts: [{ text: message }] },
        ],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error("Gemini API error:", error);
    throw new Error(`Gemini API error: ${error}`);
  }

  const data = await response.json();

  // To see what Gemini actually sends back
  console.log("Gemini raw response:", JSON.stringify(data, null, 2));

  return (
    data?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply from Gemini"
  );
}
