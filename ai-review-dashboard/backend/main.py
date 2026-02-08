import os
import json
import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv


load_dotenv()


genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel('gemini-2.5-flash')

app = FastAPI(title="AI Review Assistant API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ReviewRequest(BaseModel):
    review_text: str

@app.post("/analyze")
async def analyze_review(request: ReviewRequest):
    if not request.review_text.strip():
        raise HTTPException(status_code=400, detail="Review text cannot be empty")

    try:
        prompt = f"""
        You are an expert Customer Success AI. Your task is to analyze a customer review and draft responses.
        
        INPUT REVIEW: "{request.review_text}"
        
        INSTRUCTIONS:
        1. Analyze the sentiment (Positive, Negative, or Neutral).
        2. Identify key issues or compliments.
        3. Draft 3 distinct responses:
            - "Professional": Formal, polite, suitable for corporate.
            - "Friendly": Casual, warm, suitable for social media.
            - "Concise": Short, acknowledging, suitable for quick replies.
        
        FORMAT:
        Return ONLY valid JSON. Do not use markdown code blocks. Structure:
        {{
            "sentiment": "Positive/Negative/Neutral",
            "key_points": ["point 1", "point 2"],
            "responses": {{
                "Professional": "text...",
                "Friendly": "text...",
                "Concise": "text..."
            }}
        }}
        """

        response = model.generate_content(prompt)
        
        cleaned_text = response.text.replace("```json", "").replace("```", "").strip()
        
        return json.loads(cleaned_text)

    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="AI processing failed")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)