import "dotenv/config";

const getGroqResponse = async (messages) => {
    
    
    const cleanMessages = messages.map(msg => ({
        role: msg.role,
        content: msg.content
    }));

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: Array.isArray(cleanMessages)
                ? cleanMessages
                : [{ role: "user", content: cleanMessages }]
        })
    };

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", options);
    
    if (!response.ok) throw new Error(`Groq API error: ${response.status}`);
    
    const data = await response.json();
    return data.choices[0].message.content;
};

export default getGroqResponse;