from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import pipeline
import os

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the text generation model
generator = pipeline('text-generation', model='gpt2')

class MessageRequest(BaseModel):
    message: str

SYSTEM_PROMPT = """
You are Suma, an AI assistant for Toko Suma, a store that sells books, stationery, and other products.
You are helpful, friendly, and knowledgeable about the products.
Answer questions in Indonesian language.
If you don't know the answer, say "Maaf, saya tidak tahu."
"""

@app.post("/ask-to-chat-gpt")
async def ask_to_chat_gpt(request: MessageRequest):
    try:
        prompt = SYSTEM_PROMPT + "\nUser: " + request.message + "\nSuma:"
        response = generator(prompt, max_length=200, num_return_sequences=1, temperature=0.7, do_sample=True, pad_token_id=50256)
        replied_message = response[0]['generated_text'].split("Suma:")[-1].strip()
        return {"from": "chatGpt", "data": replied_message}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)