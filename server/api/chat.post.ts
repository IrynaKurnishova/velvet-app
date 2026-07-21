export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.groqApiKey}`,
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            max_tokens: 500,
            messages: [
                {
                    role: 'system',
                    content: `You are a helpful assistant for Velvet — a premium beauty salon and restaurant in Turin, Italy. Answer questions about services, prices, booking, and working hours. Services: Hair styling from €65, Facial care from €80, Full ritual from €140, Massage from €70, Manicure from €40, Pedicure from €50. Working hours: Mon-Sat 9:00-20:00, Sun 10:00-18:00.`
                },
                {
                    role: 'user',
                    content: body.message
                }
            ],
        }),
    })

    const data = await response.json()

    if (!data.choices) {
        throw new Error(data.error?.message || 'Groq API error')
    }

    return { reply: data.choices[0].message.content }
})
